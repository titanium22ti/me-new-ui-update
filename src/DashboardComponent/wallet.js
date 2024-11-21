import React, { useEffect, useState } from 'react';
import AppTable from './AppTable';
import r_tabel_arrow from '../assets/images/Dashboard/r_tabel_arrow.svg';
import l_tabel_arrow from '../assets/images/Dashboard/l_tabel_arrow.svg';
import r_tabel_arrow_hover from '../assets/images/Dashboard/r_tabel_arrow_hover.svg';
import l_tabel_arrow_hover from '../assets/images/Dashboard/l_tabel_arrow_hover.svg';
import Clock from '../assets/images/Dashboard/TimeClockicon.svg';
import mercurycoin from '../assets/images/Dashboard/MeCoin.png';




import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, ArcElement } from 'chart.js';
import {recordUserVisits} from "../abi/firebasecode";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { getDashBoardDetails } from '../abi/firebasecode';
import Timer from './Timer';
// import ProgressBar from './CircleTimer';
import 'react-circular-progressbar/dist/styles.css';

import {  CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { convertEpochToTimeAgo, getTimeLeftForJoker, getTokenTransactionsLength, retrieveTxnByPage } from '../abi/CommonSolFunctions';
import PageFilter1 from './Common/PageFilter1';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { ethers } from 'ethers';
import { BLACKTokenABI, BLACKTokenAddress, ChainlinkPriceFeedOracleABI, ChainlinkPriceFeedOracleAddress, WBTCAddress } from '../abi/abi';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler, ArcElement
);

const Dashboard = ({balanceOfTokens,gbalances}) => {
 
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();

  const [xdata, setxdata] = useState("");
  const [ydata, setydata] = useState("");
  const [zdata, setzdata] = useState("");
  const [adata, setadata] = useState("");
  const [secondsLeftState, setSecondsLeftState] = useState("");
  const [secondsLeftInTextState, setSecondsLeftInTextState] = useState("");
  const [timePercentageState, setTimePercentageState] = useState("");

  const [MePrice, setMePrice] = useState("");
  const [EthPrice, setEthPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const [jokerTransactions, setJokerTransactions] = useState([]);
const [jokerTxLength, setJokerTxLength] = useState(0);


  const url = "https://base-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(url);
    

  useEffect( () => {
    // recordUserVisits(address, "Dashboard");
  }, []);

  const fetchfirst = async() =>{
    if(isConnected)
    {
        let { secondsleft, secondsLeftInText, timePercentage } = await getTimeLeftForJoker(address);
        setSecondsLeftState(secondsleft);
        setSecondsLeftInTextState(secondsLeftInText);
        setTimePercentageState(timePercentage);
    }
    else{
        setSecondsLeftState("");
        setSecondsLeftInTextState("");
        setTimePercentageState("");    
    }

    const priceFeed = new ethers.Contract(ChainlinkPriceFeedOracleAddress, ChainlinkPriceFeedOracleABI, provider);
    const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);

    let avaxSpent = ethers.utils.formatUnits(await JOKERContract.checkSwapValue(1*1e9,[BLACKTokenAddress,WBTCAddress]),0);

    const roundData = await priceFeed.latestRoundData();
    const decimals = await priceFeed.decimals(); // Fetch decimals for conversion

    // Convert answer (int256) to a human-readable number based on decimals
    const ethPriceInUsd = parseFloat(ethers.utils.formatUnits(roundData[1].toString(), decimals));
    console.log("latest eth price : ", ethPriceInUsd);
    const Meprice = avaxSpent * (ethPriceInUsd * 10 ** decimals);
    console.log("latest ME price : ", parseFloat((Meprice / 1e18) / 10 ** decimals));
    const MepriceInUsd = parseFloat((Meprice / 1e18) / 10 ** decimals);
    setMePrice(MepriceInUsd);
    setEthPrice(ethPriceInUsd);

  }

  useEffect(()=>{ fetchfirst(); },[isConnected])

  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
        // Fetch data from Firebase
        const { labels, data, data1, data2 } = await getDashBoardDetails();
        
        // Update state with fetched data
        setxdata(labels);
        setydata(data);
        setzdata(data1);
        setadata(data2);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
      fetchData();
  }, []);
  

  function formatValues (values,digitsToPrint) {
    return parseFloat(values).toLocaleString(undefined, { minimumFractionDigits: digitsToPrint, useGrouping: false });
}

const pagination = async (index) => {
    try{
        if(isConnected)
        {
            setCurrentPage(index);
            let txnData = await retrieveTxnByPage(address, transactionsPerPage, index);
            let jokerLength = await getTokenTransactionsLength(BLACKTokenAddress, address);
            setJokerTransactions(() => txnData);
            setJokerTxLength(jokerLength);
        }
        else
        {
            setCurrentPage(1);
            setJokerTransactions([]);
            setJokerTxLength(0); 
        }
    }catch(e){
        console.error(e);
    }
   
}

useEffect(() => {
    pagination(currentPage);
    setCurrentPage(1);
}, [isConnected, address]);



  return (
    <>
      <div className='Dashboard_main_wrapper'>
      <div className='Pool_Page_main swap_page_main'>
                    <PageFilter1 />
     
        <div className='app_page '>
          <h2 className='Dashboard_heading'>
            {/* ME Collateral */}
            <center>
              Coming Soon
            </center>
            </h2>
         
        
                    
                        <Row className=" g-5 mb-24">
                        <Col md={3} xs={6} >
                        <div className="status-card d-flex align-items-center" style={{'background': 'rgba(36, 72, 101, 0.1)','border': '1px solid #a01ded'}} >
                        <div>
                            <img src={mercurycoin} height={'42px'} style={{minWidth: '42px'}} alt="Icon1" />
                        </div>
                        
                        <div className='display_bal' style={{'paddingLeft':'10px'}}>
                          <h6>Balance</h6> 
                        <h7 style={{color: '#FFFFFF'}}>{parseFloat(gbalances.me).toFixed(4)}</h7>
                           
                        </div>
                       
                            <div>
                        </div>
                            </div>
                            </Col>
                            <Col md={3} xs={6} >
                        <div className="status-card  align-items-center" style={{'background': 'rgba(36, 72, 101, 0.1)','border': '1px solid #a01ded'}} >
                        <div className='display_bal'>
                        <h6>24Hours Lock</h6>
                            <h7 style={{color: '#FFFFFF'}}>Transact {`>=`} {parseFloat((gbalances.me)*0.0075).toFixed(4)}</h7>
                        </div>
                            <div>
                        </div>
                            </div>
                            </Col>
                            <Col md={3} xs={6} >
                        <div className="status-card  align-items-center" style={{'background': 'rgba(36, 72, 101, 0.1)','border': '1px solid #a01ded'}} >
                        <div className='display_bal'>
                            <h6>12Hours Lock</h6>
                            <h7 style={{color: '#FFFFFF'}}>Transact {`>=`} {parseFloat((gbalances.me)*0.005).toFixed(4)}</h7>
                        </div>
                            <div>
                        </div>
                            </div>
                            </Col>
                              <Col md={3} xs={6} >
                        <div className="status-card  align-items-center" style={{'background': 'rgba(36, 72, 101, 0.1)','border': '1px solid #a01ded'}} >
                        <div className='display_bal'>
                        <h6>No lock</h6>
                        <h7 style={{color: '#FFFFFF'}}>Transact {`<=`} {parseFloat((gbalances.me)*0.0049).toFixed(4)}</h7>
                    </div>
                            <div>
                        </div>
                            </div>
                            </Col>
                           
                            </Row>
                            <div className='chart_row'>
                        <div className='chart_items'>
                        <div className='chart_1' >
                        <div className="box d-flex align-items-center p-3 p-md-1" style={{'background': 'rgba(36, 72, 101, 0.1)','border': '1px solid #a01ded', 'border-radius': '12px'}}>
          <div >
                            {/* <h4 className="mb-3">Rebase</h4>
                            <h5 className="text-gray">Next Seigniorage</h5>
                            <Timer count="2024-05-28T01:02:03" /> */}

                            <h5 className="mb-3" style={{'padding-left':'20px'}}>{isConnected ? secondsLeftState > 0 ? 'Time until wallet unlocks' : 'Wallet access granted' : "Coming soon"}</h5>
                            {secondsLeftState > 0 ? <h5 className="text-gray" style={{'padding-left':'20px'}}></h5> : <></>}
                          {secondsLeftInTextState && <Timer count={secondsLeftInTextState? secondsLeftInTextState:'0'} phrase={'good'}/>}     
                        </div>
                        <div className="ms-auto mobile_views " style={{"padding": "75px 15px 50px 15px",}}>
                      
      <CircularProgressbarWithChildren
        value={parseInt(timePercentageState)}
        styles={{
          path: {
            stroke: '#AA14F0', // Apply gradient as stroke color
            transform: 'rotate(90)', // Rotate the progress bar 90 degrees (25%)
            transformOrigin: 'center center', // Set rotation origin to center
          },
          trail: {
            stroke: '#d6d6d6', // Grey trail color
          },
          text: {
            fill: '#f88', // Text color
            fontSize: '16px', // Text font size
          },
        }}
      >
        {/* Put any JSX content inside CircularProgressbar */}
        <img style={{ width: 40, marginTop: -5 }} src={Clock} alt="doge" />
       
      </CircularProgressbarWithChildren>
    {/* </div> */}
                            </div>

                            {/* <CircularProgressbarWithChildren value={80}>
  <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style={{ fontSize: 12, marginTop: '50px' }}>
    <strong>77%</strong> mate
  </div>
</CircularProgressbarWithChildren> */}

                        </div>
                        </div>
                        <div className='chart_2' >
                        <div className="box d-flex align-items-center p-3 p-md-1" style={{'background': 'rgba(36, 72, 101, 0.1)','border': '1px solid #a01ded','border-radius': '12px'}}>
          <div className='display_bal' style={{'text-align': 'justify','padding-left': '20px'}}>
                            {/* <h4 className="mb-3">Rebase</h4>
                            <h5 className="text-gray">Next Seigniorage</h5>
                            <Timer count="2024-05-28T01:02:03" /> */}

                            <h5 className="mb-3" style={{'padding-left':'20px'}}></h5>
                            {/* {secondsLeftState > 0 ? <h5 className="text-gray" style={{'padding-left':'20px'}}>Next Seigniorage</h5> : <></>}
                          {secondsLeftInTextState && <Timer count={secondsLeftInTextState? secondsLeftInTextState:'0'} phrase={'good'}/>}      */}
                           <h7 className="mb-3" style={{color: '#FFFFFF'}}><span className="dot" style={{backgroundColor: '#a01ded'}}></span> SUI Balance: ${formatValues(parseFloat((gbalances.eth*EthPrice)/1e18),2)} </h7>
                           <br/>
                           <h7 className="mb-3" style={{color: '#FFFFFF'}}><span className="dot" style={{backgroundColor: 'white'}}></span> ME Balance: ${parseFloat(MePrice)? (parseFloat(parseFloat(gbalances.me)*parseFloat(MePrice))).toFixed(3) :'0'} </h7>
                        </div>
                        <div className="ms-auto mobile_views " style={{"padding": "75px 15px 50px 15px"}}>
                        {/* {99 -(parseFloat((parseFloat(gbalances.me)*parseFloat(MePrice))/parseFloat((gbalances.eth*EthPrice)/1e18))*100).toFixed(3)}  */}
      <CircularProgressbarWithChildren
        value={90 -(parseFloat((parseFloat(gbalances.me)*parseFloat(MePrice))/parseFloat((gbalances.eth*EthPrice)/1e18))*100).toFixed(3)}
        styles={{
          path: {
            stroke: '#AA14F0', // Apply gradient as stroke color
            transform: 'rotate(90)', // Rotate the progress bar 90 degrees (25%)
            transformOrigin: 'center center', // Set rotation origin to center
          },
          trail: {
            stroke: '#d6d6d6', // Grey trail color
          },
          text: {
            fill: '#f88', // Text color
            fontSize: '16px', // Text font size
          },
        }}
      >
        {/* Put any JSX content inside CircularProgressbar */}
        <img style={{ width: 40, marginTop: -5 }} src={mercurycoin} alt="doge" />
       
      </CircularProgressbarWithChildren>
    {/* </div> */}
                            </div>

                            {/* <CircularProgressbarWithChildren value={80}>
  <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style={{ fontSize: 12, marginTop: '50px' }}>
    <strong>77%</strong> mate
  </div>
</CircularProgressbarWithChildren> */}

                        </div>
                        </div>
                        </div>
                        </div>
                        <hr />
                        {/* style={{backgroundColor: '#a01ded'}} */}
                        {/* <h3>Transaction History</h3>
            <div className="mb-4 pt-4">
                <Table responsive striped hover style={{ backgroundColor: '#040718', border: '1px solid #a01ded', color: 'white' ,borderRadius: '12px',borderCollapse:'separate'}}>
                    <thead>
                        <tr>
                            <th><div className="sort">Type</div></th>
                            <th><div className="sort">Txn Hash</div></th>
                            <th><div className="sort">Block</div></th>
                            <th><div className="sort">From</div></th>
                            <th><div className="sort">To</div></th>
                            <th><div className="sort float-end">Amount</div></th>
                            <th><div className="sort float-end">Created</div></th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: '#040718' }}>
                        {Array.isArray(jokerTransactions) && jokerTransactions.length ? (
                            jokerTransactions.map((txDetails, index) => (
                                <tr key={index}>
                                    <td><center>
                                        <div className=" align-items-center">
                                            {/* <img src={TransferIcon} alt="Transfer" /> 
                                            <img src={mercurycoin} width='25px' height='25px' alt="Icon1" stye/>&nbsp;<a href={`https://sepolia.basescan.org/address/${txDetails.contractAddress}`} target="_blank" rel="noreferrer" type="button" style={{color:'#339fe2'}} className="btn-link"> Transfer</a>
                                        </div>
                                        </center>
                                    </td>
                                    <td><a href={`https://sepolia.basescan.org/tx/${txDetails.hash}`} target="_blank" rel="noreferrer" type="button" style={{color:'#339fe2'}} className="btn-link">{txDetails.hash ? `${txDetails.hash.substring(0, 4)}...${txDetails.hash.substring(txDetails.hash.length - 4)}` : ""}</a></td>
                                    <td><a href={`https://sepolia.basescan.org/block/${txDetails.blockNumber}`} target="_blank" rel="noreferrer" type="button" style={{color:'#339fe2'}} className="btn-link">{txDetails.blockNumber}</a></td>
                                    <td><a href={`https://sepolia.basescan.org/address/${txDetails.from}`} target="_blank" rel="noreferrer" type="button" style={{color:'#339fe2'}} className="btn-link">{txDetails.from ? `${txDetails.from.substring(0, 4)}...${txDetails.from.substring(txDetails.from.length - 4)}` : ""}</a></td>
                                    <td><a href={`https://sepolia.basescan.org/address/${txDetails.to}`} target="_blank" rel="noreferrer" type="button" style={{color:'#339fe2'}}  className="btn-link">{txDetails.to ? `${txDetails.to.substring(0, 4)}...${txDetails.to.substring(txDetails.to.length - 4)}` : ""}</a></td>
                                    <td className="text-end" style={{color:'white'}} >{parseFloat(txDetails.value / 1e9).toFixed(4)}&nbsp;&nbsp;
                                    {/* <img src={JokerIcon} alt="Transfer"/> 
                                    </td>
                                    <td className="text-end"  style={{color:'white'}}>{convertEpochToTimeAgo(txDetails.timeStamp)}</td>
                                    <br />
                                </tr>
                                
                            ))
                        ) :         
                        <tr>
                            <td colSpan="7" className="text-center">
                                <h3 className="text-gray" style={{ color: 'white', backgroundColor: '#040718' }}>Data not found</h3>
                            </td>
                        </tr>
                    
                        }


                    </tbody>
                </Table>
            </div>
            
            <div className="d-flex justify-content-center"> {/* Center align the pagination 
    <ul className="paginate list-unstyled d-flex align-items-center"> {/* Use flexbox to align items vertically centered 
        <li className="mr-2"> {/* Margin on both sides of the button 
            <Button variant="link" disabled={currentPage === 1} onClick={() => pagination(currentPage - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Button>
        </li>&nbsp;&nbsp;
        <li className=""  >
            <a className="active cursor-pointer" style={{ cursor: 'pointer','display': 'block','border':'1px solid white' ,'align-content':'center'}}>
                {currentPage}
            </a>
        </li>
        <li className="">
            <Button variant="link" disabled={currentPage >= Math.ceil(jokerTxLength / 5)} onClick={() => pagination(currentPage + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </Button>
        </li>
    </ul>
</div>    */}
                       
          
        </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;