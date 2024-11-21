import React, { useState, useEffect, useRef } from 'react';
import { WebOffBotton } from '../../component/common/WebOffBotton';
import { WebBotton } from '../../component/common/WebBotton';
import akar_icons_question from '../../assets/images/Dashboard/akar_icons_question.svg';
import mer_dai_min_logo from '../../assets/images/Dashboard/mer_dai_min_logo.svg';
import mer_dai_icon from '../../assets/images/Dashboard/mer_dai_icon.svg';
import mer_dai_bottem_arrow from '../../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import StockFilter from './StockFilter';
import { StockFilterData } from '../../AllData/StockFilterData';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import "../../toast-style-override.css";

import ConfirmStackMercurypop from './ConfirmStackMercurypop';

import { AptosClient, Types } from 'aptos';
import { Button } from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';

import { pooladdress,deployeraddress, tokencreator, assetbalance, poolassetbalance, lpassetbalance, liabilitycal, faucetpooladdress, faucetdeployeraddress } from '../../config';

const MainPoolBox = ({ Item }) => {
	
	 const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onAprroved = () => {
        handleClose();
    }
	
    const [clicked, setClicked] = useState(false);
    const[loader, setLoader] = useState(false);
    const [usdcbalance, setusdcbalance] = useState("");
    const [lpbalance, setlpbalance] = useState("");
    const [liability, setliability] = useState("");
// console.log("usdcba",usdcbalance)
    const [poolusdc, setpoolusdc] = useState("");
   
    const contentEl = useRef();
    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    const [item, setitem] = useState(StockFilterData);
    const [itemadd, setitemadd] = useState("Claim");

    const [clickbutton, setonclickbutton] = useState("");
    const [amount, setamount] = useState("");

    const Filterclick = (e) => {
        const setitems = StockFilterData.filter((items) => {
            return items.Filter_id === e;
        })
        setitem(setitems);

        setitemadd(e);
    }

    useEffect(() => {
        const setitems = StockFilterData.filter((items) => {
            return items.Filter_id === "Claim";
        })
        setitem(setitems);
        
    }, [])
    useEffect(() => {
        asset()
    }, [])
    const asset = async () => {
        const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
      //let k =await fetch("0xb23b85ed02837dfb40e517ad140bc600a68c59ab85e65150a9de21ec3dbde80e");
      if(localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " ||  localStorage.getItem("walletAddress") === '' || localStorage.getItem("walletAddress") === undefined){

      } 
      else{
        let b = await assetbalance(localStorage.getItem("walletAddress"),"USDC")
        console.log("usdcbalance",b)
        setusdcbalance(b)
        let c = await poolassetbalance(localStorage.getItem("walletAddress"),faucetpooladdress,"USDC")
        console.log("poolusdc",c)
        setpoolusdc(c)
        let d = await lpassetbalance(localStorage.getItem("walletAddress"),"USDC")
        console.log("lpbalance",d)
        setlpbalance(d)

        
      }
      let e = await liabilitycal("USDC")
      console.log("liability",e)
      setliability(e)
    
    }

    const maxval = async() =>{
        console.log("clicking")
        if(clickbutton == "Deposit"){
            setamount(Math.abs(usdcbalance)/100000000)
        }
        else{
            setamount(Math.abs(lpbalance)/100000000)
        }
    }

   const depositf = async (amount) => {
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
   const depositcheck = async (amount,balance) => {
    if( amount > balance){
        toast.error(`Your token balance is too low`)
        setLoader(false)
        // handleHideLoad()
        return 1;
        
      }
      else{
       return 0; //next line
      }
   }

    const DepositUSDC = async () => {
        let a = await depositf(amount);
        if(a==1){
            return;
        }
        let b = await depositcheck(amount,usdcbalance/100000000)
        if(b==1){
            return;
        }
        let g = Math.floor(new Date().getTime()/1000.0)
        console.log("time",g+1000)
        console.log("sample")
        const transaction = {
            type: "entry_function_payload",
            function: `${deployeraddress}::pool::deposit`,
            arguments: [pooladdress, parseInt(amount*100000000), 1669796158],
            type_arguments: [`${tokencreator}::TestCoins::USDC`],
        };
        try {
            // const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
            let pendingTransaction = await swappet(transaction)
            console.log("pendingTransaction", pendingTransaction);
            const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
            client.waitForTransaction(pendingTransaction);
            await successmsg(pendingTransaction);
            
        } catch (error) {
            let ev = error.message
            if(ev === "Access denied"){
                toast.error(`Connect your wallet`); 
            }
            else{
                toast.error(`${error}`); 
            }
            
        }
    }

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
           <p style={{color:'#FFFFFF'}}> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer">View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
    </svg></a></p> 
        </div>
    );

    // const depositusdt = async () => {
    //     const transaction = {
    //       type: "entry_function_payload",
    //       function: `0x263ea998e5e9deea8ef87d99f371e01390729d8b89bcb90b8e3622393a86e913::pool::deposit`,
    //       arguments: ["0x2888bdf341888e28d2f50860543c05365ec62f32f5c994fb0e4eb2aaf6f5a1ff",100000000, 1669556647],
    //       type_arguments: ["0xc41f1324b3b6863ea857e3ccb0c379c31b0cffa926cf1a0d8f7a7276b48da9ec::TestCoins::USDT"],
    //     };
    //     try {
    //       const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
    //       console.log("pendingTransaction", pendingTransaction);
    //       console.log(" Deposited ")
    //       const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    //       client.waitForTransaction(pendingTransaction.hash);
         
    //     } catch (error) {
    //     }
    //   }
    //   const depositusdc = async () => {
    //     const transaction = {
    //       type: "entry_function_payload",
    //       function: `0x263ea998e5e9deea8ef87d99f371e01390729d8b89bcb90b8e3622393a86e913::pool::deposit`,
    //       arguments: ["0x2888bdf341888e28d2f50860543c05365ec62f32f5c994fb0e4eb2aaf6f5a1ff",10000000000, 1669556647],
    //       type_arguments: ["0xc41f1324b3b6863ea857e3ccb0c379c31b0cffa926cf1a0d8f7a7276b48da9ec::TestCoins::USDC"],
    //     };
    //     try {
    //       const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
    //       console.log("pendingTransaction", pendingTransaction);
    //       console.log(" Deposited ")
    //       const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    //       client.waitForTransaction(pendingTransaction.hash);
         
    //     } catch (error) {
    //     }
    //   }
    //   const depositdai = async () => {
    //     const transaction = {
    //       type: "entry_function_payload",
    //       function: `0x263ea998e5e9deea8ef87d99f371e01390729d8b89bcb90b8e3622393a86e913::pool::deposit`,
    //       arguments: ["0x2888bdf341888e28d2f50860543c05365ec62f32f5c994fb0e4eb2aaf6f5a1ff",10000000000, 1669556647],
    //       type_arguments: ["0xc41f1324b3b6863ea857e3ccb0c379c31b0cffa926cf1a0d8f7a7276b48da9ec::TestCoins::DAI"],
    //     };
    //     try {
    //       const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
    //       console.log("pendingTransaction", pendingTransaction);
    //       console.log(" Deposited ")
    //       const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    //       client.waitForTransaction(pendingTransaction.hash);
         
    //     } catch (error) {
    //     }
    //   }
    const withdrawf = async () => {
        if(amount == "" || amount == 0 || amount == undefined || amount == null){
            toast.error(`Zero input not allowed`)
            // handleHideLoad()
            return 1;
            
          }
          else{
           return 0; //next line
          }
       }
       const withdrawcheck = async (amount) => {
        if( amount > lpbalance){
            toast.error(`trying to withdraw more than you deposited`)
            // handleHideLoad()
            return 1;
            
          }
          else{
           return 0; //next line
          }
       }
    

    const withdrawUSDC = async () => {
        let a = await withdrawf();
        if(a==1){
            return;
        }
        let b = await withdrawcheck(amount);
        if(b==1){
            return;
        }
        console.log("amount'",amount)
        const transaction = {
            type: "entry_function_payload",
            function: `${deployeraddress}::pool::withdraw`,
            arguments: [pooladdress, parseInt(amount*100000000), 0, 1669796158],
            type_arguments: [`${tokencreator}::TestCoins::USDC`],
        };
        try {
            // const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
            let pendingTransaction = await swappet(transaction)
            console.log("pendingTransaction", pendingTransaction);
            const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
            client.waitForTransaction(pendingTransaction);
            await successmsg(pendingTransaction);
        } catch (error) {
            let ev = error.message
            if(ev === "Access denied"){
                toast.error(`Connect your wallet`); 
            }
            else{
                toast.error(`${error}`); 
            }
        }
    }

    
    const setbutton = async (a) => {
        handleOpen();
        setonclickbutton(a)
    }

    const setfunction = async () => {
        if(clickbutton == "Deposit"){
            await registercoin()
        }
        else{
            await Dispense()
        }
    }

    const registercoin = async () => {
        setLoader(true)
       
        const transaction = {
            type: "entry_function_payload",
            function: `${tokencreator}::TestCoins::register`,
            arguments: [],
            type_arguments: [`${tokencreator}::TestCoins::USDC`],
          };
        try {
            // const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
            let pendingTransaction = await swappet(transaction)
            console.log("pendingTransaction", pendingTransaction);
            const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
            client.waitForTransaction(pendingTransaction);
           
            await successmsg(pendingTransaction);
            await resetstate()
            setLoader(false)
            
        } catch (error) {
            let ev = error.message
            if(ev === "Access denied"){
                toast.error(`Connect your wallet`); 
            }
            else{
                toast.error(`${error}`); 
            }
            setLoader(false)
        }
    }
    const Dispense = async () => {
        setLoader(true)
       
        const transaction = {
            type: "entry_function_payload",
            function: `${faucetdeployeraddress}::creating::dispense`,
            arguments: [faucetpooladdress],
            type_arguments: [`${tokencreator}::TestCoins::USDC`],
          };
        try {
            // const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
            let pendingTransaction = await swappet(transaction)
            console.log("pendingTransaction", pendingTransaction);
            const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
            client.waitForTransaction(pendingTransaction);
            await successmsg(pendingTransaction);
            await resetstate()
            setLoader(false)
        } catch (error) {
            let ev = error.message
            if(ev === "Access denied"){
                toast.error(`Connect your wallet`); 
            }
            else{
                toast.error(`${error}`); 
            }
            
            
            setLoader(false)
        }
    }

    const resetstate = async() =>{
        await asset();
    }

    return (
        
        <div className='box_main_border'>
            <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

            <div className='trade_now_block'>
                <div className='Withdraw_main_row'>
                    <div className='Withdraw_main_row_row'>
                        <div className='coverage_ratio_block'>
                            <div className='coverage_ratio_logo'>
                                <img src={Item.item_logo} alt="usdc" />
                                <p>{Item.item_logo_name}</p>
                            </div>
                            <p className='ratio_common_p'>
                                {/* Coverage Ratio: <span>{liability?parseFloat(Math.abs(poolusdc/liability)).toFixed(3):"0.0"}</span> 
                                <img src={akar_icons_question} alt="akar_icons_question" /> */}
                                </p>
                        </div>
                        <div className='deposits_block'>
                            {/* <p className='Market_text_p'>Pool balance</p>
                            <h5 className='mer_text_h5'>$ {poolusdc?parseFloat(Math.abs(poolusdc/100000000)).toFixed(2):"0.0"}</h5>
                            <p className='Market_text_p'>{poolusdc?parseFloat(Math.abs(poolusdc/100000000)).toFixed(2):"0.0"}USDC</p> */}
                        </div>
                        <span className='Market_Cap_center_span'></span>
                        <div className='deposits_block deposits_block_line'>
                            <p className='Market_text_p'>Faucet balance</p>
                            <h5 className='mer_text_h5'>{poolusdc?parseFloat(Math.abs(poolusdc/100000000)).toFixed(3):"0.0"}</h5>
                            {/* <p className='Market_text_p'>{Item.Volume24HNum2}</p> */}
                        </div>
                        <span className='Market_Cap_center_span'></span>
                        <div className='deposits_block'>
                            <p className='Market_text_p'>My wallet balance</p>
                            {usdcbalance?parseFloat(Math.abs(usdcbalance/100000000)).toFixed(3):"0.0"}
                            {/* <h5 className='mer_text_h5'>{Item.MyDepositsNum}</h5>
                            <p className='Market_text_p'>{Item.MyDepositsNum2}</p> */}
                        </div>
                    </div>
                    <div className='trade_btn_row'>
                        {/* <WebBotton WebBotton="DepositUSDT" link="#0" click={() => DepositUSDT()} /> */}
                        {/* <WebOffBotton WebOffBotton="Register" link="#0" click={()=>registercoin()} /> */}
                        {/* <WebBotton WebBotton="WithdrawUSDT" link="#0" click={() => withdrawUSDT()} /> */}
                        {/* <WebBotton WebBotton="Dispense" link="#0" click={()=>Dispense()} /> */}
                        {usdcbalance=== -1 ? (<>
                            {/* <WebBotton WebBotton="Register" link="#0" click={()=>registercoin()} /> */}
                            
                            <div><ButtonLoad loading={loader} onClick={()=>registercoin()}>Register</ButtonLoad></div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <WebOffBotton WebOffBotton="Dispense" link="#0"  />
                        </>):(<>
                            <WebOffBotton WebOffBotton="Register" link="#0"  />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div  >
                                <ButtonLoad  loading={loader} onClick={()=>Dispense()}>Dispense</ButtonLoad>
                                </div>
                            {/* <WebBotton WebBotton="Dispense" link="#0" click={()=>Dispense()} /> */}
                        </>)}
                    </div>
                </div>
                {/* <div className='border_reward_box'></div> */}
                {/* <div className='reward_main_block'>
                    <div className='reward_row'>
                        <div className='reward_logo_sec'>
                            <div className='logo_sec_row'>
                                <span>Reward: </span>
                                <div className='mer_dai_icons'>
                                    <img src={mer_dai_min_logo} alt="ConnectPop_logo" />
                                    <img src={mer_dai_icon} alt="mer_dai_icon" />
                                </div>
                            </div>
                            <p className='ratio_common_p'>Base APR: <span> 5.84%</span> <img src={akar_icons_question} alt="akar_icons_question" /></p>
                        </div>
                        <div>
                            <p className='ratio_common_p'>Median Boosted APR: <span> 4.86%</span> <img src={akar_icons_question} alt="akar_icons_question" /></p>
                        </div>
                        <div>
                            <p className='ratio_common_p'>My Boosted APR: <span> 0.0%</span> <img src={akar_icons_question} alt="akar_icons_question" /></p>
                        </div>
                        <div>
                            <div className='rewards_all_btn'>
                                <a href="#0" onClick={handleToggle}>{clicked ? "Close" : "Stake"} {clicked ? <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#fff" />
                                    <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#fff" />
                                </svg>
                                    : <img src={mer_dai_bottem_arrow} alt="mer_dai_bottem_arrow" />}</a>
                            </div>
                        </div>
                    </div>
                    <div className='stock_filter_block' ref={contentEl} style={clicked ? { height: contentEl.current.scrollHeight } : { height: "0px" }}>
                        <ul className={`stock_filter_list ${itemadd === "Claim" ? "stock_filter_list_active" : ""}`}>
                            <li className={itemadd === "Claim" ? "filter_active" : ""}>
                                <a href="#0" onClick={() => Filterclick("Claim")}>Claim</a>
                            </li>
                            <li className={itemadd === "Stake" ? "filter_active" : ""}>
                                <a href="#0" onClick={() => Filterclick("Stake")}>Stake</a>
                            </li>
                            <li className={itemadd === "Unstake" ? "filter_active" : ""}>
                                <a href="#0" onClick={() => Filterclick("Unstake")}>Unstake</a>
                            </li>
                        </ul>
                        {
                            item.map((item, index) => {
                                return (
                                    <div className='stock_index' key={index}>
                                        <StockFilter Item={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
            </div>
            {/* <ConfirmStackMercurypop onAprroved={onAprroved} handleClose={handleClose} open={open} clickbutton={clickbutton} /> */}

            <>
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
                  <h4>Confirm Stack Mercury</h4>
                  <div className='Confirm_Stack_main'>
                    <div className='Confirm_Stack_P_row'>
                      <p className='Market_text_p'>Your LP balance:  {lpbalance?parseFloat(Math.abs(lpbalance/100000000)).toFixed(4):"0.0"} USDCLP</p>
                      <span className='Market_text_p'>Stakable: {usdcbalance?parseFloat(Math.abs(usdcbalance/100000000)).toFixed(4):"0.0"} USDC</span>
                    </div>
                    <div className='Confirm_Stack_box'>
                    <input type="text" placeholder='0.00' onChange={event => setamount(event.target.value)} value={amount?(amount) : ''}/>
                      <div className="max_btn">
                        <a href="#0" onClick={()=>maxval()}>Max</a>
                      </div>
                    </div>
                    <ul className='Confirm_Stack_lists'>
                      <li>
                        <p className='Market_text_p'>Token Price</p>
                        <span className='Market_text_p'>$0.06</span>
                      </li>
                      <li>
                        <p className='Market_text_p'>Token Stake</p>
                        <span className='Market_text_p'>0.00 Mercury</span>
                      </li>
                    </ul>
                    <div className='Confirm_Swap_pop_btn'>
                      <div onClick={handleClose}>
                        <WebOffBotton WebOffBotton="Cancel" link="#0" />
                      </div>
                      <div className='approve_button hero_btn'>
                        <a href="#0" onClick={()=>setfunction()}>{clickbutton}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </>
        </div>
    )
}

export default MainPoolBox;