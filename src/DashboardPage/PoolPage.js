import React, { useState, useEffect, useRef } from 'react';
import ConnectPop_logo from '../assets/images/Dashboard/ConnectPop_logo.svg';
import mer_dai_min_logo from '../assets/images/Dashboard/mer_dai_min_logo.svg';
import pangolin from '../assets/images/HomePage/pangolin.jpg';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import mercurycoin from '../assets/images/Dashboard/MeCoin.png';
import animeswap from '../assets/images/Dashboard/animeswap.png';
import addIcon from '../assets/images/HomePage/plus_addLiquidity_icon.svg';
import pancakeSwap from '../assets/images/HomePage/PancakeSwap-Crypto-Logo-PNG.png';
import EthereumLogo from '../assets/images/HomePage/usd-coin-usdc-logo.png';
import bitcoinlogo from '../assets/images/HomePage/Bitcoin.svg.png';
import box_Swap_icon from '../assets/images/Dashboard/box_Swap_icon.svg';
import ButtonLoad from 'react-bootstrap-button-loader';
import { FaExclamationTriangle } from 'react-icons/fa';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';


import { WebOffBotton } from '../component/common/WebOffBotton';
import { WebBotton } from '../component/common/WebBotton';
import MainPoolBox from '../DashboardComponent/Common/MainPoolBox';
import { MainPoolBoxData } from '../AllData/MainPoolBoxData';
import  MainPoolBox11  from '../DashboardComponent/Common/MainPoolBox11';
import  MainPoolBox2  from '../DashboardComponent/Common/MainPoolBox2';
import PageFilter from '../DashboardComponent/Common/PageFilter';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { assetbalance, mebalance } from '../config';
import Sidebar_menu_btn from '../assets/images/Dashboard/Sidebar_menu_btn.svg';
import { Badge, Button, Dropdown } from 'react-bootstrap';
import { ethers } from 'ethers';
import { BLACKTokenABI, BLACKTokenAddress, USDCAddress } from '../abi/abi';
import { toast } from 'react-toastify';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { createTxn , recordUserVisits} from "../abi/firebasecode";
/* global BigInt */
const PoolPage = ({balanceOfTokens}) => {
    const { walletProvider } = useWeb3ModalProvider();
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const url = "https://base-sepolia-rpc.publicnode.com";
    const provider = new ethers.providers.JsonRpcProvider(url);

    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [usdcbalance, setusdcbalance] = useState("");
    const [mesupply, setmesupply] = useState("");
    const[liquiidtyvalue,setliquiidtyvalue] = useState("");
    const[circulating,setcirculating] = useState("");

    const [amount, setamount] = useState("")
    const[AvaxValue,setAvaxValue] = useState("");
    const[loader, setLoader] = useState(false);
    const[Allowance,setAllowance] = useState("");
    const[USDCAllowance,setUSDCAllowance] = useState("");
    const[lpValue,setlpValue] = useState("");


    const[autoswitch, setAutoSwitch] = useState(false);

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    useEffect(() => {
        asset()
    }, [isConnected, address])

    const asset = async() =>{
        if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
        }
        else{
            setAutoSwitch(!autoswitch);
            const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);
            const USDCContract = new ethers.Contract(USDCAddress, BLACKTokenABI, provider);
            let Jokerbalancecontract = ethers.utils.formatUnits(await JOKERContract.totalSupply(),0);
            let Jokerburnedcontract = ethers.utils.formatUnits(await JOKERContract.totalBurn(),0);
            let circulatingSupply = parseFloat(Jokerbalancecontract) - parseFloat(Jokerburnedcontract);
            setmesupply(circulatingSupply);
            let allowance =  ethers.utils.formatUnits(await JOKERContract.allowance(localStorage.getItem("walletAddress"),localStorage.getItem("walletAddress")),0);
            setAllowance(allowance)
            let allowance2 =  ethers.utils.formatUnits(await USDCContract.allowance(localStorage.getItem("walletAddress"),BLACKTokenAddress),0);
            setUSDCAllowance(allowance2)
            await balanceOfTokens();
            recordUserVisits(address, "AddLiquidity");
        }
    }

    const assetFlush = () => {
        setamount("");
        setAvaxValue("");
        setlpValue("");
    }

    useEffect(() => {
        assetFlush();
    }, [isConnected, address])

    // const asset = async () => {
    //     let b = await assetbalance("0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7","ME")
    //     console.log("usdcbalance",b)
    //     setusdcbalance(b)
    //     let k = await mebalance();
    //     console.log("value",k)
    //     setmesupply(k);
    // }

  const changeinput = async(e) =>{
    // Check if the input value is a valid number
    if (e === "" || e === null || e === NaN || e === "." || isNaN(e) || hasMoreThan18Decimals(e)) {
        // If not a valid number, set the bondAmount state to 0
        setamount("");
        setAvaxValue("");
        setlpValue("");
        return; // Exit the function
    }
    setamount(e);
    const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);
    let avaxSpent = ethers.utils.formatUnits(await JOKERContract.checkLiquidityValue(BigInt(e*1e9)),0);
    setAvaxValue(parseFloat(avaxSpent)/1e6)
    // let feesdeducted = avaxSpent-(avaxSpent*0.0997/100);
    let lpValue = ethers.utils.formatUnits(await JOKERContract.checkLpValue( BigInt(e*1e9), avaxSpent),0);
    
    // console.log("liquidity fees",avaxSpent,(avaxSpent*0.0997/100),feesdeducted-(avaxSpent*2/100))
    setlpValue(parseFloat(lpValue)-(parseFloat(lpValue*2/100)))
   console.log("log", e, avaxSpent, lpValue);
    
  }

  // Function to check if the input has more than 18 decimal places
  const hasMoreThan18Decimals = (value) => {
    const parts = value.toString().split('.');
    if (parts.length === 2 && parts[1].length > 18) {
        return true;
    }
    return false;
};
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
        
            const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI,  signer);
            const mintTx = await JOKERContract.addLiquidityUser(BigInt(parseFloat(amount * 1e9).toFixed(0)), BigInt(parseFloat(AvaxValue*1e6).toFixed(0)));
              
          
            await mintTx.wait();
            console.log("minttx",mintTx.hash);
            // toast.success(` "Successfully Minted JUSD", ${(mintTx.hash)} `)
            let id = "https://sepolia.basescan.org/tx/" + mintTx.hash;
            await sleep(2000);
            await asset();
            toast.success(toastDiv(id,"Transaction Successful"));
            
            setAvaxValue("");
            setamount("");
            setlpValue("");
            toast.success("Liquidity is Added Successfully");
            await createTxn("ME-ETH",mintTx.hash,"Add Liquidity",BLACKTokenAddress,address);
            setLoader(false)

        }catch(error){
            if(((error?.reason).toString()).includes('TransferHelper:')){
                toast.error("Try again with lower value");
            } else{
                toast.error((error?.reason).toString()); 
            } 
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

  const approveUSDC = async() =>{
    setLoader(true)
    if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
        setLoader(false);
        toast.error(`Your are not connected the wallet`);
    }
    else{
        try{
            const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
                const signer =  ethersProvider.getSigner()
        
            const JOKERContract = new ethers.Contract(USDCAddress, BLACKTokenABI,  signer);
            const mintTx = await JOKERContract.approve(BLACKTokenAddress, BigInt(1e18));              
          
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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
const toastDiv = (txId,type) =>
(
    <div>
       <p> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
</svg></a></p> 
    </div>
);


    return (
        <>
            <div className='Dashboard_main_wrapper'>
                <div className='Pool_Page_main'>
                    <PageFilter />
                    <div className='box_main_border'>
                        <div className='trade_now_block'>
                            <div className='trade_now_row'>
                                <div className='Market_Cap_row'>
                                <div className='center_logo_row'>
                                    <img src={mercurycoin} width = "40" height="40" alt="ConnectPop_logo" />
                                    <p>ME</p>
                                    {/* <span>-2.68%</span> */}
                                </div>
                                <span className='Market_Cap_center_span'></span>
                                    <div className='Market_Cap_text'>
                                        <p className='Market_text_p'>Circulating Supply</p>
                                        <h5 className='mer_text_h6' style={{ 'overflow-x': 'auto'}}>{mesupply?parseFloat(mesupply/1e9).toFixed(0):"0.0"} <span>ME</span></h5>
                                    </div>
                                    {/* <span className='Market_Cap_center_span'></span> */}
                                    {/* <div className='Market_Cap_text'>
                                        <p className='Market_text_p'>Total Deposit</p>
                                        <h5 className='mer_text_h5'>{usdcbalance?parseFloat(Math.abs(usdcbalance)).toFixed(3):"0.0"} </h5>
                                    </div> */}
                                </div>
                                <div className='center_logo_row'>
                                    {/* <img src={mercurycoin} width = "40" height="40" alt="ConnectPop_logo" />
                                    <p>ME</p> */}
                                    {/* <span>-2.68%</span> */}
                                    
                                </div>
                                <div className='trade_btn_row'>
                                    {/* <WebOffBotton WebOffBotton="Bridge" link="#0" /> */}
                                    <WebBotton WebBotton="Trade Now" link="#0" click={()=>handleOpen()}/>
                                </div>
                            </div>
                            <div className='mer_dai'>
                                <div className='mer_dai_row'>
                                    <span></span>
                                    <div className='mer_dai_item' onClick={handleToggle}>
                                        <div className='mer_dai_icons '>
                                            <img src={mercurycoin} width="7%" height="7%" alt="ConnectPop_logo" />
                                            <img src={EthereumLogo}  width="40" height={"40"} alt="mer_dai_icon" />
                                        </div>
                                        <br/>
                                        <div className='mer_dai_item_text' style={{    'display': 'block'}}>
                                            <p>ME-USDC</p>
                                            {!clicked ? <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                                                <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                                            </svg> : <img src={mer_dai_bottem_arrow} alt="mer_dai_bottem_arrow" />
                                            }
                                        </div>
                                    </div>
                                    <span></span>
                                </div>
                                <div className='mer_dai_drop' 
                                ref={contentEl?contentEl:''}
                                 style={!clicked ? { height: 'auto' } : { height: "0px" }}>
                                   
                                    <div className='mer_dai_drop_row'></div>
                                     <div className='swap_tokens_main'>
                        <div className='box_main_border'>
                            <div className='trade_now_block'>
                                <h4>Add Liquidity</h4>
                                <div className='trade_now_max'>
                                <span className='Market_text_p' style={{ display: 'flex', alignItems: 'left' }}>Token1</span>
                                    <div className='trade_now_row_row'>
                                        <div className='from_text_block'>
                                            {/* <span className='Market_text_p'>Token1</span> */}
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
                                            // onClick={handleOpen}
                                            >
                                              <img src={mercurycoin} alt="logo" style={{ maxWidth: '35px', height: 'auto' }}/>
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
                                        <img src={addIcon}  width={30} height={30} alt="" />
                                    </div>
                                    <span className='Market_text_p' style={{ display: 'flex', alignItems: 'left' }}>Token2</span>
                                    <div className='trade_now_row_row'>
                                        <div className='from_text_block'>
                                            {/* <span className='Market_text_p'>Token2</span> */}
                                             <input type="text" placeholder='0.0' style={{maxWidth: 'none'}}
                                            //  placeholder={token2 === null ? From_Value.toFixed(2) :"0.00"} 
                                            value={AvaxValue&&amount>0?parseFloat(AvaxValue).toFixed(6):'0.00'} 
                                             />
                                        </div>
                                        <div className='max_btn_main'>
                                            {/* <div className='max_btn'>
                                                <a href="#0">ETH</a>
                                            </div> */}
                                            <center>
                                            <div className='max_icon_text' 
                                            // onClick={handleOpen2}
                                            >
                                                <img src={EthereumLogo}  alt="logo" style={{ maxWidth: '35px', height: 'auto' }}/>
                                                {/* {token2 === null ? "" : <img src={Tovalue2.imglogo} alt={Tovalue2.imglogo} />} */}
                                                {/* <span>{token2 === null ? "Select a Token" : Tovalue2.text}</span> */}
                                                {/* <img src={mer_dai_bottem_arrow} alt="logo" /> */}
                                            </div>
                                            </center>
                                        </div>
                                    </div>
                                    <div className='after_fee_show_main'>

                                        {/* {token2 === null ? null : (
                                            <> */}
                                                <ul className='after_fee_show_ul'>
                                                    <li>
                                                    {/* <img src={akar_icons_question} alt="akar_icons_question" /> */}
                                                        <span className='Market_text_p'>You will receive LP : 
                                                        <span className='cm_ques_info'>
                               
                                <span className='cm_ques_box'>
                                Receive LP token less than or equal to the calculated value.
                                </span>
                              </span></span>
                                                        <p className='Market_text_p'>{"( < = )"} &nbsp;{lpValue?parseFloat(Math.abs(lpValue/1e18)).toFixed(18):"0.0"} </p>
                                                    </li>
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
</ul>
                                    </div>
                                </div>
                                <div>
                                    {/* {notregistered ? (<> */}
                                        {/* <WebBotton WebBotton="Register" link="#0" click={() => registercoin()} /> */}
                                        {/* <ButtonLoad loading={loader} onClick={()=>registercoin()} >Register</ButtonLoad> */}
                                    {/* </>):(<> */}
                                        {/* <WebBotton WebBotton="Swap" link="#0"  click={() => Swap()} /> */}

{/* { Tovalue2 ? (<> */}
    {/* <ButtonLoad loading={loader} onClick={()=>Swap()} >Swap</ButtonLoad> */}

{/* </>):(<> */}

<div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
        {/* <FaExclamationTriangle style={{ marginRight: '10px' ,fontSize: '24px'}} /> */}
        <p>Disclaimer: Get exclusive access to unlock liquidity by contributing 2% burnVault.</p>
      </div>

<br/>
{chainId === 84532 ?(<>
{/* <div> <WebOffBotton WebOffBotton="Add Liquidity" link="#0"   /></div> */}
{Allowance > (amount*1e9) && USDCAllowance > (AvaxValue*1e6) ?(<>
    <ButtonLoad loading={loader} onClick={()=>addliquidity()} >Add Liquidity</ButtonLoad> 

</>):( Allowance > (amount*1e9) ? (<>
    <ButtonLoad loading={loader} onClick={()=>approveUSDC()} >Approve USDC</ButtonLoad> 

</>) : 
(<>
    <ButtonLoad loading={loader} onClick={()=>approve()} >Approve ME</ButtonLoad> 

</>))}
</>):(<>
    <WebOffBotton WebOffBotton="WrongNetwork" link="#0"  /></>)}

{/* </>)} */}


    

                                    {/* </>)} */}
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Main_Pool_block'>
                        <h2>Staking Pool</h2>
                        {/* {
                            MainPoolBoxData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <MainPoolBox Item={item} />
                                    </div>
                                )
                            })
                        } */}
                        <MainPoolBox11 Item ={MainPoolBoxData[1]} balanceOfTokens={balanceOfTokens} autoswitch={autoswitch}/>
                          <MainPoolBox Item={MainPoolBoxData[0]} balanceOfTokens={balanceOfTokens} autoswitch={autoswitch}/>
                          
                          {/* <MainPoolBox1 Item={MainPoolBoxData[1]} />
                          <MainPoolBox2 Item={MainPoolBoxData[2]} /> */}
                    </div>
                </div>
            </div>
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
                  <h4> Trade ME</h4>
                  <div className='Confirm_Stack_main'>
                    <div className='Confirm_Stack_P_row'>
                      {/* <p className='Market_text_p'>Your LP balance:  {lpbalance?parseFloat(Math.abs(lpbalance/100000000)).toFixed(4):"0.0"} USDCLP</p> */}
                      {/* <span className='Market_text_p'>Stakable: {usdcbalance?parseFloat(Math.abs(usdcbalance/100000000)).toFixed(4):"0.0"} USDC</span> */}
                    </div>
                    <div className='Confirm_Stack_box' style={{'margin-right': '10px','padding': 'inherit'}}>
                    <img src={pancakeSwap} width="30" height={"30"}alt="mer_dai_drop_item_logo" />Pancakeswap
                      <div  className='hero_btn' style={{    'margin-left': '10px'}}>
                      <a href={`https://pancakeswap.finance/v2/add/${USDCAddress}/${BLACKTokenAddress}?chain=baseSepolia`} target="_blank" rel="noreferrer">Trade</a>

                      </div>
                     </div>
                    {/* <div className='Confirm_Stack_box'>
                    <img src={aux} width="30" height={"30"}alt="mer_dai_drop_item_logo" /> Liquidswap 
                    <Badge> UPCOMINGS </Badge>                         */}
                      {/* <div className="max_btn"> */}
                       
                        {/* // onClick={()=>maxval()} */}
                        {/* <WebOffBotton WebOffBotton="Trade" link="#0"  /> */}
                      {/* <li>  <Badge> UPCOMINGS </Badge> </li>
                      </div> */}
                     {/* </div> */}


{/* <br></br> */}
{/* <ul className='Confirm_Stack_lists'>
<li>
    <div className="max_btn">
                        <a href="#0" 
                        >Animeswap </a>
                        
                      </div>
                      <img src={animeswap} width="40" height={"40"} alt="mer_dai_bottem_arrow" />
                      </li></ul> */}
                  {/* <ul className='Confirm_Stack_lists'>
                      <li>
                        <p className='Market_text_p'>Your LP balance: </p> */}
                        {/* <span className='Market_text_p'> {lpbalance?parseFloat(Math.abs(lpbalance/100000000)).toFixed(4):"0.0"} USDCLP</span> */}
                      {/* </li>
                      <li>
                        <p className='Market_text_p'>Token Stake</p>
                        <span className='Market_text_p'>0.00 Mercury</span>
                      </li>
                    </ul> */}
                     {/*<div className='Confirm_Swap_pop_btn'>
                      <div onClick={handleClose}>
                        <WebOffBotton WebOffBotton="Cancel" link="#0" />
                      </div>
                      <div className='approve_button hero_btn'>
                        {/* <a href="#0" onClick={()=>setfunction()} >{clickbutton}</a> */}
                      {/* </div>
                    </div>  */}
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
        </>
    )
}

export default PoolPage;