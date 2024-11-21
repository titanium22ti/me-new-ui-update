import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Form, InputGroup, Col, Container, Dropdown, OverlayTrigger,Accordion, Row, Tab, Tabs, Tooltip, Alert, Badge, ProgressBar } from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import Box from '@mui/material/Box';
import Vemercury_page_logo from '../../assets/images/Dashboard/Vemercury_page_logo.svg';
import mercurycoin from '../../assets/images/Dashboard/MeCoin.png';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from '@mysten/sui/transactions';
import { useWalletKit } from '@mysten/wallet-kit';
import { LAUNCHPAD_ID, PACKAGE_OBJECT_ID } from './utils/constants';
import axios from 'axios';

const SuiLaunchpadCard = ({ balanceOfTokens }) => {
  const { signAndExecuteTransactionBlock, currentAccount } = useWalletKit();
  const suiClient = new SuiClient({
    url: "https://fullnode.testnet.sui.io:443",
  });

    const[bidLoader, setBidLoader] = useState(false);
    const[loader, setLoader] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    // const [open3, setOpen3] = React.useState(false);
    const handleBidLoad = () => setBidLoader(true);
    const handleBidHide = () => setBidLoader(false);
    const [suiBalance, setSuiBalance] = useState("");
    const [open2, setOpen2] = React.useState(false);
    const [amount, setAmount] = useState(0);
    const [percentage, setPercentage] = useState("");
    const [totalSui, setTotalSui] = useState(""); //raised
    const [totalTokens, setTotalTokens] = useState(""); //total_tokens
    const [startTime, setStartTime] = useState(""); //start_time
    const [endTime, setEndTime] = useState(""); //end_time
    const [softCap, setSoftCap] = useState(""); //soft_cap
    const [userDepositAmount, setUserDepositAmount] = useState(""); //deposits
    const [vestingCount, setVestingCount] = useState("");
    const [depositLock, setDepositLock] = useState();
    const [suiPrice, setSuiPrice] = useState();
    const [launchpadData, setLaunchpadData] = useState(null);

    const getAccountBalance = async () => {
      try {
        const balance = await suiClient.getBalance({
          owner: currentAccount?.address,
        });

        setSuiBalance(balance.totalBalance);
      } catch (error) {
        console.error("Error fetching account balance:", error);
      }
    };    

    async function getSuiPrice() {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=sui&vs_currencies=usd');
            return response.data.sui.usd;
        } catch (error) {
            console.error('Error fetching SUI price:', error);
            throw error;
        }
    }

    const fetchLaunchpadData = async () => {
  
      try {
        const launchpad = await suiClient.getObject({
          id: LAUNCHPAD_ID, // Replace with your Launchpad object ID
          options: {
            showContent: true,
          },
        });

        console.log("launchpad", launchpad);

        const data = launchpad?.data;
        if (!data) {
          console.log("Launchpad not found.");
          return;
        }

        const content = data.content;
        if (content && content.dataType === "moveObject") {
          const fields = content.fields;
          setLaunchpadData(fields);

        // Setting state values from the fields object
        setTotalSui(fields.raised);
        setTotalTokens(fields.total_tokens);
        setStartTime(fields.start_time / 1000);
        setEndTime(fields.end_time / 1000);
        setSoftCap(fields.soft_cap);
        setVestingCount(fields.vesting_count);
        setDepositLock(!fields.lock_deposit);
        setPercentage((fields.raised / (fields.soft_cap * 1e9)) * 100);
        setSuiPrice(await getSuiPrice());
        console.log("fields.deposits", fields.deposits);
        // Finding the deposit amount for the connected user
        if (fields && fields.deposits && Array.isArray(fields.deposits)) {
          // Step 1: Accumulate amounts by user address
          const depositMap = fields.deposits.reduce((acc, deposit) => {
            const userAddress = deposit.fields.user.toLowerCase();
            const amount = parseInt(deposit.fields.amount, 10);
        
            if (acc[userAddress]) {
              acc[userAddress] += amount;
            } else {
              acc[userAddress] = amount;
            }
        
            return acc;
          }, {});
        
          // Step 2: Check if connected wallet has a deposit
          const userDepositAmount = depositMap[(currentAccount?.address).toLowerCase()] || 0;
          setUserDepositAmount(userDepositAmount.toString());
        } else {
          console.error("Deposits data is not defined or is not in the expected format.");
          setUserDepositAmount("0"); // Default value if deposits are not found
        }
        }
      } catch (error) {
        console.error("Error fetching Launchpad data:", error);
      }
    };
    
    useEffect(() => {
      fetchLaunchpadData();
      getAccountBalance();
    }, [currentAccount?.address]);
  
  const maxAvax= async() =>{
    // Get the user's AVAX balance
    const maxValue = parseFloat(suiBalance);
    setAmount(maxValue);
  }
  async function getCoinObjectId(address) { 

    // Fetch owned coin objects (IDs only)
    const ownedObjects = await suiClient.getOwnedObjects({
        owner: address,
        filter: {
            StructType: '0x2::coin::Coin<0x2::sui::SUI>', // Filter for SUI coin objects
        },
        options: {
            showType: true,
            showContent: true,  // Ensure we fetch the content to access balance fields
        },
    });

    if (!ownedObjects || !ownedObjects.data || ownedObjects.data.length === 0) {
        console.error("No coin objects found for the address:", address);
        return null;
    }

    let maxAmount = Number(0);
    let coinObjectWithHighestAmount = null;

    // Loop through each object to find the one with the highest balance
    for (const obj of ownedObjects.data) {
        const objectId = obj?.data?.objectId;

        if (!objectId) {
            console.error("Object ID not found in response:", obj);
            continue;
        }

        // Fetch the full details of the coin object to get the balance
        const coinDetails = await suiClient.getObject({
            id: objectId,
            options: {
                showContent: true,
            },
        });

        // Ensure coinDetails.content is of type `moveObject` and access `fields` safely
        if (
            coinDetails?.data?.content?.dataType === "moveObject" &&
            coinDetails.data.content.fields
        ) {
            const fields = coinDetails.data.content.fields;
            const amount = Number(fields.balance || 0);

            // Check if this object has the highest balance so far
            if (amount > maxAmount) {
                maxAmount = amount;
                coinObjectWithHighestAmount = obj;
            }
        } else {
            console.error("Fields not found in coin object content:", coinDetails);
        }
    }

    if (coinObjectWithHighestAmount) {
        console.log("Coin object with highest amount:", coinObjectWithHighestAmount);
        const coinUserId = coinObjectWithHighestAmount.data.objectId;
        return coinUserId;
    } else {
        console.error("No coin objects with balance found for the address:", address);
        return null;
    }
}


    const createAndTransfer = async () => {
      handleBidLoad();
    
      try {
        const tx = new Transaction();
        const connectedAddress = currentAccount ? currentAccount.address : "0x";
      
        // Split the SUI token and get the resulting coin object ID
        const [amountSplit] = tx.splitCoins(tx.gas, [tx.pure(10000000)]);
      
        // Transfer the split coin to the connected address
        tx.transferObjects([amountSplit], tx.object(connectedAddress));
      
        tx.setGasBudget(3000000);
      
        const result = await signAndExecuteTransactionBlock({
          transactionBlock: tx,
        });
      
        console.log({ result });
        let id = "https://suiscan.xyz/testnet/tx/" + result.digest;
        toast.success(toastDiv(id, "Sui Amount Splitted"));
        // Call the contract function after successful completion
        await callContract();
      } catch (err) {
        handleBidHide();
        console.error(err.message);
      
        if (err.message.includes('Rejected from user'))
          toast.error('You rejected the transaction');
        else
          toast.error('Something went wrong');
          handleBidHide();
      }
    };

    const callContract = async () => {
      try {
        const tx = new Transaction();
        const ido = LAUNCHPAD_ID;
        const clock = '0x6';
        const connectedAddress = currentAccount ? currentAccount.address : "0x";
      
        // Retrieve the object ID from the first transaction
        const splitUserId = await getCoinObjectId(connectedAddress);
        if (!splitUserId) {
          throw new Error("Failed to retrieve coin object ID");
        }

        const scaledAmount = parseInt(parseFloat(amount) * 1000000000);
      
        // Move call with the split coin's object ID
        tx.moveCall({
          target: `${PACKAGE_OBJECT_ID}::ME_Launchpad::deposit`,
          arguments: [
            tx.object(ido),
            tx.object(connectedAddress),
            tx.object(splitUserId),
            tx.pure(scaledAmount),
            tx.object(clock),
          ],
        });
      
        tx.setGasBudget(3000000);
      
        const result = await signAndExecuteTransactionBlock({
          transactionBlock: tx,
        });
      
        console.log({ result });
        let id = "https://suiscan.xyz/testnet/tx/" + result.digest;
        toast.success(toastDiv(id, "Transaction Successful"));
        setAmount("");
        fetchLaunchpadData();
        getAccountBalance();
        handleClose2();
      } catch (err) {
        handleBidHide();
        console.error(err.message);
      
        if (err.message.includes('Rejected from user'))
          toast.error('You rejected the transaction');
        else
        toast.error('Something went wrong');
      } finally {
        handleBidHide();
      }
    };

    const toastDiv = (txId, type) =>
    (
        <div>
           <p> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Sui Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
    </svg></a></p> 
        </div>
    );

    const changeInputValue = (value) => {
      //     // Convert the input value to a float
      // let value = parseFloat(value1);

      // Check if the input value is a valid number
      if (value === "" || value === null || value === NaN || value === "." || isNaN(value) || hasMoreThan9Decimals(value)) {
          // If not a valid number, set the bondAmount state to 0
          setAmount("");
          return; // Exit the function
      }
      setAmount(value);
    }

    // Function to check if the input has more than 18 decimal places
    const hasMoreThan9Decimals = (value) => {
      const parts = value.toString().split('.');
      if (parts.length === 2 && parts[1].length > 9) {
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
                              <h4>Mercury Launch</h4>
                          </div>
                      </div>

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
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        
      }}
    >
      <div className='modal_Box_main' style={{color: "white"}}>
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
                  <div className='d-flex align-items-center mb-4' style={{ justifyContent: 'center' }}>
                    <img src={Vemercury_page_logo} alt="" height="25px" style={{ marginRight: '10px' }} />
                  </div>
                  <div className="d-flex justify-content-between">
                  <div className='d-flex flex-column'>
                    <strong className="p">Soft Cap</strong>
                    <div className="p mb-20">50000 SUI</div>
                  </div>

                  </div><br/>
                  <div className="d-flex align-items-start justify-content-between mb-2">
                  {/* SALE IN PROGRESS */}
                  {depositLock ? (
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

                  </div>
                  <div className="mb-20">
                    <div className="d-flex justify-content-between mb-2">
                      <strong>Start</strong>
                      <strong>End</strong>
                    </div>
                    <ProgressBar>
                    <ProgressBar key={1}
                      now={!isNaN(parseFloat(percentage)) ? parseInt(percentage) : 0}
                    />
                    </ProgressBar>
                    <div className="d-flex justify-content-between mb-4">
                        {!isNaN(parseFloat(percentage)) ? <strong>{parseFloat(percentage).toFixed(5)}%</strong> : <strong>{0}%</strong>}
                        <strong>Collected: {totalSui / 1e9} SUI</strong>
                    </div>
                    <div className="mb-20 d-flex flex-column align-items-end">
                        <div className="d-flex justify-content-end mb-2">
                            {new Date() / 1000 >= startTime && new Date() / 1000 <= endTime ? (
                                percentage < 100 ? 
                                    <ButtonLoad loading={loader} style={{padding: '5px 10px',fontSize: '12px', width: '100px'}} onClick={handleOpen2}>Participate</ButtonLoad>
                                : <ButtonLoad loading={loader} disabled onClick={handleOpen2}>Participate</ButtonLoad>
                            ) : (
                                <ButtonLoad loading={loader} style={{padding: '5px 10px',fontSize: '12px', width: '100px'}} onClick={handleOpen2}>Participate</ButtonLoad>
                            )}
                        </div>
                    </div><br/>
                    <div className="d-flex align-items-start justify-content-between">
                        <div className='d-flex flex-column'>
                        <strong className="p">Your Balance</strong>
                        <div className="p mb-20">{parseFloat(suiBalance).toFixed(6) === 'NaN' ? '0.00' : parseFloat(suiBalance)/1e9}&nbsp; SUI</div>                        
                        </div>
                        <div className='d-flex flex-column'>
                        <strong className="p">Your Contribution</strong>
                            <div className="p mb-20">{(parseFloat(userDepositAmount)).toFixed(3) === 'NaN' ? <>0.000</> : (parseFloat(userDepositAmount)/1e9)} SUI</div>
                        </div>
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
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className='modal_Box_main' style={{ textAlign: 'center', color: "white" }}>
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
                  </div>
                  <div className="">
                      <div className="d-flex justify-content-center">
                          <div className="mr-4">
                              <strong className="p">Your Balance</strong>
                              <div className="p mb-20">{parseFloat(suiBalance).toFixed(6) === 'NaN' ? '0.00' : parseFloat(suiBalance)/1e9}&nbsp; SUI</div>
                          </div>
                      </div>
                  </div><br/>
                    <div className="mb-2">
                    <div className='Confirm_Stack_box'>
                        <input 
                            type="number" placeholder='0.00'
                            onChange={event => changeInputValue(event.target.value)} 
                            value={amount?(amount) : ''}
                            style={{maxWidth: 'none'}}
                        />
                    </div>
                    <div className="mb-20">
                    <ButtonLoad loading={bidLoader} style={{padding: '5px 10px',fontSize: '12px', width: '100px'}} onClick={createAndTransfer}>Deposit</ButtonLoad>
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
export default SuiLaunchpadCard;