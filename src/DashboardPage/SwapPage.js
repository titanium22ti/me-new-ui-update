import React, { useState, useEffect, useRef } from 'react';
import PageFilter from '../DashboardComponent/Common/PageFilter';
import usdc_1 from '../assets/images/Dashboard/usdc_1.svg';
import usdc_3 from '../assets/images/Dashboard/usdc_3.svg';
import mer_dai_icon from '../assets/images/Dashboard/mer_dai_icon.svg';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';
import { WebBotton } from '../component/common/WebBotton';
import SwapTokensPop from '../DashboardComponent/Common/SwapTokensPop';
import ConfirmSwapPop from '../DashboardComponent/Common/ConfirmSwapPop';
import box_Swap_icon from '../assets/images/Dashboard/box_Swap_icon.svg';
import mercurycoin from '../assets/images/Dashboard/MeCoin.png';
import avaxLogo from '../assets/images/HomePage/usd-coin-usdc-logo.png';


import { AptosClient, Types } from 'aptos';
import { deployeraddress, pooladdress, tokencreator, assetbalance, liabilitycal, poolassetbalance, createtpairhistory, uservisits} from '../config';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { WebOffBotton } from '../component/common/WebOffBotton';
import "../toast-style-override.css";
import { CLoadingButton } from '@coreui/react-pro'
import ButtonLoad from 'react-bootstrap-button-loader';
import { BLACKTokenABI, BLACKTokenAddress, USDCAddress, ChainlinkPriceFeedOracleAddress, ChainlinkPriceFeedOracleABI, BurnVaultAddress, BurnVaultABI } from '../abi/abi';
import { ethers } from 'ethers';
import { FaExclamationTriangle } from 'react-icons/fa';
import { createTxn, recordDashBoardDetails, recordUserVisits } from "../abi/firebasecode";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';

/* global BigInt */
const SwapPage = ({balanceOfTokens}) => {
    const { walletProvider } = useWeb3ModalProvider();
    const { address, chainId, isConnected } = useWeb3ModalAccount()

    const url = "https://base-sepolia-rpc.publicnode.com";
    const provider = new ethers.providers.JsonRpcProvider(url);

    const [daibalance, setdaibalance] = useState("");
    const [usdcbalance, setusdcbalance] = useState("");
    const [usdtbalance, setusdtbalance] = useState("");
    const [value,setvalue] = useState("");
    
    const[loader, setLoader] = useState(false);
    const [amount, setamount] = useState("")
    const [amount2, setamount2] = useState("")
    const [poolbalance, setpoolbalance] = useState("");
    const [swapLimit, setSwaplimit] = useState("")
    const [isNew, setisNew] = useState(null)
    const [mebalance, setmebalance] = useState("")

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);

    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);

    const [SwapOpen, setSwapOpen] = React.useState(false);
    const SwapHandleOpen = () => setSwapOpen(true);
    const SwapHandleClose = () => setSwapOpen(false);
    const [liability, setliability] = useState("");

    const [state, setState] = useState(false)

    const AlertBTN = () => alert("Select a Token")
    // useEffect(() => {fetchvalues()},[])
    // const fetchvalues = async()=>{
    //     SetTovalue(TokenData[1]);
    //     settoken(TokenData[1].id)
    // }
    // const [amount, setamount] = useState("")
    const[AvaxValue,setAvaxValue] = useState("");
    // const[loader, setLoader] = useState(false);
    const[Allowance,setAllowance] = useState("");
    const[lpValue,setlpValue] = useState("");
    const asset = async() =>{
        console.log("Jokerburnedcontract",localStorage.getItem("walletAddress"))
        if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
        }
        else{
            const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);
            const priceFeed = new ethers.Contract(ChainlinkPriceFeedOracleAddress, ChainlinkPriceFeedOracleABI, provider);
            const burnvaultContract =  new ethers.Contract(BurnVaultAddress,BurnVaultABI,provider);

            let SwapLimit = ethers.utils.formatUnits(await JOKERContract.SwapLimit(localStorage.getItem("walletAddress")),0);
            let SwapTrack = ethers.utils.formatUnits(await JOKERContract.SwapTrack(localStorage.getItem("walletAddress")),0);
            let isNew1 = await JOKERContract.isnew(localStorage.getItem("walletAddress"));
            setisNew(isNew1);
            console.log("swapLimit:", SwapLimit, SwapTrack, SwapLimit - SwapTrack);
            setSwaplimit(SwapLimit - SwapTrack);

            let Jokerbalancecontract = ethers.utils.formatUnits(await JOKERContract.totalSupply(),0);
            let Jokerburnedcontract = ethers.utils.formatUnits(await JOKERContract.totalBurn(),0);
            console.log("Jokerburnedcontract",Jokerburnedcontract)
            let circulatingSupply = parseFloat(Jokerbalancecontract) - parseFloat(Jokerburnedcontract);
            setmesupply(circulatingSupply);
            let mebal = ethers.utils.formatUnits(await JOKERContract.balanceOf(localStorage.getItem("walletAddress")),0);
            setmebalance((mebal * 20)/100);
            let allowance =  ethers.utils.formatUnits(await JOKERContract.allowance(localStorage.getItem("walletAddress"),localStorage.getItem("walletAddress")),0);
            setAllowance(allowance)
            await balanceOfTokens();
            let avaxSpent = ethers.utils.formatUnits(await JOKERContract.checkSwapValue(1*1e9,[BLACKTokenAddress,USDCAddress]),0);
            const roundData = await priceFeed.latestRoundData();
            const decimals = await priceFeed.decimals(); // Fetch decimals for conversion

            // Convert answer (int256) to a human-readable number based on decimals
            const ethPriceInUsd = parseFloat(ethers.utils.formatUnits(roundData[1].toString(), decimals));
            console.log("latest eth price : ", ethPriceInUsd);
            const Meprice = avaxSpent * (ethPriceInUsd * 10 ** decimals);
            console.log("latest ME price : ", parseFloat((Meprice / 1e18) / 10 ** decimals));
            const MepriceInUsd = parseFloat((Meprice / 1e18) / 10 ** decimals);

            const MEBurnVaultBal = ethers.utils.formatUnits(await JOKERContract.balanceOf(BurnVaultAddress),0);
            const MEBurnedamt = ethers.utils.formatUnits(await JOKERContract.balanceOf("0x0000000000000000000000000000000000000000"),0);
            const TotalSupplyMe = ethers.utils.formatUnits(await JOKERContract.totalSupply(),0);
            const CirculatingSupplyMe = TotalSupplyMe - (MEBurnVaultBal + MEBurnedamt);

            const FloorPrice = ethers.utils.formatUnits(await burnvaultContract.getBTCValue(1e9),0);
            
            recordDashBoardDetails(MepriceInUsd, parseFloat(CirculatingSupplyMe/1e9), parseFloat(FloorPrice/1e18).toFixed(18), "Dashboard_Details");
            recordUserVisits(address, "Swap");
        }
    }
    useEffect(() => {
        assetFlush();
        asset();
    }, [isConnected, address]);

    const assetFlush = () => {
        setamount("");
        setAvaxValue("");
    }

    const changeinput = async(e) =>{
         // Check if the input value is a valid number
    if (e === "" || e === null || e === NaN || e === "." || isNaN(e) || hasMoreThan18Decimals(e)) {
        // If not a valid number, set the bondAmount state to 0
        setamount("");
        return; // Exit the function
    }
        setamount(e);
        const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);    
        let avaxSpent = ethers.utils.formatUnits(await JOKERContract.checkSwapValue(BigInt(e*1e9),[BLACKTokenAddress,USDCAddress]),0);
        console.log("avaxSpent",parseFloat(avaxSpent))
        let feesdeductedvalue = (parseFloat(avaxSpent)*50/100)/1e6;
        setAvaxValue(feesdeductedvalue)
        // let feesdeducted = avaxSpent-(avaxSpent*0.0997/100);
        // console.log("liquidity fees",avaxSpent,(avaxSpent*0.0997/100),feesdeducted-(avaxSpent*2/100))
        // setlpValue(parseFloat(feesdeducted)-(parseFloat(feesdeducted*2/100)))
        
        
      }
 // Function to check if the input has more than 18 decimal places
 const hasMoreThan18Decimals = (value) => {
    const parts = value.toString().split('.');
    if (parts.length === 2 && parts[1].length > 18) {
        return true;
    }
    return false;
};
      const maxval = async() =>{
        const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);
        let bala;
        if(isNew ==false){
            bala = ethers.utils.formatUnits(await JOKERContract.balanceOf(localStorage.getItem("walletAddress")),0);
            setamount(((bala * 20)/100)/1e9);
            let avaxSpent = ethers.utils.formatUnits(await JOKERContract.checkSwapValue(BigInt((bala * 20)/100),[BLACKTokenAddress,USDCAddress]),0);
            console.log("avaxSpent",parseFloat(avaxSpent/1e6))
            let feesdeductedvalue = (parseFloat(avaxSpent)*50/100)/1e6;
            setAvaxValue(feesdeductedvalue)
        }else if(isNew == true){
            bala = swapLimit;
            setamount((bala)/1e9);
            let avaxSpent = ethers.utils.formatUnits(await JOKERContract.checkSwapValue(BigInt(bala),[BLACKTokenAddress,USDCAddress]),0);
            console.log("avaxSpent",parseFloat(avaxSpent/1e6))
            let feesdeductedvalue = (parseFloat(avaxSpent)*50/100)/1e6;
            setAvaxValue(feesdeductedvalue)
        }
        
      }

    // const TokenData = [
    //     {
    //         id: "USDT",
    //         text: "USDT",
    //         imglogo: usdc_3,
    //         currVal:usdtbalance?parseFloat(usdtbalance/100000000).toFixed(3):0,
    //         Rate: 0.998668,
    //         fee: 0.998668,
    //         Minimum_Received: 0.998668,
    //     },
    //     {
    //         id: "USDC",
    //         text: "USDC",
    //         imglogo: usdc_1,
    //         currVal:usdcbalance?parseFloat(usdcbalance/100000000).toFixed(3):0,
    //         Rate: 0.998600,
    //         fee: 0.998600,
    //         Minimum_Received: 0.998600,
    //     },
    //     {
    //         id: "DAI",
    //         text: "DAI",
    //         imglogo: mer_dai_icon,
    //         currVal: daibalance?parseFloat(daibalance/100000000).toFixed(3):0,
    //         Rate: 0.998610,
    //         fee: 0.998610,
    //         Minimum_Received: 0.998610,
    //     }

    // ]

    // const buttonload = async() =>{
    //     console.log("going")
    //     var buttonLoader = document.querySelectorAll('.hero_btn a');
    //     buttonLoader.forEach(function(i){
    //     i.addEventListener('click', function(el){
    //         i.classList.toggle("button_loading");
    //         i.disabled = true;
    //     });
    // });
    // }


    // const buttonloadofff = async() =>{
    //     console.log("going")
    //     var buttonLoader = document.querySelectorAll('.hero_btn a');
    //     buttonLoader.forEach(function(i){
    //     i.addEventListener('click', function(el){
    //         // i.classList.toggle("button_loading");
    //         i.disabled = true;
    //     });
    // });
    // }


  


    let From_Value = 0;
    const [token, settoken] = React.useState(null);
    const [Tovalue, SetTovalue] = React.useState(null);

    const [token2, settoken2] = React.useState(null);
    const [Tovalue2, SetTovalue2] = React.useState(null);
    const[notregistered, setnotregister] = React.useState(false);
console.log("notre",notregistered)
const [mesupply, setmesupply] = useState("");

   
    

   
    // const asset = async () => {
    //     const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    //   //let k =await fetch("0xb23b85ed02837dfb40e517ad140bc600a68c59ab85e65150a9de21ec3dbde80e");
    //   if(localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " ||  localStorage.getItem("walletAddress") === '' || localStorage.getItem("walletAddress") === undefined){

    //   } 
    //   else{
    //     let b = await assetbalance(localStorage.getItem("walletAddress"),"DAI")
    //     console.log("usdcbalance",b  )
    //     setdaibalance(b  )
    //     let b1 = await assetbalance(localStorage.getItem("walletAddress"),"USDC")
    //     console.log("usdcbalance",b1  )
    //     setusdcbalance(b1  )
    //     let b2 = await assetbalance(localStorage.getItem("walletAddress"),"USDT")
    //     console.log("usdtbalance",b2  )
    //     setusdtbalance(b2  )


        
        
    //   }

    
    // }

    // const resetstate = async()=>{
    //     setamount("");
    //     setamount2("");

    // }

//     const OnSubmit = (e) => {
//         handleClose();
//         settoken(e.currentTarget.id);

//         var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
//         for (let val of FilterData) {
//             FilterData = val;
//         };
//         SetTovalue(FilterData);
//         console.log("tovalue",FilterData,e.currentTarget.id)
//     };

//     const OnSubmit2 = async(e) => {
        
//         settoken2(e.currentTarget.id);

//         var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
//         for (let val of FilterData) {
//             FilterData = val;
//         };
//         SetTovalue2(FilterData);
//         console.log("tovalue",FilterData)
//         if(FilterData.currVal === "-0.000"){
//             setnotregister(true)
//         }
//         else{
//             setnotregister(false)
//         }

//         let k = await liabilitycal(FilterData.text)
//     //   console.log("liability",k)
//       setliability(k)
//       resetstate();
//       handleClose2();
//       let c = await poolassetbalance(localStorage.getItem("walletAddress"),pooladdress,FilterData.text)
//     //   console.log("poolusdt",c )
//       setpoolbalance(c )
      
     
//     };
//     function formatter(number){
//         try{
//           const formattedNumber = Number(
//             number.toString().match(/^\d+(?:\.\d{0,3})?/)
//           )
//           let s = number.toString().match(/^\d+(?:\.\d{0,3})?/);
//           // console.log("formatted",s)
    
//           return s[0];
//         }catch(err){
//           return 0;
//         }
        
//   }
//     const swapf = async () => {
//         if(amount == "" || amount == 0 || amount == undefined || amount == null){
//             toast.error(`Zero input not allowed`)
//             setLoader(false)
//             // handleHideLoad()
//             return 1;
            
//           }
//           else{
//            return 0; //next line
//    }
//     }

//     const swapcheck = async () => {
//         console.log("amount",amount,Tovalue.currVal)
//         if((amount*100000000) > (Tovalue.currVal*100000000)){
//             toast.error(`Your are entering more than your wallet balance`)
//             setLoader(false)
//             // handleHideLoad()
//             return 1;
            
//           }
//           else{
//            return 0; //next line
//     }
//     }

//     const swapsamecheck = async () => {
        
//         if(Tovalue.text === Tovalue2.text){
//             toast.error(`Choose different token`)
//             setLoader(false)
//             // handleHideLoad()
            
//             return 1;
            
//           }
//           else{
//            return 0; //next line
//          }
//     }

    // const Swap = async () => {
    //     setLoader(true)
    //     // await createtpairhistory("hh","Swap",amount*100000000);
    //     let a = await swapf();
    //     if(a==1){
    //         return;
    //     }
    //     let b = await swapcheck();
    //     if(b==1){
    //         return;
    //     }
    //     let c = await swapsamecheck();
    //     if(c==1){
    //         return;
    //     }
    //     let g = Math.floor(new Date().getTime()/1000.0)
    //     const transaction = {
    //         type: "entry_function_payload",
    //         function: `${deployeraddress}::pool::swap`,
    //         arguments: [pooladdress, parseInt(amount*100000000), 10, g+1000],
    //         type_arguments: [`${tokencreator}::TestCoins::${Tovalue.text}`, `${tokencreator}::TestCoins::${Tovalue2.text}`],
    //     };
    //     try {
    //        let pendingTransaction = await swappet(transaction)
    //         console.log("pendingTransaction", pendingTransaction);
    //         const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    //         client.waitForTransaction(pendingTransaction);
    //         await createtpairhistory(pendingTransaction,"Swap",amount*100000000);
    //         await successmsg(pendingTransaction);
    //         await asset();
    //         setLoader(false)
    //         window.location.reload(false);
    //     } catch (error) {
    //         let ev = error.message
    //         if(ev === "Access denied"){
    //             toast.error(`Connect your wallet`); 
    //         }
    //         else{
    //             toast.error(`${error}`); 
    //         }
    //         setLoader(false)
    //     }
    // }
    // const swappet = async (Payload)=>{
    //     if(localStorage.getItem("wallet")==="Petra"){
    //         const pendingTransaction = await (window).aptos.signAndSubmitTransaction(Payload);
    //         return pendingTransaction.hash
    //     }
    //    else if (localStorage.getItem("wallet") === "Martian"){
    //     const response = await window.martian.connect();
    //     const sender = response.address;
    //     const options = {
    //         max_gas_amount: "100000"
    //     }
    //     const transactionRequest = await window.martian.generateTransaction(sender, Payload, options);
    //       const txnHash = await window.martian.signAndSubmitTransaction(transactionRequest);
    //       return txnHash
    //    }
    //    else{
    //     let g = Math.floor(new Date().getTime()/1000.0)
    //     console.log("time",g+1000)
    //     const otherOptions = {
    //         max_gas_amount: '601012',
    //         gas_unit_price: '100',
    //         expiration_timestamp_secs: g+100,
    //         // sequence_number: '15'
    //       }
    //      let txnHash = await window.pontem.signAndSubmit(Payload, otherOptions);
    //      console.log("hash",txnHash.result.hash)
    //      return txnHash.result.hash;
            
    //    }
    // }
    const successmsg = async(hash)=>{
        let id ="https://explorer.aptoslabs.com/txn/"+hash;
            toast.success(toastDiv(id,"Transaction completed successfully"));
            await sleep(5000);
            setLoader(false)
            
            // window.location.reload();
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    const toastDiv = (txId,type) =>
    (
         <div>
           <p style={{color:'#FFFFFF'}}> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
    </svg></a></p> 
        </div>
    );
    // const maxval = async() =>{
    //     console.log("clicking",Tovalue.currVal)
    //     setamount(Math.abs(Tovalue.currVal))
    //     changeinput(Math.abs(Tovalue.currVal))
    // }

    // const changeinput = async(a) =>{
    //     setamount(a);
    //     if(Tovalue2.text){
    //         let k =(a*100000000) -( a*40000)
    //         setamount2(k/100000000)
    //     }
        
    // }

    // const registercoin = async () => {
    //     setLoader(true)
    //     await buttonload();
    //     const transaction = {
    //         type: "entry_function_payload",
    //         function: `${tokencreator}::TestCoins::register`,
    //         arguments: [],
    //         type_arguments: [`${tokencreator}::TestCoins::${Tovalue2.text}`],
    //       };
    //     try {
    //         // const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
    //         let pendingTransaction = await swappet(transaction)
    //         console.log("pendingTransaction", pendingTransaction);
    //         const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    //         client.waitForTransaction(pendingTransaction);
    //         await successmsg(pendingTransaction);
    //         setnotregister(false)
    //         await asset();
    //         setLoader(false)
    //     } catch (error) {
    //         let ev = error.message
    //         if(ev === "Access denied"){
    //             toast.error(`Connect your wallet`); 
    //         }
    //         else{
    //             toast.error(`${error}`); 
    //         }
    //         await buttonloadofff();
    //         console.log("err",error)
    //         setLoader(false)
    //     }
    // }

    // const changewallet =async()=>{
    //     let d1=[];
    //     let d2 =[];
    //     d1 = Tovalue;
    //     d2 = Tovalue2;
    //     SetTovalue(d2);
    //     SetTovalue2(d1);
    //     setamount("")
    //     setamount2("")
    // }

    const connectToEthereum = async () => {
        try {
          if (window.ethereum) {
            let k = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("K",k)
            
            const web3= new ethers.providers.Web3Provider(window.ethereum);
            return web3;
          } else {
            throw new Error('No Ethereum wallet found.');
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };
    
      const addliquidity = async() =>{
        setLoader(true)
        if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
            setLoader(false);
            toast.error(`Your are not connected the wallet`);
        }
        else{
            try{
                const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
                const signer =  ethersProvider.getSigner()        
               const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, signer);    
                const mintTx = await JOKERContract.swapTokensForBNBUSer(BigInt(parseInt(amount * 1e9)));
                  
              
                await mintTx.wait();
                console.log("minttx",mintTx.hash);
                // toast.success(` "Successfully Minted JUSD", ${(mintTx.hash)} `)
                let id = "https://sepolia.basescan.org/tx/" + mintTx.hash;
                await sleep(2000);
                await asset();
                toast.success(toastDiv(id,"Transaction Successful"));
                
                setAvaxValue("");
                setamount("");
                toast.success("Swapped Successfully");
                await createTxn("ME",mintTx.hash,"Swap ME",BLACKTokenAddress,address);
                console.log("firebase")
                setLoader(false)
    
            }catch(error){
                toast.error((error?.reason).toString());
                console.error(error);
                setLoader(false)
            }
    
        }
      }
    
      const approve = async() =>{
        setLoader(true)
        if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
            setLoader(false);
            toast.error(`Your are not connected the wallet`);
        }
        else{
            try{
                const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
                const signer =  ethersProvider.getSigner()
            
                const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI,  signer);
                const mintTx = await JOKERContract.approve(localStorage.getItem("walletAddress"), BigInt(1e18));              
              
                await mintTx.wait();
                console.log("minttx",mintTx.hash);
                // toast.success(` "Successfully Minted JUSD", ${(mintTx.hash)} `)
                let id = "https://sepolia.basescan.org/tx/" + mintTx.hash;
                await sleep(2000);
                await asset();
                toast.success(toastDiv(id,"Transaction Successful"));
                
                
                toast.success("Approved Successfully");
                setLoader(false)
    
            }catch(error){
                toast.error(error.reason.toString());
                console.error(error);
                setLoader(false)
            }
    
        }
      }
   
    return (
        <>
           <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

            <div className='Dashboard_main_wrapper'>

                <div className='Pool_Page_main swap_page_main'>
                    <PageFilter />

                    <div className='swap_tokens_main'>
                        <div className='box_main_border'>
                            <div className='trade_now_block'>
                                <h4>Swap Tokens</h4>
                                <div className='trade_now_max'>
                                <span className='Market_text_p' style={{ display: 'flex', alignItems: 'left' }}>From</span>
                                    <div className='trade_now_row_row'>   
                                        <div className='from_text_block'>  
                                            <input type="text" placeholder='0.0' style={{maxWidth: 'none'}}
                                            // placeholder={token === null ? From_Value.toFixed(2) : "0.00"} 
                                            onChange={event => changeinput(event.target.value)} value={amount?(amount):''}
                                            />
                                        </div>
                                        <div className='max_btn_main'>
                                            {/* <div className='max_btn'>
                                                <a href="#0" 
                                                // onClick={()=>maxval()}
                                                >ME</a>
                                              
                                            </div> */}
                                           
                                            <center>
                                            <div className='max_icon_text' 
                                           
                                            >
                                            <div className='mx_btn' style={{ display: 'inline-flex' }}>
                                                 <div className='max_btn'>
                                                    <a href="#0" 
                                                    onClick={()=>maxval()}
                                                    >Max</a>
                                                </div>
                                                &nbsp;<span className='max_icon_text'> <img src={mercurycoin} alt="logo" style={{ width: '35px', height: '35px' }} className="logo-image"/> </span>
                                            </div>
                                            {/* <div className='max_icon_text' 
                
                                            >
                                              <img src={mercurycoin} alt="logo" />
                                               
                                            </div> */}
                                            {/* <img src={mercurycoin} width={25} height={30} alt="logo" /> */}
                                              {/* <img src={mercurycoin} alt="logo" /> */}
                                                {/* <img src={TokenData[1].imglogo} alt="logo" />
                                                <span>{TokenData[1].text}</span> */}
                                                {/* {token === null ? "" : <img src={Tovalue.imglogo} alt={Tovalue.imglogo} />} */}
                                                {/* <span>{token === null ? "Select a Token" : Tovalue.text}</span> */}
                                                {/* <img src={mer_dai_bottem_arrow} alt="logo" /> */}
                                            </div>
                                            </center>
                                        </div>
                                    </div>
                                    <div className='box_Swap_icon'
                                    //  onClick={()=>changewallet()}
                                     >
                                        <img src={box_Swap_icon}   alt="" />
                                    </div>
                                    <span className='Market_text_p' style={{ display: 'flex', alignItems: 'left' }}>To</span>
                                    <div className='trade_now_row_row'>
                                        <div className='from_text_block'>
                                            {/* <span className='Market_text_p'>To</span> */}
                                            <input type="text" placeholder='0.0'  style={{maxWidth: 'none'}}
                                            //  placeholder={token2 === null ? From_Value.toFixed(2) :"0.00"} 
                                            value={AvaxValue&&amount>0?parseFloat(AvaxValue).toFixed(6):'0.00'} 
                                             />
                                        </div>
                                        <div className='max_btn_main' >
                                            
                                            <center>
                                            <div className='max_icon_text' 
                                            // style={{ justifyContent: 'flex-end' }}
                                            >
                                                
                                                {/* <div className='max_btn'>
                                                <a aria-disabled={false} href="#0">  */}
                                                {/* <img src={avaxLogo} width={25} height={25} alt="logo" /> */}
                                                {/* ETH</a>
                                            </div> */}
                                            <div className='max_icon_text'>
                                            <img src={avaxLogo} alt="logo" style={{ width: '35px', height: '35px' }} className="logo-image"/>
                                            
                                            </div>
                                                {/* {token2 === null ? "" : <img src={Tovalue2.imglogo} alt={Tovalue2.imglogo} />} */}
                                                {/* <span>{token2 === null ? "Select a Token" : Tovalue2.text}</span> */}
                                                {/* <img src={mer_dai_bottem_arrow} alt="logo" /> */}
                                            </div>
                                            </center>
                                        </div>
                                    </div>
                                    {isNew == true && <><br/> <div>SwapLimit: {swapLimit ? parseFloat(swapLimit/1e9).toFixed(9):"0.00"} ME</div></> }
                                    {isNew == false && <><br/> <div>SwapLimit: {mebalance ? parseFloat(mebalance/1e9).toFixed(9):"0.00"} ME</div></>}
                                    
                                    <div className='after_fee_show_main'>

                                        {/* {token2 === null ? null : (
                                            <> */}
                                                {/* <ul className='after_fee_show_ul'> */}
                                                    {/* <li> */}
                                                    {/* <img src={akar_icons_question} alt="akar_icons_question" /> */}
                                                        {/* <span className='Market_text_p'>You will receive LP : 
                                                        <span className='cm_ques_info'>
                               
                                <span className='cm_ques_box'>
                                Receive LP token less than or equal to the calculated value.
                                </span>
                              </span></span>
                                                        <p className='Market_text_p'>{lpValue?parseFloat(Math.abs(lpValue/1e18)).toFixed(15):"0.0"} </p>
                                                    </li> */}
                                                    {/* <li>
                                                        <span className='Market_text_p'>Fee 
                                                        </span>
                                                        <p className='Market_text_p'> {amount2?formatter(Math.abs(amount-amount2)):"0.0"} {Tovalue2 ? Tovalue2.text:''}</p>
                                                    </li>
                                                    <li>
                                                        <span className='Market_text_p'>Minimum Received </span>
                                                        <p className='Market_text_p'> {amount2?formatter(Math.abs(amount2)):"0.0"} {Tovalue2 ? Tovalue2.text:''}</p>
                                                    </li>
                                                    <li>
                                                        <span className='Market_text_p'>Route </span>
                                                    </li>
                                                </ul>
                                                <div className='after_fee_bottom_btn'>
                                                    <p><img src={Tovalue.imglogo} alt="logo" /> {Tovalue.text}</p>
                                                    <img src={mer_dai_bottem_arrow} alt="logo" /> */}
                                                    {/* {token2 === null ? <p> Choose Token</p> : <p><img src={Tovalue2.imglogo} alt="" />{Tovalue2.text}</p>} */}
                                                {/* </div> */}
                                            {/* </> */}
                                        {/* )} */}
{/* </ul> */}
                                    </div>
                                </div>
                                <div>
                                  
<div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
        {/* <FaExclamationTriangle style={{ marginRight: '10px' ,fontSize: '24px'}} /> */}
        <p>Disclaimer: Get exclusive access to unlock Swap by Contributing 50% to the BurnVault.</p>
      </div>

<br/>
{chainId === 84532 ?(<>
    {parseFloat(Allowance) > parseFloat(parseFloat(amount)*1e9) ?(<>
    <ButtonLoad loading={loader} onClick={()=>addliquidity()} >Swap</ButtonLoad> 

</>):(<>
    <ButtonLoad loading={loader} onClick={()=>approve()} >Approve</ButtonLoad> 

</>)}
</>):(<>
    <WebOffBotton WebOffBotton="WrongNetwork" link="#0"  /></>)}
{/* <div> <WebOffBotton WebOffBotton="Add Liquidity" link="#0"   /></div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SwapTokensPop handleClose={handleClose} TokenData={TokenData} OnSubmit={OnSubmit} open={open} />
            <SwapTokensPop handleClose={handleClose2} TokenData={TokenData} OnSubmit={OnSubmit2} open={open2} />
            <ConfirmSwapPop From_Value={0} token={token} TokenData={TokenData} Tovalue={Tovalue} SwapHandleClose={SwapHandleClose} SwapOpen={SwapOpen} /> */}
        
        </>
    )
}

export default SwapPage;