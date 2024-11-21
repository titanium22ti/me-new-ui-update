import React, { useState, useEffect, useRef } from 'react';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import { Button, Card, Form, InputGroup, Col, Container, Dropdown, OverlayTrigger,Accordion, Row, Tab, Tabs, Tooltip, Alert, Badge } from 'react-bootstrap';
 import Vemercury_page_logo from '../assets/images/Dashboard/Vemercury_page_logo.svg';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';
import Boost_Calculator_icon from '../assets/images/Dashboard/Boost_Calculator_icon.svg';
import ConfirmStackMercurypop from '../DashboardComponent/Common/ConfirmStackMercurypop';
import SwapTokensPop from '../DashboardComponent/Common/SwapTokensPop';
import animeswap from '../assets/images/Dashboard/animeswap.png';
import aux from '../assets/images/Dashboard/liquidity.jpg';
import { WebOffBotton } from '../component/common/WebOffBotton';
import PageFilter from '../DashboardComponent/Common/PageFilter';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { deployeraddress1, pooladdress1, deployeraddress, pooladdress, tokencreator1,tokencreator,liquidiswapbalance, liabilitycal, lpassetbalance,poolassetbalance, lpstakingbalane, mebalance, animeswapswapbalance, createtpairhistory } from '../config';
import { AptosClient, Types } from 'aptos';
import { WebBotton } from '../component/common/WebBotton';
import usdc_1 from '../assets/images/Dashboard/usdc_1.svg';
import usdc_3 from '../assets/images/Dashboard/usdc_3.svg';
import mer_dai_icon from '../assets/images/Dashboard/mer_dai_icon.svg';
import { click } from '@testing-library/user-event/dist/click';
import { BLACKTokenABI, BLACKTokenAddress, BurnVaultABI, BurnVaultAddress } from '../abi/abi';
import { ethers } from 'ethers';
import box_Swap_icon from '../assets/images/Dashboard/box_Swap_icon.svg';
import { createTxn, recordUserVisits } from "../abi/firebasecode";
/* global BigInt */

import ButtonLoad from 'react-bootstrap-button-loader';
import CountdownWrapper from './LaunchpadCards/snippets/CountdownWrapper';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
const VeMercuryPage = ({balanceOfTokens}) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();
  const [daibalance, setdaibalance] = useState("0");
  const [lpbalance, setlpbalance] = useState("");
  const [currVal1, setcurrVal1] = useState("");
    console.log("current",currVal1);
   const [token2, settoken2] = React.useState(null);
  const [usdcbalance, setusdcbalance] = useState("0");
  const [vemercuryOpen, setvemercuryOpen] = React.useState(false);
  const SwapHandleOpen = () => setvemercuryOpen(true);
  const VemercuryHandleClose = () => setvemercuryOpen(false);
  const [usdtbalance, setusdtbalance] = useState("0");
  const [mesupply, setmesupply] = useState("");
  const [Tovalue2, SetTovalue2] = React.useState(null);
  const [Tovalue3, SetTovalue3] = React.useState(null);
  const [amount2, setamount2] = useState("")
  const[fvalue,setf]=useState();
  const[depositedamount,setdepositedamount] = useState("")
  const[totaldeposited,settotaldeposited] = useState("")
  // const [lpbalance, setlpbalance] = useState("");
  const[notregistered, setnotregister] = React.useState(false);
  const[aniswap,setanimeswap] = useState("");
  const[liqiswap,setliqswap] = useState("");

console.log("notre",notregistered)
const[loader, setLoader] = useState(false);
const[loader1, setLoader1] = useState(false);
const[loader2, setLoader2] = useState(false);

const [liability, setliability] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    // const [open3, setOpen3] = React.useState(false);
    const handleClose3 = () => setOpen3(false);
    const handleClose4 = () => setOpen4(false);
    const handleClose = () => setOpen(false);
    const [poolbalance, setpoolbalance] = useState("");
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
     const handleClose2 = () => setOpen2(false);
    const [clickbutton, setonclickbutton] = useState("");
    const [amount, setamount] = useState("")
    const [inputvalue, setinputvalue] = useState("")
    
    console.log("amoutval",amount)
    const [token3, settoken3] = React.useState(null);
    const [token, settoken] = React.useState(null);
    const [Tovalue, SetTovalue] = React.useState(null);
    const [dpvalue, setdpamount] = React.useState(null);
    const [open2, setOpen2] = React.useState(false);
    // const handleOpen2 = () => setOpen2(true);
    const [poolusdt, setpoolusdt] = useState("");
    // const handleClose2 = () => setOpen2(false);
    const [Tovalue4, SetTovalue4] = React.useState(null);

    const[BlackBalan,setBlackBalan] = useState("");
    const[MaxTxAmount,setMaxTxAmount] = useState("");
    const[TokenPerBNB,setTokenPerBNB] = useState("");
    const[lockcheck,setchecklock]= useState(false);
    const [lct,setlct] = useState("");
    const[allowan,setAllowance] = useState("")

    const[day,setTime4]= useState("");
    const[hour,setTim1]= useState("");
    const[min,setTim2]= useState("");
    const[sec,setTim3]= useState("");
    const[lock,setlock]= useState(false);

    const AlertBTN = () => alert("Select a Token")


    const readValueCalculation = async() =>{
      const url = "https://base-sepolia-rpc.publicnode.com";
      const provider = new ethers.providers.JsonRpcProvider(url);
    
       const burnvaultContract =  new ethers.Contract(BurnVaultAddress,BurnVaultABI,provider);
       const JOKERContract =  new ethers.Contract(BLACKTokenAddress,BLACKTokenABI,provider);

       let jokervaultbalance = ethers.utils.formatUnits(await burnvaultContract.getBurnVaultMEBalance(),0);
       let maxtx = ethers.utils.formatUnits(await burnvaultContract.maxTxAmount(),0);

       setBlackBalan(jokervaultbalance);
       setMaxTxAmount(maxtx)

       let circulatingsupply = ethers.utils.formatUnits(await burnvaultContract.getCirculatingSupply(),0);
       const response = await fetch(`https://base-sepolia.blockscout.com/api/v2/addresses/${BurnVaultAddress}`);    
       console.log("response1",response);
      //  const response = await fetch(`https://api-testnet.bscscan.com/api?module=account&action=balance&address=${BurnVaultAddress}&tag=latest&apikey=0xcb3235781a4eb2973d1fd951b351eff845fb3374`);
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       let balanceWei;
      
       const data = await response.json();
       console.log("response",data);
       if (data.is_contract === true) {
         balanceWei  = data.coin_balance ;
       } else {
         throw new Error('API response was not successful');
       }

       console.log("balancewei",balanceWei)
      //  let tokenPerBNB = parseFloat(circulatingsupply)/parseFloat(balanceWei);
      //  setTokenPerBNB(tokenPerBNB)

      let tokerPerBNB = ethers.utils.formatUnits(await burnvaultContract.getBTCValue(1e9),0);
      setTokenPerBNB(tokerPerBNB);

       let checklock = await burnvaultContract.lock(localStorage.getItem("walletAddress"));
       setchecklock(checklock);
       let  loc = ethers.utils.formatUnits(await burnvaultContract.secondsLeft(localStorage.getItem("walletAddress")),0);
       console.log("loc",loc);
       setlct(loc);
       let allowance =  ethers.utils.formatUnits(await JOKERContract.allowance(localStorage.getItem("walletAddress"),BurnVaultAddress),0);
       console.log("allowance", allowance)
       setAllowance(allowance);
       await balanceOfTokens();
       recordUserVisits(address, "BurnVault");

    }
    useEffect(() => {
      readValueCalculation()
  },[address]);

  
  const first = async () => {
    console.log("lasteporebase",lct);
        var us= lct;
        var ff=new Date(us);
    // setdate(ff.toDateString());
    var hours = ff.getHours();
      var minutes = ff.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      // settime( hours + ':' + minutes + ' ' + ampm);
    //settime(lock);
    var countDowndate   =us * 1000;
    //// console.log(countDowndate);
    // var countDownDate = new Date().getTime() + (lock * 1000) ;
    //alert(time);
        var x = setInterval(function() {
           var now = new Date().getTime();
          var distance = countDowndate - now ;

          console.log("-------------------now", distance);
         // // console.log(now);
          // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          console.log("date e", day);
          console.log("hour e", hour);
          console.log("min e", minutes);
          console.log("sec e", seconds);
    
          // Output the result in an element with id="demo"
         // document.getElementById("demo").innerHTML = hours + "h "
         // + minutes + "m " + seconds + "s ";
        setTime4(days);
        setTim1(hours);
        setTim2(minutes);
        setTim3(seconds);
    
    
        
        
        
        
          // If the count down is over, write some text 
          if (distance < 0) {
                clearInterval(x);
                setlock(false);
    
               // // console.log('CountDown Finished');
            }
            else{
             setlock(true);
            }
    
        
          
        }, 1000);
       
    
    }
    useEffect(() => {
       first()
  }, [day, hour, min, sec, lock,lct]);
    function formatter(number){
      try{
        const formattedNumber = Number(
          number.toString().match(/^\d+(?:\.\d{0,3})?/)
        )
        let s = number.toString().match(/^\d+(?:\.\d{0,3})?/);
        // console.log("formatted",s)
  
        return s[0];
      }catch(err){
        return 0;
      }
      
}
    const TokenData = [
        {
            id: "USDT",
            text: "USDT NLP",
            name: "USDT",
         
            imglogo: usdc_3,
            currVal:usdtbalance?formatter(usdtbalance/100000000):0,
            Rate: 0.998668,
            fee: 0.998668,
            Minimum_Received: 0.998668,
        },
        {
            id: "USDC",
            text: "USDC NLP",
            name: "USDC",
         
            imglogo: usdc_1,
            currVal:usdcbalance?formatter(usdcbalance/100000000):0,
            Rate: 0.998600,
            fee: 0.998600,
            Minimum_Received: 0.998600,
        },
        {
            id: "DAI",
            text: "DAI NLP",
            name: "DAI",
         
            imglogo: mer_dai_icon,
            currVal: daibalance?formatter(daibalance/100000000):0,
            Rate: 0.998610,
            fee: 0.998610,
            Minimum_Received: 0.998610,
        },
      //   {
      //     id: "LiquidLP-USDC-MER-U",
      //     text: "LiquidLP-USDC-MER-U",
      //     name: "Liquidy",
       
      //     imglogo: aux,
      //     currVal: liqiswap?parseFloat(liqiswap/100000000).toFixed(3):0,
      //     Rate: 0.998610,
      //     fee: 0.998610,
      //     Minimum_Received: 0.998610,
      // },
      {
        id: "AnimeSwapLPCoin",
        text: "AnimeSwapLPCoin",
        name: "Anime",
     
        imglogo: animeswap,
        currVal: aniswap?parseFloat(aniswap/100000000).toFixed(3):0,
        Rate: 0.998610,
        fee: 0.998610,
        Minimum_Received: 0.998610,
    },
        

    ]



    const [Aprroved, setAprroved] = React.useState(false);
    const onAprroved = async() => {
      setLoader(true)
      if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
        setLoader(false);
        toast.error(`Your are not connected the wallet`);
    }
    else{
      try{
        const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
        const signer =  ethersProvider.getSigner()
    

        // Create contract instance with the correct order of arguments
        const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, signer);
        //const mintTx = await JOKERContract.methods.approve(BurnVaultAddress,BigInt(10000000000*1e9)).send({from:localStorage.getItem("walletAddress")});
         const mintTx = await JOKERContract.approve(BurnVaultAddress,BigInt(10000000000*1e9));
      
        // await mintTx.wait();
        console.log("minttx",mintTx.hash);
        // toast.success(` "Successfully Minted JUSD", ${(mintTx.hash)} `)
        let id = "https://sepolia.basescan.org/tx/" + mintTx.hash;
        await readValueCalculation();
        await sleep(2000);
        toast.success(toastDiv(id,"Transaction Successful"));
       
        // await displayValueCalculation();
        toast.success("Approve is Done succeefully");
        // handleHideLoadPurchase();
        setLoader(false)
    }catch(error){
        toast.error("Approve is not succeed "+ (error && error.reason));
        console.log("error",error)
        // handleHideLoadPurchase();
        setLoader(false)
    }
  }
    }
    const onAprroved1 = () => {
        handleOpen();
    }

    const setbutton = async (a) => {
        handleOpen();
        setonclickbutton(a)
    }



    // const setfunction = async () => {
    //     if(clickbutton == "Stake"){
    //         await stake()
    //     }
    //     else{
    //        await unstake()
    //     }
    // }
    // useEffect(() => {fetchvalues()},[])
    // const fetchvalues = async()=>{
    //     SetTovalue(TokenData[1]);
    //     settoken3(TokenData[1].id)
    // }
    
    const resetstate = async()=>{
      setamount("");
      setamount2("");

  }
  
  //   const OnSubmit4 = (e) => {
  //     handleClose4();
  //     settoken(e.currentTarget.id);

  //     var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
  //     for (let val of FilterData) {
  //         FilterData = val;
  //     };
  //     SetTovalue4(FilterData);
  //     console.log("tovalue",FilterData,e.currentTarget.id)
  // };
  const OnSubmit2 = async(e) => {
    SetTovalue2("") 
settoken2(e.currentTarget.id);

var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
for (let val of FilterData) {
   FilterData = val;
};
SetTovalue2(FilterData);
let s = await lpstakingbalane(localStorage.getItem("walletAddress"),FilterData.name);
setdpamount(s)
setcurrVal1(FilterData.currVal);
console.log("tovalue",FilterData,s)
if(FilterData.currVal === "-0.000"){
   setnotregister(true)
}
else{
   setnotregister(false)
}


handleClose2();



};

  const OnSubmit3 = async(e) => {
      
      settoken3(e.currentTarget.id);

      var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
      for (let val of FilterData) {
          FilterData = val;
      };
      SetTovalue3(FilterData);
      console.log("tovalue",FilterData)
      if(FilterData.currVal === "-0.000"){
          setnotregister(true)
      }
      else{
          setnotregister(false)
      }

      let k = await liabilitycal(FilterData.text)
  //   console.log("liability",k)
    setliability(k)
    resetstate();
    handleClose3();
    let c = await poolassetbalance(localStorage.getItem("walletAddress"),pooladdress1,FilterData.text)
  //   console.log("poolusdt",c )
    setpoolbalance(c )
    
   
  };
 

    const swappet = async (Payload)=>{
      if(localStorage.getItem("wallet")==="Petra"){
        
          const pendingTransaction = await (window).aptos.signAndSubmitTransaction(Payload);
          return pendingTransaction.hash
      }
     else if (localStorage.getItem("wallet") === "Martian"){
      const response = await window.martian.connect();
      const sender = response.address;
      const options = {
          max_gas_amount: "100000"
      }
      const transactionRequest = await window.martian.generateTransaction(sender, Payload, options);
        const txnHash = await window.martian.signAndSubmitTransaction(transactionRequest);
        return txnHash
     }
     else{
      let g = Math.floor(new Date().getTime()/1000.0)
      console.log("time",g+1000)
      const otherOptions = {
        max_gas_amount: '601012',
        gas_unit_price: '100',
        expiration_timestamp_secs: g+100,
        // sequence_number: '15'
      }
       let txnHash = await window.pontem.signAndSubmit(Payload, otherOptions);
       console.log("hash",txnHash.result.hash)
       return txnHash.result.hash;
          
     }
  }
  const maxval = async() =>{
    // if(clickbutton === "Stake"){
    //   setamount(Math.abs(Tovalue2.currVal))
   
    // }
    // else{
    //   setamount(Math.abs(dpvalue/100000000))
    // }
    // console.log("clicking",Tovalue2.currVal)
    const url = "https://base-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(url);

    const JOKERContract =  new ethers.Contract(BLACKTokenAddress,BLACKTokenABI,provider);
    let allowance =  ethers.utils.formatUnits(await JOKERContract.balanceOf(localStorage.getItem("walletAddress")),0);
          console.log("allowance", allowance)
   
    changeMeamount((allowance)/1e9);
    // setinputvalue((allowance * 10/100)/1e9)
  }   

  const assetFlush = () => {
    setinputvalue("");
    setamount("");
  }

  useEffect(() => {
    assetFlush();
  },[isConnected, address]);

const changeinput = async(a) =>{
  setamount(a);
  let k =(a*100000000) -( a*40000)
  setamount2(k/100000000)
}


  const stakef = async (amount) => {
    if(amount == "" || amount == 0 || amount == undefined || amount == null){
        toast.error(`Zero input not allowed`)
        setLoader(false)
        // handleHideLoad()
        return 1;
        
      }
      else{
       return 0; //next line
      }
   }
   const stakecheck = async () => {
    if(amount > Tovalue2.currVal){
        toast.error(`Your token balance is too low`)
        setLoader(false)
        // handleHideLoad()
        return 1;
        
      }
      else{
       return 0; //next line
      }
}
//    const stakecheck = async (amount,balance) => {
//     if( (amount*100000000) > lpbalance){
//         toast.error(`Your token balance is too low`)
//         // handleHideLoad()
//         return 1;
        
//       }
//       else{
//        return 0; //next line
//       }
//    }
  
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
    const stake = async() =>{
      setLoader(true)
      try{
        if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
          toast.warning(`please connect your wallet`,{autoClose: 5000});            
          // handleHideLoadParticipate()                     
        }
       
        else{        
      //   handleShowLoadParticipate(); 
      const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
      const signer =  ethersProvider.getSigner()
  
  
      //   // Create contract instance with the correct order of arguments
      const burnvaultcontract = new ethers.Contract(BurnVaultAddress, BurnVaultABI, signer);
  
   
      let maxtx = ethers.utils.formatUnits(await burnvaultcontract.maxTxAmount(),0)
      let burnbalan = ethers.utils.formatUnits(await burnvaultcontract.senderBurnBalance(localStorage.getItem("walletAddress")),0)
      
      // var burnbalan  = await burnvaultcontract.methods.senderBurnBalance(account[0]).call();
      var bb = maxtx - burnbalan;
      console.log(bb);
      var burnab1=(bb);                
  
      //   const val = 10000000000000;
      const val = inputvalue*1e9;
      console.log("valcheck",val,maxtx);
  //alert(maxtx);
  if(parseFloat(val) <=  parseFloat(maxtx)){
  console.log("valcheck",val,burnab1);
  if( parseFloat(val) <= parseFloat(burnab1) ){
    let amount = parseInt(val);
    let depositTx;
    try{
       depositTx =await burnvaultcontract.swap(BigInt(parseFloat(amount).toFixed(0)));
    }catch(error){
      toast.error(`${error}`,{autoClose: 5000}); 
      setLoader(false)
    }
    
    
    // await depositTx.wait();
    toast.success("Burned successfully",{autoClose: 5000}); 
          let id = "https://sepolia.basescan.org/tx/" + depositTx.hash;
          toast.success(toastDiv(id,"Transaction Successful"));
          // setMinStart(true)
    await readValueCalculation();
        //   handleHideLoadParticipate() ;
        //   handleCloseDonate();
    
    //  bvb();
    setLoader(false)
    await createTxn("ME",depositTx.hash,"Burn ME",BurnVaultAddress,address);
    setinputvalue("");
    setamount("");
  }
  else{
    console.log("valcheck",val,burnab1);
  toast.error("Burn Failed",{autoClose: 5000}); 
  setLoader(false)
  }
  }
  
  
  else{
  
  toast.error("The amount you entered must be less than the Maximum Transcation amount",{autoClose: 5000}); 
  setLoader(false)
  }
      
      
  }  
      }catch(err){
        console.log("cachederror",err)
        setLoader(false)
        toast.error(`${(err?.reason).toString()}`,{autoClose: 5000}); 

      }
     
    }
    const unstakeft = async () => {
      if(amount == "" || amount == 0 || amount == undefined || amount == null){
          toast.error(`Zero input not allowed`)
          setLoader(false)
          // handleHideLoad()
          return 1;
          
        }
        else{
         return 0; //next line
        }
     }
  
     const unstakecheck = async () => {
      if(amount > dpvalue){
          toast.error(`Trying to unstake less than you Staked`)
          setLoader(false)
          // handleHideLoad()
          return 1;
          
        }
        else{
         return 0; //next line
        }
  }
  //    const unstakecheck = async (amount) => {
  //     if( (amount*100000000) > lpbalance){
  //       // if(amount > lpbalance){
  //         toast.error(`trying to unstake more than you Staked`)
  //         // handleHideLoad()
  //         return 1;
          
  //       }
  //       else{
  //        return 0; //next line
  //       }
  //    }

  


   
    

    const resettstate = async() =>{
        setamount("");
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
 
  const lpf = async () => {
    setLoader(true);
    // if(clickbutton==="Stake"){
      await stake();
    // }
    // else{
    //   await unstake();
    // }
  }
  const url = "https://base-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(url);
const burnvaultcontract = new ethers.Contract(BurnVaultAddress, BurnVaultABI, provider);

  const changeMeamount = async(val) =>{
     // Check if the input value is a valid number
     if (val === "" || val === null || val === NaN || val === "." || isNaN(val) || hasMoreThan18Decimals(val)) {
      // If not a valid number, set the bondAmount state to 0
      setinputvalue("");
      setamount("");
      return; // Exit the function
  }
    setinputvalue(val)
    let totalvalue = ethers.utils.formatUnits(await burnvaultcontract.getBTCValue(BigInt(parseFloat(val*1e9).toFixed(0))),0);
    // let totalvalue = (val*1e9)/parseFloat(TokenPerBNB);
    
    setamount(parseFloat(totalvalue));
    console.log("val",totalvalue,TokenPerBNB,parseFloat(totalvalue)/1e9)

  }

  // Function to check if the input has more than 18 decimal places
 const hasMoreThan18Decimals = (value) => {
  const parts = value.toString().split('.');
  if (parts.length === 2 && parts[1].length > 18) {
      return true;
  }
  return false;
};

  return (
    <>
    
     <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>
    {/* <div>
        <h>UPCOMINGS</h>
    </div> */}
        <div className='Dashboard_main_wrapper'>
            <div className='Pool_Page_main Vemercury_page_main'>
            <PageFilter />
                <div className='Vemercury_page_main'>
                    <div className='box_main_border'>
                        <div className='trade_now_block'>
                            <div>
                                <div className='Vemercury_box_logo'>
                                    <img src={Vemercury_page_logo} alt="" />
                                    <h4>BurnVault</h4>
                                </div>
                                <div className='total_vemercury_supply_box'>
                                    <div className='total_vemercury_text'>
                                        <span className='Market_text_p'>Vault  Balance </span>
                                        <p> <span > {BlackBalan?parseFloat(BlackBalan/1e9).toFixed(2):"0.0"} ME</span> 
                                        {/* <img src={akar_icons_question} alt="" /> */}
                                        </p>
                                    </div>
                                    <div className='total_vemercury_text'>
                                        <span className='Market_text_p'>Floor Price  </span>
                                        <p>  <span>{TokenPerBNB?parseFloat((TokenPerBNB)/1e6).toFixed(4):"0.0"} USDC</span>
                                         {/* <img src={akar_icons_question} alt="" /> */}
                                         </p>
                                    </div><div className='total_vemercury_text'>
                                        <span className='Market_text_p'>Max Transaction Limit</span>
                                        <p> <span>{MaxTxAmount?parseFloat(MaxTxAmount/1e9).toFixed(2):"0.0"}  ME</span></p>
                                    </div>
                                       </div>
                            </div>
                            {/* <div className='vemercury_boosts_border'>
                                <span></span>
                                <p>Vemercury Boosts Mercury APR <img src={akar_icons_question} alt="" /></p>
                                <span><p>(</p>Boost Calculator <img src={Boost_Calculator_icon} alt="" /><p>)</p></span>
                                <span></span>
                            </div> */}
              
                            <div className='Confirm_btn_show' style={{"max-width": "none"}}>
                              {/* {depositedamount ? (<></>):(<> */}
                                <div className='hero_btn'>
                                    {/* <a href="#0" onClick={handleOpen}>Stake</a> */}
                                    <a href="#0" onClick={()=>setbutton("Stake")}>Burn</a>
                                    

                                </div>  
                                {/* <ButtonLoad loading={loader} onClick={()=>setLoader(true)}>Stake</ButtonLoad> */}
                              {/* </>)} */}
                                                        

                             {/* <ButtonLoad loading={loader} onClick={()=>setLoader(true)}>StakeandClaim</ButtonLoad> */}
                                
                                    {/* <div className='vemercury_boosts_border'> */}
                                {/* <span></span> */}
                                {/* <p>Rewards : */}
                                  {/* <img src={akar_icons_question} alt="" /> */}
                                  {/* </p> */}
                                {/* <span><p></p>{fvalue/100000000}  */}
                                {/* <img src={Boost_Calculator_icon} alt="" /> */}
                                {/* <p></p></span> */}
                                {/* <span></span> */}
                            {/* </div> */}
                                    {/* <div className='vemercury_boosts_border'>
                                <span></span>
                                <p>Reward : </p>
                                <span><p>{fvalue/100000000} </p></span>
                                <span></span>
                            </div> */}
                                        <div className='Confirm_show_off_btn' style={{"justify-content": "center"}}>
                                       
                                {depositedamount ? (
                                    <>
                                     {/* <div className='hero_btn'> */}
                                    {/* <a href="#0" onClick={handleOpen}>Stake</a> */}
                                    {/* <a href="#0" onClick={()=>setbutton("stake")}>Stake</a> */}
                                    <div>
                                    <ButtonLoad onClick={()=>setbutton("Stake")} >SWAP</ButtonLoad>
                                  
                                    </div>
                                {/* </div> */}&nbsp;&nbsp;
                                <div> 
                                  <ButtonLoad onClick={()=>setbutton("Unstake")} >Unstake</ButtonLoad>
                                  </div>
                               
                                            {/* <div onClick={()=>setbutton("Unstake")}> */}
                                                {/* <WebBotton WebBotton= "Unstake" link="#0" /> */}
                                               
                                                {/* <a href="#0" onClick={()=>unstake()} >Stake {token2?Tovalue2.text:''}</a> */}
                                            {/* </div> */}
                                            &nbsp;&nbsp;
                                            <div> 
                                                {/* <WebBotton WebBotton="Claim" link="#0" /> */}
                                                {/* <ButtonLoad loading={loader1} onClick={()=>claimtoken()}>Claim</ButtonLoad> */}
                                            </div>
                                            
                                            </>
                                ) : (null)}
                                        </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <ConfirmStackMercurypop onAprroved={onAprroved} handleClose={handleClose} open={open} /> */}
        <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className='modal_Box_main'>
      <Box className='modal_Box responsive_pop'>
        <div className='ConnectPop_main'>
          <div className='swap_tokens_pop_main'>
            <div className='ConnectPop_Close_btn'>
              <a href="#0" onClick={handleClose}>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                  <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                </svg>
              </a>
            </div>
            <div className='swap_tokens_list'>
              <h4>Confirm Burn </h4>
              <div className='Confirm_Stack_main'>
                <div className='Confirm_Stack_P_row'>
                {/* <div className='Confirm_Stack_P_row'> */}
                    {/* <p className='Market_text_p'>Your LP balance:  {lpbalance?parseFloat(Math.abs(lpbalance/100000000)).toFixed(4):"0.0"} USDTLP</p> */}
                      {/* <span className='Market_text_p'>Stakable: {usdtbalance?parseFloat(Math.abs(usdtbalance/100000000)).toFixed(4):"0.0"} USDT</span> */}
                    {/* </div> */}
                  {/* <p className='Market_text_p'>Stake: 0.00 Mercury</p> */}
                  {/* <span className='Market_text_p'>Stakable: 0.00 Mercury</span> */}
{/*                
                <div className='Confirm_Stack_box'>
                  <input type="text" placeholder='0.00'/>
                  <div className="max_btn">
                    <a href="#0">Max</a>
                  </div>
                </div> */}
     
      </div>
                {/* <div className='Confirm_Stack_box'>
                  
                  {/* <div className="max_btn">
                    <a href="#0">Max</a>
                  </div> */}
                  {/* <div className='Confirm_Stack_box'> */}
                    {/* <input type="text" placeholder='0.00' onChange={event => setamount(event.target.value)} value={amount?(amount) : ''}/>
                      <div className="max_btn">
                        <a href="#0" onClick={()=>maxval()}>Max</a>
                      </div> */}
                    {/* </div> */}
                {/* </div>  */}
                <ul className='Confirm_Stack_lists'>
                      {/* <li>
                        <p className='Market_text_p'>Your LP balance: </p>
                        <span className='Market_text_p'> {lpbalance?parseFloat(Math.abs(lpbalance/100000000)).toFixed(4):"0.0"} USDTLP</span>
                      </li> */}
                      {/* <li>
                        <p className='Market_text_p'>Token Stake</p>
                        <span className='Market_text_p'>0.00 Mercury</span>
                      </li> */}
                    </ul>
                                                
                <ul className='Confirm_Stack_lists'>
                      <li>
                      <span className='Market_text_p'> Enter ME Amount to Burn :</span>
                    

                                            
                  
                      </li>
                      {/* <li>
                        <p className='Market_text_p'>Token Stake</p>
                        <span className='Market_text_p'>0.00 Mercury</span>
                      </li> */}
                    </ul>
                    <br/>
                {/* <div className='Confirm_Stack_box'>

                    <input type="text" placeholder='0.00' onChange={event => setamount(event.target.value)} value={amount?(amount) : ''}/>
                    <div className='max_btn_main'>
                      <div className="max_btn">
                        <a href="#0" onClick={()=>maxval()}>Max</a>
                        </div>
                      </div>
                    </div> */}
          <div className='Confirm_Stack_box'>
           
                    <input type="text" placeholder='0.00'  style={{maxWidth: 'none'}}  onChange={event => changeMeamount(event.target.value)} value={inputvalue?(inputvalue) : ''}/>
                      <div className="max_btn">
                        <a href="#0" onClick={()=>maxval()}>Max</a>
                      </div>

                     
                    </div>

                    {/* <div className='box_Swap_icon'>
                                        <img src={box_Swap_icon} alt="" />
                                    </div> */}

                                    {/* <div className='Confirm_Stack_box'>
                    <input type="text"   value={amount?parseFloat(amount).toFixed(5) : '0.0'}/>
                                         
                    </div> */}
          {/* <div className='max_icon_text' onClick={handleOpen}>
                                                 <img src={TokenData[1].imglogo} alt="logo" />
                                                <span>{TokenData[1].text}</span>
                                                 {token === null ? "" : <img src={Tovalue.imglogo} alt={Tovalue.imglogo} />}
                                                <span>{token === null ? "Select a Token" : Tovalue.text}</span>
                                                <img src={mer_dai_bottem_arrow} alt="logo" />
                                            </div>  */}
                <ul className='Confirm_Stack_lists'>
                  <li>
                    {/* <p className='Market_text_p'>Token Price</p>
                    <span className='Market_text_p'>$0.06</span> */}
                    {/* <span className='Market_text_p'>Stakable: {usdtbalance?parseFloat(Math.abs(usdtbalance/100000000)).toFixed(4):"0.0"} USDT</span> */}
                  </li>
                  <li>
                    <p className='Market_text_p'>You will receive :</p>
                
                      <span className='Market_text_p'>{amount?parseFloat(amount/1e6).toFixed(4) : '0.0'} USDC</span>
                  
                    {/* <span className='Market_text_p'>{usdcbalance?parseFloat(Math.abs(usdcbalance/100000000)).toFixed(4):"0.0"} USDC</span> */}
                  </li>

                  <li>
                  {lock == true ?(<>
                    <p className='Market_text_p'>Time left for Burn</p>
                    <span className='Market_text_p'> <CountdownWrapper endDate = {lct}	/>
                    
                    </span>
                  </>):(<>
                  </>)}
                   
                  
                    {/* <span className='Market_text_p'>Stakable: {usdtbalance?parseFloat(Math.abs(usdtbalance/100000000)).toFixed(4):"0.0"} USDT</span> */}
                  </li>
                </ul>
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
        {/* <FaExclamationTriangle style={{ marginRight: '10px' ,fontSize: '24px'}} /> */}
        <p>Disclaimer: Burning above the set BurnLimit is not permitted</p>
      </div>

<br/>
                <div className='Confirm_Swap_pop_btn'>
                  <div onClick={handleClose}>
                    <WebOffBotton WebOffBotton="Cancel" link="#0" />
                  </div>
                  <div className='approve_button hero_btn'>
                  {chainId === 84532 ?(<>
                  {lock == true ?(<>
                    <WebOffBotton WebOffBotton="Swap" link="#0" />
                  </>):(<>
                    {parseFloat(allowan) >= parseFloat(parseFloat(inputvalue)*1e9) ? (
 <ButtonLoad width="300" loading={loader} onClick={()=>lpf()}>Burn </ButtonLoad>
) : (
  <ButtonLoad width="300" loading={loader} onClick={()=>onAprroved()}>Approve </ButtonLoad>
)}
         
                    {/* <ButtonLoad width="300" loading={loader} onClick={()=>lpf()}>Swap </ButtonLoad> */}
                  </>)}
                  </>):(<>
    <WebOffBotton   WebOffBotton="Wrong Network" link="#0"  /></>)}
                    {/* <a href="#0" onClick={onAprroved}>{clickbutton}</a> */}
                    
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SwapTokensPop handleClose={handleClose2} TokenData={TokenData} OnSubmit={OnSubmit2} open={open2}/>
      </Box>
    </div>
  </Modal>
  {/* <VeMercuryPage handleClose={handleClose} TokenData={TokenData} OnSubmit={OnSubmit} open={open} />
            <VeMercuryPage handleClose={handleClose2} TokenData={TokenData} OnSubmit={OnSubmit2} open={open2} /> */}
            {/* <ConfirmStackMercurypop From_Value={0} token={token} TokenData={TokenData} Tovalue={Tovalue} VemercuryHandleClose={VemercuryHandleClose} vemercuryOpen={vemercuryOpen} /> */}
        
         {/* <SwapTokensPop handleClose={handleClose4} TokenData={TokenData} OnSubmit={OnSubmit4} open={open4} /> */}
    </>
)
}

export default VeMercuryPage;