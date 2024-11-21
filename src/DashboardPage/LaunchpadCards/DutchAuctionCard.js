import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Form, InputGroup, Col, Container, Dropdown, OverlayTrigger,Accordion, Row, Tab, Tabs, Tooltip, Alert, Badge, ProgressBar } from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import Box from '@mui/material/Box';
import Vemercury_page_logo from '../../assets/images/Dashboard/Vemercury_page_logo.svg';
import mercurycoin from '../../assets/images/Dashboard/MeCoin.png';
import mercuryBanner from '../../assets/images/HomePage/mercury-banner.jpg'
import Modal from '@mui/material/Modal';
import { ethers } from 'ethers';
import auctionABI from '../LaunchpadContracts/DutchAuction/ABI.json';
import contractDetails from '../LaunchpadContracts/DutchAuction/contractDetails.json';
import CountdownWrapper from './snippets/CountdownWrapper';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
// import { toast } from 'react-toastify';
import { DutchAuctionAddress } from '../../abi/abi';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import "../../toast-style-override.css";
import { createTxn , recordUserVisits} from "../../abi/firebasecode";

const DutchAuctionCard = ({ balanceOfTokens }) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();
  const url = "https://sepolia.base.org";
  const provider = new ethers.providers.JsonRpcProvider(url);

    const[bidLoader, setBidLoader] = useState(false);
    const[claimLoader, setClaimLoader] = useState(false);
    const[loader, setLoader] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    // const [open3, setOpen3] = React.useState(false);
    const handleBidLoad = () => setBidLoader(true);
    const handleBidHide = () => setBidLoader(false);
    const handleClaimLoad = () => setClaimLoader(true);
    const handleClaimHide = () => setClaimLoader(false);
    const [avaxBalance, setAvaxBalance] = useState("");
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [avaxAmount, setAvaxAmount] = useState("");
    const [percentage, setPercentage] = useState("");
    const [totalAvax, setTotalAvax] = useState("");
    const [totalTokens, setTotalTokens] = useState("");
    const [userTokens, setUserTokens] = useState("");
    const [lock, setLock] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [hardAmount, setHardAmount] = useState(50);
    const [softAmount, setSoftAmount] = useState(5);
    const [userBidAmount, setUserBidAmount] = useState("");
    const [minimumBid, setMinimumBid] = useState("");

  // Fetch the user's AVAX balance
  const getUserAVAXBalance = async () => {
    try {
      let walletAddress = address;
      const response = await fetch(`https://base-sepolia.blockscout.com/api/v2/addresses/${address}`);    

      // const response = await fetch(`https://api-testnet.bscscan.com/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=0xcb3235781a4eb2973d1fd951b351eff845fb3374`);
      console.log("response", response, address);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      if (data.is_contract === false) {
        const balanceWei  = data.coin_balance ;
        const balanceConverter = ethers.utils.formatEther(balanceWei);
        setAvaxBalance(balanceConverter);
      } else {
        throw new Error('API response was not successful');
      }
      await balanceOfTokens();
      recordUserVisits(address, "DutchAuction");
    } catch (error) {
      console.error('Error fetching balance:', error);
      setAvaxBalance(0);
      // Handle other potential errors here
    }
  };
  

    // Example function to get details from the contract
    const getAuctionDetails = async () => {
        try {
            const auctionContract =  new ethers.Contract(DutchAuctionAddress, auctionABI, provider);
            // let address = localStorage.getItem("walletAddress").toLowerCase()
          // Example: Get a specific property from the contract
          const minimumBidAmount = await auctionContract.minimumBid();
          const startTimestamp = await auctionContract.getStartTimestamp();
          const endTimestamp = await auctionContract.getEndTimestamp();
          const getBiddeddAmount = await auctionContract.getBiddedAmount(address);
          const getRewardAmount = await auctionContract.getRewardAmount(localStorage.getItem("walletAddress"));
          const getTotalTokens = await auctionContract.getTotalTokens();
          const getContractBalance = await auctionContract.getContractBalance();
          try{
            const response = await fetch(`https://base-sepolia.blockscout.com/api/v2/addresses/${DutchAuctionAddress}`);    
                    console.log("response", response);

            // const response = await fetch(`https://api-testnet.bscscan.com/api?module=account&action=balance&address=${contractDetails.contractAddress}&tag=latest&apikey=0xcb3235781a4eb2973d1fd951b351eff845fb3374`);
            // console.log("response", response);
        
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            if (data.is_contract === true) {
              const balanceWei  = data.coin_balance ;
              const balanceConverter = ethers.utils.formatEther(balanceWei);
              setTotalAvax(balanceConverter);
              const percentCalc = (parseFloat(balanceConverter)/hardAmount)*100;
              setPercentage(percentCalc);
            } else {
              throw new Error('API response was not successful');
            }
          }catch{
            console.error("API response was not successful");
          }
          const balanceConverterBid = ethers.utils.formatEther(getBiddeddAmount);
          setUserBidAmount(balanceConverterBid);
          setTotalTokens(parseInt(getTotalTokens._hex, 16)/1e9);
          setEndTime(parseInt(endTimestamp._hex, 16));
          setUserTokens(parseInt(getRewardAmount._hex, 16)/1e9);
          setMinimumBid(parseInt(minimumBidAmount._hex, 16)/1e18);

          console.log('Auction Status:', parseInt(startTimestamp._hex, 16), parseInt(endTimestamp._hex, 16), parseInt(getTotalTokens._hex, 16), parseInt(getContractBalance._hex, 16));
          await balanceOfTokens();
          // Replace 'auctionStatus' with the name of the property/method in your contract
          // Call other contract methods or access properties as needed
        
          // You can perform other operations with the fetched data here
        } catch (error) {
          console.error('Error fetching auction details:', error);
          if (error.message.includes("execution reverted")) {
            console.error("Contract execution reverted. Check contract conditions and inputs.");
          }
          // Handle other potential errors here
        }
      };
      
  
  useEffect(() => {
    getUserAVAXBalance();
    getAuctionDetails();
  }, [isConnected]);
  
  const maxAvax= async() =>{
    // Get the user's AVAX balance
    const maxValue = parseFloat(avaxBalance) - 0.00158611;
    setAvaxAmount(maxValue);
  }

  const placeBid = async () => {
      try {
        handleBidLoad();
        const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
                const signer =  ethersProvider.getSigner()
            
        const auctionContract =  new ethers.Contract(contractDetails.contractAddress, auctionABI, signer);
        const ethBidAmount = ethers.utils.parseEther(avaxAmount.toString());
        const tx = await auctionContract.bid({
          value: ethBidAmount,
        });
        // Log transaction hash (txid)
        console.log('Transaction Hash (txid):', tx.hash);
        // Wait for transaction confirmation
        const receipt = await tx.wait();
        let id = "https://sepolia.basescan.org/tx/" + tx.hash;
      
        toast.success(toastDiv(id,"Transaction Successful"));
        console.log('Transaction confirmed in block:', receipt.blockNumber)
        // Update UI or perform any action upon successful bid
        console.log('Bid placed successfully!');
        setAvaxAmount("");
        await createTxn("ETH",tx.hash,"Auction Bid ETH",contractDetails.contractAddress,address);
        await getUserAVAXBalance();
        await getAuctionDetails();
        handleBidHide();
        handleClose2();
      } catch (error) {
        toast.error(`Bid Failed: ${(error?.reason).toString()}`);

        console.error('Error placing bid:',`${(error).toString()}`);
        handleBidHide();
      }
  };

  const rewardClaim = async () => {
    try {
      handleBidLoad();
      const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
      const signer =  ethersProvider.getSigner()
  
      const auctionContract =  new ethers.Contract(contractDetails.contractAddress, auctionABI, signer);

      const tx = await auctionContract.withdrawReward();
      // Log transaction hash (txid)
      console.log('Transaction Hash (txid):', tx.hash);
     
      // Wait for transaction confirmation
      const receipt = await tx.wait();
      let id = "https://sepolia.basescan.org/tx/" + tx.hash;
      
      toast.success(toastDiv(id,"Transaction Successful"));
      console.log('Transaction confirmed in block:', receipt.blockNumber)
      // Update UI or perform any action upon successful bid
      console.log('Bid placed successfully!');
      await createTxn("ME",tx.hash,"Auction Claim ME",contractDetails.contractAddress,address);
      await getUserAVAXBalance();
      await getAuctionDetails();
      handleBidHide();
      handleClose2();
    } catch (error) {
      toast.error(`Bid Failed: ${error.data.message}`);
      console.error('Error placing bid:', error);
      handleBidHide();
    }
};
const toastDiv = (txId,type) =>
(
    <div>
       <p> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
</svg></a></p> 
    </div>
);

const changeInputValue = (value) => {
  //     // Convert the input value to a float
  // let value = parseFloat(value1);
  
  // Check if the input value is a valid number
  if (value === "" || value === null || value === NaN || value === "." || isNaN(value) || hasMoreThan18Decimals(value)) {
      // If not a valid number, set the bondAmount state to 0
      setAvaxAmount("");
      return; // Exit the function
  }
  setAvaxAmount(value);
}

// Function to check if the input has more than 18 decimal places
const hasMoreThan18Decimals = (value) => {
  const parts = value.toString().split('.');
  if (parts.length === 2 && parts[1].length > 18) {
      return true;
  }
  return false;
};

const formatNumber = (num) => {
  // Convert number to string
  const numStr = num.toString();
  if(num == 0){
    return 0 ;
  }
  // Find the index of the first non-zero digit after the decimal point
  const decimalIndex = numStr.indexOf('.') + 1;
  const firstNonZeroIndex = decimalIndex + numStr.slice(decimalIndex).search(/[^0]/);

  // If there are no non-zero digits after the decimal point, return the original string
  if (firstNonZeroIndex === decimalIndex) {
    return parseFloat(num).toFixed(2);
  }

  // Otherwise, format the string with '0.0{no.of zeroes}...'
  const zeroCount = firstNonZeroIndex - decimalIndex - 1;
  const remainingDigits = numStr.slice(firstNonZeroIndex);
  const truncatedDigits = remainingDigits.substring(0, 4);
  return `0.0(${zeroCount})${truncatedDigits}`
};

  return (
    <>
                   <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

    <div className='' >
        <div className='Pool_Page_main Vemercury_page_main'>
            <div className='Vemercury_page_main'>
                <div className='box_main_border'>
                  <div className='trade_now_block'>
                      <div>
                          <div className='Vemercury_box_logo'>
                              <img src={Vemercury_page_logo} height="35px" alt="" />
                              <h4>Seed Sale</h4>
                          </div>
                          {/* <div className='total_vemercury_supply_box justify-content-center'>
                              <img src={mercuryBanner} height="300px"/>
                          </div> */}
                      </div>
                      {/* <div className='vemercury_boosts_border'>
                          <span></span>
                          <p>Vemercury Boosts Mercury APR <img src={akar_icons_question} alt="" /></p>
                          <span><p>(</p>Boost Calculator <img src={Boost_Calculator_icon} alt="" /><p>)</p></span>
                          <span></span>
                      </div> */}

                      <div className='Confirm_btn_show' style={{"max-width": "none"}}>
                          <div className='hero_btn'>
                              <Button onClick={handleOpen}>Participate</Button>
                          </div>                      
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        
      }}
    >
      <div className='modal_Box_main' >
        <Box className='modal_Boxes responsive_pop' >
          <div className='ConnectPop_main'>
            <div className='swap_tokens_pop_main'>
              <div className='ConnectPop_Close_btn'>
                <a href="#0" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5Z" fill="#29ABE2"/>
                  <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994Z" fill="#29ABE2"/>
                </svg>
                </a>
              </div>
                  <div className='d-flex align-items-center mb-4'>
                    <img src={Vemercury_page_logo} alt="" height="25px" style={{ marginRight: '10px' }} />
                    <h4 style={{ margin: '0', alignSelf: 'flex-start' }}></h4>
                  </div>
                  <div className="d-flex justify-content-between">
                  {/* Exchange Rate */}
                  <div className='d-flex flex-column'>
                    <strong className="p">Soft Cap / Hard Cap</strong>
                    <div className="p mb-20">5 / 50 ETH</div>
                  </div>
                  {/* Your Balance */}
                    <div className='d-flex flex-column mb-2'>
                    <strong>Time Left</strong>
                      <div className="p mb-0">
                        <CountdownWrapper 
						            	endDate = {endTime}
						            />
                      </div>
                      {/* <div className="p mb-20">{(parseFloat(elemBalance) / 1000000).toFixed(2) === 'NaN' ? <>0.00</> : (parseFloat(elemBalance) / 1000000).toFixed(2)}&nbsp; ELEM</div> */}
                    </div>
                  </div>
                  <div className="d-flex align-items-start justify-content-between mb-2">
                  {/* SALE IN PROGRESS */}
                  {new Date()/1000 >= startTime && new Date()/1000 <= endTime && percentage < 100 ? (
                    <div className="d-flex mb-20 flex-wrap align-items-start justify-content-between">
                      <span style={{ backgroundColor: 'green', padding: '5px 10px', fontSize: '12px', width: 'auto', borderRadius: '12px' }}>
                        Sale in Progress
                      </span>
                    </div>
                  ) : (
                    <div className="d-flex mb-20 flex-wrap align-items-start justify-content-between">
                      <span style={{ backgroundColor: 'red', padding: '5px 10px', fontSize: '12px', width: 'auto', borderRadius: '12px' }}>
                        Sale Ended
                      </span>
                    </div>
                  )}
                  {/* Time Left */}
                    {/* <div className='text-md-end'>
                      <strong>Time Left</strong>
                      <div className="p mb-0">
                        <CountdownWrapper 
						            	endDate = {endTime}
						            />
                      </div>
                    </div> */}
                  </div>
                  {/* Start and End */}
                  <div className="mb-20">
                    <div className="d-flex justify-content-between mb-2">
                      <strong>Start</strong>
                      <strong>End</strong>
                    </div>
                    <ProgressBar>
                    <ProgressBar key={1}
                      now={!isNaN(parseFloat(percentage)) ? parseInt(percentage) <= 10 ? parseInt(percentage) : 10 : 0}
                    />
                    <ProgressBar key={2}
                      now={!isNaN(parseFloat(percentage)) ? parseInt(percentage) >= 10 ? parseInt(percentage) - 10 : 0 : 0}
                    />
                    </ProgressBar>
                    <div className="d-flex justify-content-between mb-4">
                        {!isNaN(parseFloat(percentage)) ? <strong>{parseFloat(percentage).toFixed(5)}%</strong> : <strong>{0}%</strong>}
                        <strong>{totalAvax} / {softAmount} / {hardAmount} ETH</strong>
                    </div>
                    <div className="mb-20 d-flex flex-column align-items-end">
                        {/* Other content */}
                        <div className="d-flex justify-content-end mb-2">
                            {new Date() / 1000 >= startTime && new Date() / 1000 <= endTime ? (
                                percentage < 100 ? 
                                    <ButtonLoad loading={loader} style={{padding: '5px 10px',fontSize: '12px', width: '100px'}} onClick={handleOpen2}>Participate</ButtonLoad>
                                : <ButtonLoad loading={loader} disabled onClick={handleOpen2}>Participate</ButtonLoad>
                            ) : (
                                <ButtonLoad loading={loader} style={{padding: '5px 10px',fontSize: '12px', width: '100px'}} onClick={handleOpen3}>Claim</ButtonLoad>
                            )}
                        </div>
                        {/* Other content */}
                    </div><br/>
                    <div className="d-flex align-items-start justify-content-between">
                        <div className='d-flex flex-column'>
                        <strong className="p">Your Balance</strong>
                        <div className="p mb-20">{parseFloat(avaxBalance).toFixed(6) === 'NaN' ? '0.00' : parseFloat(avaxBalance).toFixed(6)}&nbsp; ETH</div>                        
                            {/* <strong>ELEM</strong> */}
                        </div>
                        <div className='d-flex flex-column'>
                        <strong className="p">Your Contribution</strong>
                            <div className="p mb-20">{(parseFloat(userBidAmount)).toFixed(3) === 'NaN' ? <>0.000</> : formatNumber((parseFloat(userBidAmount)).toFixed(18))} ETH</div>
                            {/* <strong>ELEM</strong> */}
                        </div>
                        <div className='d-flex flex-column'>
                            <strong className="mb-0">Total Allocation</strong>
                            <div className="p mb-0">{totalTokens} ME</div>
                            {/* <strong>ELEM</strong> */}
                        </div>
                        {/* <div className='d-flex flex-column align-items-end'> */}
                            {/* <strong>Total Reward</strong>
                            <div className="p mb-0">{userTokens} ME</div> */}
                            {/* <strong>ALGO</strong> */}
                        {/* </div> */}
                    </div>
                  </div>
            </div>
          </div>
        </Box>
      </div>
    </Modal>
    <Modal
      open={open2}
      onClose={handleClose2}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <div className='modal_Box_main' style={{ textAlign: 'center' }}>
        <Box className='modal_Box responsive_pop'>
          <div className='ConnectPop_main'>
            <div className='swap_tokens_pop_main'>
              <div className='ConnectPop_Close_btn'>
                <a href="#0" onClick={handleClose2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5Z" fill="#29ABE2"/>
                  <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994Z" fill="#29ABE2"/>
                </svg>
                </a>
              </div>
                  <div className='d-flex justify-content-center mb-4'>
                    <img src={mercurycoin} alt="" height="70px" style={{ marginRight: '10px'}}/>
                    {/* <h4 style={{ margin: '0', alignSelf: 'flex-start' }}>Mercury</h4> */}
                  </div>
                  <div className="">
                      {/* Your Balance and Minimum Bid Amount */}
                      <div className="d-flex justify-content-between">
                          {/* Your Balance */}
                          <div className="mr-4">
                              <strong className="p">Your Balance</strong>
                              <div className="p mb-20">{parseFloat(avaxBalance).toFixed(6) === 'NaN' ? '0.00' : parseFloat(avaxBalance).toFixed(4)}&nbsp; ETH</div>
                          </div>
                          {/* Minimum Bid Amount */}
                          <div>
                              <strong className="p text-end">Minimum Bid</strong>
                              <div className="p mb-20 text-end">{parseFloat(minimumBid).toFixed(2)}&nbsp; ETH</div>
                          </div>
                      </div>
                  </div><br/>
                    <div className="mb-2">
                    <div className='Confirm_Stack_box'>
                        <input 
                            type="text" placeholder='0.00'
                            onChange={event => changeInputValue(event.target.value)} 
                            value={avaxAmount?(avaxAmount) : ''}
                            style={{maxWidth: 'none'}}
                        />
                        <div className="max_btn">
                            <a href="#0" onClick={()=>maxAvax()}>Max</a>
                        </div>           
                    </div>
                    <div className="mb-20">
                    <ButtonLoad loading={bidLoader} style={{padding: '5px 10px',fontSize: '12px', width: '100px'}} onClick={placeBid}>Contribute</ButtonLoad>
                        {/* <Button variant='grad' className='mb-20 py-1' onClick={()=>handleShowDonate()} style={{textTransform:"capitalize"}}>participate</Button> */}
                    </div>
                  </div>
            </div>
          </div>
        </Box>
      </div>
    </Modal>
    <Modal
      open={open3}
      onClose={handleClose3}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <div className='modal_Box_main' style={{ textAlign: 'center' }}>
        <Box className='modal_Box responsive_pop'>
          <div className='ConnectPop_main'>
            <div className='swap_tokens_pop_main'>
              <div className='ConnectPop_Close_btn'>
                <a href="#0" onClick={handleClose3}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5Z" fill="#29ABE2"/>
                  <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994Z" fill="#29ABE2"/>
                </svg>
                </a>
              </div>
                  <div className='d-flex mb-4'>
                    <img src={Vemercury_page_logo} alt="" height="25px" style={{ marginRight: '10px' }} />
                    <h4 style={{ margin: '0', alignSelf: 'flex-start' }}>Mercury</h4>
                  </div>
                  <div className="">
                  {/* Your Balance */}
                    <div className='mb-2'>
                      {/* <strong className="p">Your Balance</strong>
                      <div className="p mb-20">{parseFloat(avaxBalance).toFixed(6) === 'NaN' ? '0.00' : parseFloat(avaxBalance).toFixed(6)}&nbsp; AVAX</div> */}
                      <strong className="p">Reward Amount</strong>
                      <div className="p mb-20">{userTokens}&nbsp; ME</div>
                    </div>
                  </div>
                    <div className="mb-2">
                    {/* <div className='Confirm_Stack_box'>
                        <input 
                            type="text" placeholder='0.00'
                            onChange={event => setAvaxAmount(event.target.value)} 
                            value={avaxAmount?(avaxAmount) : ''}
                            style={{ width: '100%' }}
                        />
                        <div className="max_btn">
                            <a href="#0" onClick={()=>maxAvax()}>Max</a>
                        </div>           
                    </div> */}
                    <div className="mb-20">
                    <ButtonLoad loading={claimLoader} style={{padding: '5px 10px',fontSize: '12px', width: '150px'}} onClick={rewardClaim}>Claim reward</ButtonLoad>
                        {/* <Button variant='grad' className='mb-20 py-1' onClick={()=>handleShowDonate()} style={{textTransform:"capitalize"}}>participate</Button> */}
                    </div>
                  </div>
            </div>
          </div>
        </Box>
      </div>
    </Modal>
    </>
  );
};
export default DutchAuctionCard;