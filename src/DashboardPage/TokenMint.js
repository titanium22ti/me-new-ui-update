import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../toast-style-override.css";
import './TokenMint.css';
import User from '../assets/images/User.png';
import { updateProfile, getProfile, tokenMint, getTokenMintData, getTokenMintDataFromaddress } from '../abi/firebasecode';
import firebase from 'firebase/app';
import ButtonLoad from 'react-bootstrap-button-loader';
import 'firebase/storage';

import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { SignatureContext } from '../SignatureContext';
import { SignMessageComponent } from '../abi/CommonSolFunctions';
import { Mint_Contract_ABI, Mint_Contract_Bytecode } from '../abi/abi';
import { ethers } from 'ethers';
import PageFilter1 from '../DashboardComponent/Common/PageFilterforMint';
import { Col, Row } from 'react-bootstrap';
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
    const[Isprofile,setIsprofile] = useState(false);

    const [profileImage, setProfileImage] = useState(User);
    const [edit, setEdit] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    let navigate = useNavigate();
    const[loader, setLoader] = useState(false);
    const[fromaddress,setfromaddress] = useState([])
    console.log("fromaddress",fromaddress)

    const { walletProvider } = useWeb3ModalProvider();

    useEffect(() => {
        async function fetchProfile() {
            try {
                const walletAddress = localStorage.getItem("walletAddress");
                const profile = await getProfile(walletAddress);
                if (profile) {
                    setIsprofile(true)
                    setUsername(profile.username);
                    setProfileImage(profile.image);
                }
                else{
                    setIsprofile(false)
                }
                let data = await getTokenMintData(0,20);
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

  const handleClick = async(item) => {
    if(item === 'Overall TBS'){
        setbg1('#29abe2');
        setbg2('transparent');
        
        fetchthedbvalue1();
    }
    else{
        setbg2('#29abe2');
        setbg1('transparent');
        fetchthedbvalue();
    }
     // Call your existing function
  };
  const fetchthedbvalue1 = async() =>{
    let data = await getTokenMintData(0,20);
        setfromaddress(data)
 }

    const fetchthedbvalue = async() =>{
       let data = await  getTokenMintDataFromaddress(0,20,address);
       setfromaddress(data)
    }

    return (
        <>
            <ToastContainer position='bottom-right' draggable={false} transition={Zoom} autoClose={4000} closeOnClick={false} />
            <div className='Dashboard_main_wrapper' style={{minHeight: '100vh'}}>
            <div className='Pool_Page_main swap_page_main'>
               
            <div className='swap_tokens_main'>
                        <div className='box_main_border'>
                            <div className='trade_now_block'>
                {/* <div className='box_main_border_ov'> */}
                    {signature ? <>
                    {Isprofile ? (<>
                        <div className='trade_now_block_ov'>
                            <div className="mt-4 mb-4">
                                <h4>TBS Mint</h4>
                                {/* <button onClick={() => setEdit(false)}>Cancel</button> */}
                            </div>
                            <div className='profile_image_section'>
                                
                                <input
                                    type="file"
                                    id="profileImageUpload"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                    
                                />
                            </div>
                            <div className='profile_details_section'>
                        
                                <label htmlFor='username' style={{alignSelf:'start'}}>Token Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={tokenname}
                                    onChange={(e)=>setTokenname(e.target.value)}
                                    placeholder="Enter your token name"
                                />
                                <label htmlFor='username' style={{alignSelf:'start'}}>Token Symbol</label>
                                <input
                                    type="text"
                                    id="symbol"
                                    value={tokenSymbol}
                                    onChange={(e)=>setTokenSymbol(e.target.value)}
                                    placeholder="Enter your token symbol"
                                />
                                 <label htmlFor='username' style={{alignSelf:'start'}}>TotalSupply</label>
                                 <input
                                        type="text"
                                        id="supply"
                                        value={tokenSupply}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            // Allow only digits and filter out any non-integer values
                                            if (/^\d*$/.test(value)) {
                                                setTokenSupply(value);
                                            }
                                        }}
                                        placeholder="Enter Token TotalSupply"
                                    />
                                <label htmlFor='walletAddress' style={{alignSelf:'start'}}>Treasury Address</label>
                                <input
                                    
                                    type="text"
                                    id="treasuryAddress"
                                    value={treasuryaddress}
                                    onChange={(e)=>setTreasuryaddress(e.target.value)}
                                    placeholder="Enter your treasury address"
                                />
                                 <label htmlFor='walletAddress' style={{alignSelf:'start'}}>Wallet Address</label>
                                <input
                                    disabled
                                    type="text"
                                    id="walletAddress"
                                    value={localStorage.getItem("walletAddress")}
                                    placeholder="Enter your wallet address"
                                />
                              
                            </div>
                            <center>
                                <ButtonLoad loading={loader}  className='submit-button' onClick={toastcheck}>Mint</ButtonLoad>
                            </center>
                            
                        </div>
                        </>):(<>
                            <div className='trade_now_block_ov'>
                            <div className="profile-header-container">
                                <h5>To mint token please Create Profile:</h5>
                                <br/>
                                {/* <button className='submit-button' onClick={}>Log In</button> */}
                                <div className='app_button'>
                                <Link to='/profile' >Create Profile</Link>
                                </div>
                            </div>
                        </div>
                        </>)}
                       
                    </> :<>
                        <div className='trade_now_block_ov'>
                            <div >
                                <h4>To mint token please login</h4>
                                {/* <button className='submit-button' onClick={}>Log In</button> */}
                                <br/>
                                <div className='app_button'>
                                <SignMessageComponent />
                                </div>
                            </div>
                        </div>
                    </>}
                    </div>
                    </div>
                    </div>
                {/* </div> */}
                </div>
               
            </div>
            
            {/* <div class="box-outline mt-4 d-flex justify-content-center" style={{paddingLeft: '160px'}}> */}
        
          
          



        </>
    );
}

export default Profile;
