import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../toast-style-override.css";
import './TokenMint.css';
import User from '../assets/images/User.png';
import { updateProfile, getProfile, tokenMint, getTokenMintData, getTokenMintDataFromaddress, getTokenMintDataLength, getTokenMintDataFromAddressLength } from '../abi/firebasecode';
import firebase from 'firebase/app';
import ButtonLoad from 'react-bootstrap-button-loader';
import 'firebase/storage';

import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignatureContext } from '../SignatureContext';
import { SignMessageComponent } from '../abi/CommonSolFunctions';
import { Mint_Contract_ABI, Mint_Contract_Bytecode } from '../abi/abi';
import { ethers } from 'ethers';
import PageFilter1 from '../DashboardComponent/Common/PageFilterforMint';
import { Button, Col, Row } from 'react-bootstrap';
import DutchAuctionCard from './LaunchpadCards/DutchAuctionCard';
import MintCard from './LaunchpadCards/MintCard';

const Profile = () => {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { signature, setSignature } = useContext(SignatureContext);
    const [username, setUsername] = useState('');
    const [tokenname, setTokenname] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [tokenSupply, setTokenSupply] = useState('');
    const [treasuryaddress, setTreasuryaddress] = useState('');

    const [profileImage, setProfileImage] = useState(User);
    const [edit, setEdit] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    let navigate = useNavigate();
    const[loader, setLoader] = useState(false);
    const[fromaddress,setfromaddress] = useState([])
    const[Count, setCount] = useState("")
    console.log("fromaddress",fromaddress)

    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 6;
    const [jokerTxLength, setJokerTxLength] = useState(0);

    const { walletProvider } = useWeb3ModalProvider();

    useEffect(() => {
        async function fetchProfile() {
            try {
                const walletAddress = localStorage.getItem("walletAddress");
                const profile = await getProfile(walletAddress);
                if (profile) {
                    setUsername(profile.username);
                    setProfileImage(profile.image);
                }
                let data = await getTokenMintData(1,6);
                setCount(await getTokenMintDataLength())
                setfromaddress(data)
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
        fetchProfile();
    }, [isConnected, address]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        console.log("File", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                console.log("reader.result", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const resetState = async() =>{
        setTokenname("");
        setTokenSymbol("");
        setTokenSupply("");
        setTreasuryaddress("")
    }

    const toastcheck = async () => {
        setLoader(true)
       
        if(localStorage.getItem("walletAddress") === null || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){                
            setLoader(false);
            toast.error(`Your are not connected the wallet`);
        }
        else{
            if(treasuryaddress && tokenname && tokenSupply && tokenSymbol ){
                try{
                    const walletAddress = localStorage.getItem("walletAddress");
                    const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
                    const signer =  ethersProvider.getSigner()
                    const contractFactory = new ethers.ContractFactory(
                        Mint_Contract_ABI,
                        Mint_Contract_Bytecode,
                        signer
                    );
                                // Deploy the contract
                const contract = await contractFactory.deploy(/* constructor arguments */);
                // Wait for the contract to be mined and obtain the deployed contract instance
                const deployedContract = await contract.deployed();
                console.log('Contract deployed at address:',deployedContract,contract);
                // Fetch the deployed contract address
                const contractAddress = deployedContract.address;
                // Define the amount of ETH to send (in wei)
                const ethAmount = "100000000000000";  // 0.0001 ETH in wei
                // Call the initialize function with the specified arguments and send ETH
                const transaction = await deployedContract.initialize(
                    treasuryaddress,
                    tokenname,
                    tokenSymbol,
                    parseFloat(tokenSupply),
                    {
                        value: ethAmount  // Amount of ETH to send with the transaction
                    }
                );
                // Wait for the transaction to be mined
                await transaction.wait();
                // Log the transaction hash
                console.log("Transaction Hash:", transaction.hash);
                    // Contract deployed successfully
                    console.log('Contract deployed at address:', contract.address);
    
                    let contaddre ="";
                    let id = "https://sepolia.basescan.org/tx/" + transaction.hash;
                    await tokenMint(tokenname,tokenSymbol,tokenSupply,treasuryaddress,contract.address,walletAddress, profileImage,username);
                    toast.success(toastDiv(id,"Transaction Successful"));
                    setLoader(false);
                   
                    fetchthedbvalue1();
                    await resetState();
                }catch(error){
                    console.error(error);
                    if(error.message){
                        toast.error(error.message.toString());
                    }else{
                        toast.error(error.reason.toString());
                    }
                    
                  
                    setLoader(false)
                }
            }
            else{
         
                toast.error("Enter all the required values");
                setLoader(false);
            }
            
        }
    };

    // const toastcheck = async() =>{
    //     toast.success("sucess")
    // }

    const toastDiv = (txId,type) =>
    (
         <div>
           <p style={{color:'#FFFFFF'}}> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
    </svg></a></p> 
        </div>
    );

    const logOut = () => {
        setSignature('');
        navigate("/");
    }

    // const login = async () => {
    //     awaSignMessageComponent
    // }
  
    const [bg1,setbg1] = useState('#29abe2');
    const [bg2,setbg2] = useState('transparent');
    const [itemname,setitemname] = useState("overall")

  const handleClick = async(item) => {
    setCurrentPage(1);
    if(item === 'Overall TBS'){
        setitemname("overall")
        setbg1('#29abe2');
        setbg2('transparent');
        
        fetchthedbvalue1();
    }
    else{
        setitemname("tbs")
        setbg2('#29abe2');
        setbg1('transparent');
        fetchthedbvalue();
    }
     // Call your existing function
  };
  const fetchthedbvalue1 = async() =>{
    let data = await getTokenMintData(1,transactionsPerPage);
    let count = await getTokenMintDataLength();
        setfromaddress(data)
        setCount(count)
 }

    const fetchthedbvalue = async() =>{
       let data = await  getTokenMintDataFromaddress(1,transactionsPerPage,address);
       let count = await getTokenMintDataFromAddressLength(address);
       setfromaddress(data)
       setCount(count)
    }

    const pagination = async(start) =>{
        if(itemname === "overall"){
            setCurrentPage(start)
            let data = await getTokenMintData(start,transactionsPerPage);
            console.log("datavalue",data)
            setfromaddress(data)
        }
        else{
            setCurrentPage(start)
            let data = await  getTokenMintDataFromaddress(start,transactionsPerPage,address);
            setfromaddress(data)
        }

    }

    

    return (
        <>
            <ToastContainer position='bottom-right' draggable={false} transition={Zoom} autoClose={4000} closeOnClick={false} />
            <div className='Dashboard_main_wrapper' style={{minHeight: '20vh'}}>
            
               
            </div>
            
            {/* <div class="box-outline mt-4 d-flex justify-content-center" style={{paddingLeft: '160px'}}> */}
    
                <div className='page_filter_block  mt-4'>
               
               <ul className='page_filter_Ul'>
               <li>
        <NavLink  onClick={() => handleClick('Overall TBS')} 
          style={{backgroundColor:bg1}} >
          Overall TBS
        </NavLink >
      </li>
      <li>
        <NavLink onClick={() => handleClick('My TBS')} 
          style={{backgroundColor:bg2}}        >
          My TBS
        </NavLink>
      </li>
                   
               </ul>
               {/* <SettingsPop SettingsClose={SettingsClose} Settings={Settings} SettingsOpen={SettingsOpen}/> */}
           {/* </div> */}
               
            </div>
           
            <div className='Dashboard_main_wrapper'>
            <Row className='justify-content-center'>
                {fromaddress[0] && (<>
                {fromaddress.map((r,i)=>{
                    return(<>
                     <Col md="auto" style={{maxWidth: '380px', width: '100%',marginBottom:'10px'}}>
                <MintCard  balanceOfTokens={100} imgsrc={r}/>
                
            </Col></>)
                   
                })}
                    
            </>)
               
            }
            
            <div className="d-flex justify-content-center"> {/* Center align the pagination */}
    <ul className="paginate list-unstyled d-flex align-items-center"> {/* Use flexbox to align items vertically centered */}
        <li className="mr-2"> {/* Margin on both sides of the button */}
            <Button variant="link" disabled={currentPage === 1} onClick={() => pagination(currentPage - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Button>
        </li>&nbsp;&nbsp;
        <li className=""  >
            <a className="active cursor-pointer" style={{ cursor: 'pointer','display': 'block','border':'1px solid white' ,'align-content':'center','textAlign':'center'}}>
                {currentPage}
            </a>
        </li>
        <li className="">
            <Button variant="link" disabled={currentPage >= Math.ceil(Count / transactionsPerPage)} onClick={() => pagination(currentPage + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </Button>
        </li>
    </ul>
</div> 
            
            {/* <Col md="auto" style={{maxWidth: '480px', width: '100%'}}>
                <PreSaleCard balanceOfTokens={balanceOfTokens}/>
            </Col> */}
            </Row>
            </div>
       
          
          



        </>
    );
}

export default Profile;
