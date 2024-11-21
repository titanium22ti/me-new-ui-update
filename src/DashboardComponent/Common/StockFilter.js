import React from 'react';
import { WebOffBotton } from '../../component/common/WebOffBotton';
import { useEffect,useState } from 'react';
import ButtonLoad from 'react-bootstrap-button-loader';
import { StakingABI, StakingBLACKAddress, stakingLPAddress } from '../../abi/abi';
import { ethers } from 'ethers';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import CountdownWrapper  from '../../DashboardPage/LaunchpadCards/snippets/CountdownWrapper';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { createTxn } from "../../abi/firebasecode";

const StockFilter = ({Item,handleOpen,handleOpens, mystaked, myReward, enable}) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();
    const [lct,setlct] = useState("");
    const[day,setTime4]= useState("");
    const[hour,setTim1]= useState("");
    const[min,setTim2]= useState("");
    const[sec,setTim3]= useState("");
    const[lock,setlock]= useState(false);

    const[loader, setLoader] = useState(false);
    const[unstakeRemainingTime,setunstakeRemainingTime] = useState("");

    const [currentEpochTime, setCurrentEpochTime] = useState(Math.floor(Date.now() / 1000));

    useEffect(()=>{displayValueCalculation()},[address, enable])

    const displayValueCalculation = async() =>{
      if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
      }
      else{
          console.log("useeffect")
          const url = "https://base-sepolia-rpc.publicnode.com";
            const provider = new ethers.providers.JsonRpcProvider(url);
          // console.log("Connected Successfully", account);

          const BlackLPStaking = new ethers.Contract(stakingLPAddress, StakingABI, provider);      

         

          let holderUnstakeRemainingTime =  ethers.utils.formatUnits(await BlackLPStaking.holderUnstakeRemainingTime(localStorage.getItem("walletAddress")),0);
          setunstakeRemainingTime(holderUnstakeRemainingTime)
         
        }
    }
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
    const claim = async() =>{
      setLoader(true);
      if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
        setLoader(false);
        toast.error(`Your are not connected the wallet`);
    }
    else{
      try{
        const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
        const signer =  ethersProvider.getSigner()
    
        // Create contract instance with the correct order of arguments
        const dimeUSDCLPstakingContract = new ethers.Contract(stakingLPAddress, StakingABI, signer);
    
        // const val = ethers.utils.formatUnits(100000000000000, 0);
        // let k = Web3.utils.toBN(1000000000000000000n);
        // const val11 = ethers.utils.formatUnits(100000000000000, 18);
        // const val1 =  ethers.utils.parseUnits(val11, 18);;
        // Send the transaction and wait for it to be mined
        const mintTx = await dimeUSDCLPstakingContract.claimReward();
        await mintTx.wait();
        console.log("minttx",mintTx.hash);
        // toast.success(` "Successfully Minted JUSD", ${(mintTx.hash)} `)
        let id = "https://sepolia.basescan.org/tx/" + mintTx.hash;
        toast.success(toastDiv(id,"Transaction Successful"));
        // await displayValueCalculation();
        toast.success("Claiming successfully");
        
        await sleep(2000);
        setLoader(false)
        await createTxn("ME-ETH",mintTx.hash,"Stake Claim ME-ETH",stakingLPAddress,address);
        // await sleep(1600);
        // window.location.reload();
    }catch(error){
        toast.error("Claiming is not succeed "+ (error && error.reason));
        console.log("error",error)
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
           <p style={{color:'#FFFFFF'}}> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
    </svg></a></p> 
        </div>
    );
      
    return (
        <div className='stock_filter_row'>
            <div className='stock_list_text_row'>
                <div className='Staked_box'>
                    <div className='Staked_list_p'>
                        <p className='Market_text_p'>{Item.StakedName}</p>
                        <p className='Market_text_p'>{Item.StakableName}</p>
                    </div>
                    <div className='Staked_list_p'>
                        {/* <h6>{Item.StakedNameNum}</h6> */}
                        {Item.StakedName === "Staked" ? 
                        <><h5>{mystaked? parseFloat(mystaked/1e18).toFixed(15) :'0'} LP</h5></> 
                        :
                        <><h5>{myReward? parseFloat(myReward/1e9).toFixed(9) :'0'} ME</h5></>}
                    </div>
                </div>
            </div>
            <div className='Stake_All_btns'>
                <p>{Item.Stake_All_btns_text}</p>
                {Item.All_btns_text === "Claim" ? (<>
                {(parseFloat(myReward/1e9).toFixed(9)) >= parseFloat(Item.rewardtoclaim/1e9).toFixed(9) ? (<>
                    {/* <div className='All_btns'>
                     <a href="#0" onClick={()=>claim()}>{Item.All_btns_text}</a>
                     
                </div> */}
                <div className='approve_button hero_btn'>
                      <ButtonLoad loading={loader}onClick={()=>claim()} >{Item.All_btns_text} </ButtonLoad>
                      </div>
                </>):(<>
                  <p>Claim should be allowed when greater than 0.1 ME</p>
                    <WebOffBotton WebOffBotton="Claim" link="#0"  />
                </>)}
                </>):(<>
                {Item.All_btns_text === "Click to Unstake" ? (<>
                {
                   
                   ( unstakeRemainingTime >currentEpochTime)? (<>
                    {/* <div className='All_btns'>
                  {(Item.unstakeTime)}
                    </div> */}
<CountdownWrapper endDate = {unstakeRemainingTime?unstakeRemainingTime:0}	/>

                    </>):(<> 
                   <div className='All_btns'>
                   <a href="#0" onClick={()=>handleOpens()}>{Item.All_btns_text}</a>
                   
                   
              </div></>) 
                }
                </>):(<>
                    <div className='All_btns'>
                     <a href="#0" onClick={()=>handleOpen()}>{Item.All_btns_text}</a>
                     
                </div>
                </>)}
                   
                </>)}
                {/* <CountdownWrapper endDate = {Item.unstakeTime}	/>
                <a href="#0" onClick={()=>handleOpens()}>{Item.unstakeTime}</a> */}
                {/* <div className='All_btns'>
                     <a href="#0" onClick={()=>handleOpens()}>{Item.All_btns_text}</a>
                     
                </div> */}
                 
            </div>
        </div>
    )
}

export default StockFilter;