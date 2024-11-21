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

const MintCard = ({ balanceOfTokens,imgsrc }) => {
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

    // console.log("profileImage",imgsrc)
    const circleImageStyle = {
      width: '100px', // Adjust as needed
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #ccc' // Optional
    };

    const epochconvt = (time) =>{
      let myDate = new Date(parseFloat(time)*1000);
      return (myDate); // will print "2023-08-10T01:13:20.000Z"
      // output will vary based on system locale settings
      
    }

    function epochToDateTime(epoch) {
      // Convert epoch to milliseconds
      const milliseconds = epoch * 1000;
    
      // Create a new Date object using the milliseconds
      const dateObject = new Date(milliseconds);
    
      // Extract date components
      const year = dateObject.getFullYear();
      const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); // Month is zero-based, so we add 1
      const day = ("0" + dateObject.getDate()).slice(-2);
    
      // Extract time components
      const hours = ("0" + dateObject.getHours()).slice(-2);
      const minutes = ("0" + dateObject.getMinutes()).slice(-2);
      const seconds = ("0" + dateObject.getSeconds()).slice(-2);
    
      // Construct the date and time string
      const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
      return dateTimeString;
    }

  return (
    <>
                   <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

    <div className='' >
        <div className='Pool_Page_main ' style={{padding:' 10px 0px 0 0px'}}>
            <div className='Vemercury_page_main'>
                <div className='box_main_border'>
                  <div className='trade_now_block'>
                      <div>
                          <div className='Vemercury_box_logo'>
                              <img src={imgsrc.profileImage} style={circleImageStyle} alt="" />
                              <h5 style={{textAlign:'end'}}>- By {imgsrc.username}</h5>
                              <div className='displayvalue' style={{textAlign:'justify',marginTop:'5px'}}>
                              <h6 className='mt-2'>Name : {imgsrc.tokenName}({imgsrc.tokenSymbol})</h6>
                              <h6 className='mt-2'>Supply : {imgsrc.totalSupply}</h6>
                              <h6 className='mt-2'>Created at : {epochToDateTime(imgsrc.entryTime)}</h6>
                              <h6 className='mt-2'>Contract Address : <a href={`https://sepolia.basescan.org/token/${imgsrc.ContractAddress}`} target="_blank" rel="noopener noreferrer">{imgsrc.ContractAddress.slice(0, 3)}...{imgsrc.ContractAddress.slice(-4)}</a></h6>
                              </div>
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

                      
                  </div>
                </div>
            </div>
        </div>
    </div>
   
   
   
    </>
  );
};
export default MintCard;