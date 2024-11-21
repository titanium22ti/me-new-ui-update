import React, { useContext, useEffect, useState } from 'react';
import ConnectPop from './ConnectPop';
import { Link, useLocation, NavLink } from "react-router-dom";
//import Logo from '../assets/images/Dashboard/Logo.svg';
import Logo from '../assets/images/Dashboard/sidebar_logo.svg';
import profile from '../assets/images/HomePage/pontem.jpg';
import ConnectPop_icon_2 from '../assets/images/Dashboard/martian2.png';
import { SelectOption } from './Common/SelectOption';
import ConnectPop_icon_1 from '../assets/images/Dashboard/petrawallet.jpg';
import avaxIcon from '../assets/images/HomePage/usd-coin-usdc-logo.png';
import mercurycoin from '../assets/images/Dashboard/MeCoin.png';
import SwapTokensPop from '../DashboardComponent/Common/SwapTokensPopheader';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import { WebBotton } from '../component/common/WebBotton';
import { aptosbalance, uservisits } from '../config';
import { Badge, Button, Dropdown } from 'react-bootstrap';
import { ethers } from 'ethers';
import { BLACKTokenABI, BLACKTokenAddress } from '../abi/abi';
import { useWeb3Modal } from '@web3modal/scaffold-react';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import "./Header.css";
import { getProfile } from '../abi/firebasecode';
import User from '../assets/images/User.png';
import { ProfileContext, SignatureContext } from '../SignatureContext';
import { ConnectButton } from '@mysten/wallet-kit';

const Header = ({gbalances, balanceOfTokens}) => {
    const { signature, setSignature } = useContext(SignatureContext);
    const { walletProvider } = useWeb3ModalProvider();
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    
   
 setTimeout(function(){
   
        var test_btn_hover = document.getElementById("test_btn_hover");

        if(test_btn_hover != null){
            test_btn_hover.addEventListener("mouseenter", (event) => {
                document.querySelector('.test_btn').classList.add('active');
            }, false);
            
            test_btn_hover.addEventListener("mouseleave", (event) => {
                document.querySelector('.test_btn').classList.remove('active');
            }, false);
        }

        var test1 = document.querySelectorAll(".cm_test_dropdown ul li");
        test1.forEach(element =>{
            var lispan = element.querySelector('p');
            lispan.addEventListener("click", (event) => {
                //document.querySelector(".test_btn > a").innerHTML = lispan.innerHTML;
                document.querySelector('.test_btn').classList.remove('active');
            }, false);
        });

    },1000);
    console.log("address",address,chainId,isConnected)
    const [opens, setOpen] = useState(false);
    const [clickbutton, setonclickbutton] = useState("");
    const handleOpen = () => setOpen(true);
    const [open4, setOpen4] = useState(false);
    const handleClose4 = () => setOpen4(false);
    // const handleOpen4 = () => setOpen4(true);
    const handleClose1 = () => setOpen(false);
    const handleclose = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleclose3 = () => setOpen3(false);


    const [name, setname] = React.useState('');
    const [img, setimg] = React.useState();
    const [addresss, setAddress] = useState();
    const [balance, setbalanc] = React.useState('');
    const [open2, setOpen2] = useState(false);
    const handleClose = () => setOpen(false);

    const handleClose2 = () => setOpen2(false);
    const handleOpen2 = () => setOpen2(true);
    const[BlackBalan,setBlackBalan] = useState("");

    const [names, setnames] = React.useState('');
    // const [profileImage, setProfileImage] = useState(User);
    const { profileImage,setProfileImage  } = useContext(ProfileContext);

    useEffect(() => {
        if(!localStorage.getItem("login")) {
            setSignature(false);
        }
        async function fetchProfile() {
            try {
                const walletAddress = localStorage.getItem("walletAddress");
                const profile = await getProfile(walletAddress);
                if (profile) {
                    setProfileImage(profile.image);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
        fetchProfile();
    }, [isConnected, address, signature]);
   
    const balacnce = async()=>{
        console.log("balanceWei",address);
        if(localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")   === "" || localStorage.getItem("walletAddress")   === " " ||  localStorage.getItem("walletAddress")  === '' || localStorage.getItem("walletAddress")  === undefined || localStorage.getItem("walletAddress")  === "undefined"){
            
        }
        else if(address  === null || address  === "" || address  === " " ||  address  === '' || address  === undefined || address  === "undefined")
        {}
        else{
            console.log("balanceWei inside",address);
            // const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
            // const signer = await ethersProvider.getSigner()
            // const balan = await ethersProvider.getBalance(address)
            // https://api-testnet.bscscan.com/api
            const response = await fetch(`https://base-sepolia.blockscout.com/api/v2/addresses/${address}`);
           
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            let balanceWei;
            // let balanceWei = ethers.utils.formatUnits(balan);
            // console.log("balanceWei",balanceWei)
            const data = await response.json();
            console.log("response",data);
            if (data.is_contract === false) {
              balanceWei = data.coin_balance ;
            } else {
              throw new Error('API response was not successful');
            }
            const url = "https://sepolia.base.org";
            const provider = new ethers.providers.JsonRpcProvider(url);
            const JOKERContract =  new ethers.Contract(BLACKTokenAddress,BLACKTokenABI,provider);
            let totalLpLiquidity =  ethers.utils.formatUnits(await JOKERContract.balanceOf(localStorage.getItem("walletAddress")),0);
            setBlackBalan(totalLpLiquidity);
          //   setEthBalance(parseFloat(balanceWei/1e18).toFixed(5))
          //         let balan = await aptosbalance(localStorage.getItem("walletAddress"));
                  console.log("balan",balanceWei)
                  setbalanc(balanceWei)
                  // await uservisits(localStorage.getItem("wallet"));
              await balanceOfTokens();
        }
   
    }
    useEffect(() => { balacnce() }, [address])
    const TokenData = [
        {
            id: "Devnet",
            text: "Devnet",
           
        },
        {
            id: "Testnet",
            text: "Testnet",
           
        },
        {
            id: "Mainnet",
            text: "Mainnet",
           
        }

    ]

    const OnSubmit = (e) => {
        handleClose();
        // settoken(e.currentTarget.text);

        // var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
        // for (let val of FilterData) {
        //     FilterData = val;
        // };
        // SetTovalue(FilterData);
        // console.log("tovalue",FilterData,e.currentTarget.id)
    };

    const OnSubmit2 = (e) => {
        handleClose2();
        // settoken(e.currentTarget.text);

        // var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
        // for (let val of FilterData) {
        //     FilterData = val;
        // };
        // SetTovalue(FilterData);
        // console.log("tovalue",FilterData,e.currentTarget.id)
    };

    const handleOpen1 = (name, img) => { setname(name); setimg(img); setOpen1(true) };

    const handleOpen3 = (name, img) => { setname(name); setimg(img); setOpen3(true) };

    const handleOpen4 = (name, img) => { setname(name); setimg(img); setOpen4(true) };

    const menuClick = () => {
        const doc = document.querySelector(".header_main_block");
        doc.classList.toggle("open_menu");
        document.documentElement.classList.toggle("cm_overflow");
    }
    // if (location.pathname === "/") {
    //     return null
    // } else {
        const setbutton = async (a) => {
            handleOpen();
            setonclickbutton(a)
        }

        const getAptosWallet = () => {
            if ('aptos' in window) {
              return window.aptos;
            } else {
              window.open('https://petra.app/', `_blank`);
            }
          }
          const getProvider = () => {
            if ("martian" in window) {
              return(window.martian);
            }
            window.open("https://www.martianwallet.xyz/", "_blank");
          };
        const closepopm= async()=>{
            handleOpen3('Petrawallet', ConnectPop_icon_1);
            // handleOpen1('Martainwallet',ConnectPop_icon_2)
            // const wallet = getAptosWallet();
            // await wallet.disconnect();
            // localStorage.setItem("walletAddress", "");
            // console.log("closed")
            // setOpen3(true)
            // handleClose1(true)
        }

        const openallwallets = async() =>{
            console.log("opneall",address,chainId,isConnected)
            // return <w3m-button />
        }

        const ChangeNetwork = async () => {
            try {
              await walletProvider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x14a34' }],
              });
            } catch (switchError) {
              if (switchError.code === 4902) {
                try {
                  await walletProvider.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: '0x14a34',
                        chainName: 'Base Sepolia Testnet',
                        rpcUrls: ['https://sepolia.base.org/'],
                        blockExplorerUrls: ['https://sepolia.basescan.org/'],
                        nativeCurrency: {
                            name: 'Base Sepolia ETH',
                            symbol: 'ETH',
                            decimals: 18,
                          },
                      },
                    ],
                  });
                } catch (addError) {
                  throw addError;
                }
              }
            }
          };

          const [message, setMessage] = useState('');

          const generateMessage = () => {
            const timestamp = new Date().toLocaleString(); // Get current timestamp
            return `Welcome to testnet.mecollateral.com, Please sign this message to login.\n\nTimestamp: ${timestamp}`;
          };
        
          const handleSignMessage = async () => {
            try {
              if (!isConnected) {
                throw new Error('Wallet not connected');
              }
        
              // Generate message with timestamp
              const messageToSign = generateMessage();
        
              // Create a provider and signer from walletProvider
              const provider = new ethers.providers.Web3Provider(walletProvider);
              const signer = provider.getSigner();
        
              // Sign the message
              const signedMessage = await signer.signMessage(messageToSign);
        
              // Set the signature in state
              setSignature(signedMessage);
              setMessage(messageToSign);
              localStorage.setItem("login", true);
            } catch (error) {
              console.error('Error signing message:', error.message);
              // Handle error
            }
          };
          
       
        return (
            <>
                <header className='header_main_block'>
                    <div className='header_block'>
                        <div className='header_row'>
                        <SwapTokensPop handleClose={handleClose2} TokenData={TokenData} OnSubmit={OnSubmit2} open={open2} />
                            <div className='mobli_logo'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className='header_buttons'>
                                {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_84)">
                                        <path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95V16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_84">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg> */}
                                 <div className='app_button' >
                                {/* <a href="#0" onClick={handleOpen}>{token?token:"Devnet"}</a> */}
                                <div className='hero_btn test_btn' id='test_btn_hover' >
                                    <a href="#0" >TestNet  &nbsp; <img src={mer_dai_bottem_arrow} alt="logo"></img></a>
                                    <div className='cm_test_dropdown'>
                                        <ul>
                                            <li>
                                                <p>
                                                    <span><a style={{color:'white',background:'none'}}>TestNet</a></span>
                                                    {/* <span className='test_ins'>Install </span> */}
                                                </p>
                                            </li>  
                                           <li>
                                                <p>
                                                 <span><a href='https://app.mecollateral.com/' style={{color:'white',background:'none'}}>MainNet</a></span>
                                                     {/* <span className='test_ins'><Badge>Upcoming</Badge></span>  */}
                                                </p>
                                            </li>
                                            {/* <li>
                                                <p>
                                                    <span><img src={ConnectPop_icon_2} alt="ConnectPop_icon" /> DevNet</span>
                                                    
                                                </p>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>                                {/* <WebBotton WebBotton="Swap" link="#0"  click={() => handleOpen()} /> */}
                                </div>
                                {/* <img src={mer_dai_bottem_arrow} alt="logo" /> */}
                                &nbsp; 
                                <div className='app_button'>
                                    <ConnectButton />
                                    {/* {localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " ||  localStorage.getItem("walletAddress") === '' || localStorage.getItem("walletAddress") === undefined ? (<>
                                        <a href="#0" 
                                        onClick={()=>openallwallets()}
                                        >Connect Wallet
                                            {/* <w3m-button /> 
                                            </a>
                                        {/* <button onClick={() => open()}>Open Connect Modal</button> */}
                                        {/* <w3m-button /> 
                                    </>):
                                    (<>
                                    {chainId === 84532 ?(<>
                                     {/* <w3m-button /> 
                                     <a href="#0" onClick={()=>closepopm()}>{(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length - 4, (localStorage.getItem("walletAddress")).length)}
                                        {/* <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                                        <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                                    </svg> 
                                    </a>
                                    &nbsp;
                                    <a href="#0" onClick={()=>balacnce()}><img src={avaxIcon} width={25} height={25}/> &nbsp;{gbalances.usdc?parseFloat(gbalances.usdc).toFixed(3):'0.00'}  </a>
                                    &nbsp;
                                    <a href="#0" ><img src={mercurycoin} width={25} height={25}/> &nbsp;{gbalances.me?parseFloat(gbalances.me).toFixed(3):'0.00'}  </a>
                                
                                    </>):(<>
                                        <a href="#0" 
                                        onClick={()=>ChangeNetwork()}
                                        > <span className="warning" style={{ color: 'orange' }}>&#9888;</span>
                                        &nbsp; Wrong Network - Click Here to Change
                                            {/* <w3m-button /> 
                                            </a>
                                     
                                    </>)}
                                               {/* <a href="#0" onClick={handleclose1}></a>  
                                    </>)} */}
                                    
{/*                              
                                <div className='btn btn-blue d-sm-none' onClick={handleclose1}>
                                <svg width="20" height="20" className='m-0' viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"></path></svg>
                            </div>
                             */}
                             {/* {isConnected ? <>
                                {signature ? <>
                                    <Link to="/profile" style={{background:'none',marginLeft:'4px'}}>
                                        {profileImage ? <img src={profileImage} alt="Profile" className="profile-image" /> : <img src={User} alt="Profile" className="profile-image" />}
                                    </Link>
                                </> : <>
                                    <Link className="profile-link" onClick={handleSignMessage} style={{marginLeft:'4px'}}>Log In</Link>
                                </>}
                             </> : <></>} */}
                                   
                                </div>
                               
                                <div className="menu_toggle_btn_1" onClick={menuClick}>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ConnectPop open={open4} handleclose={handleClose4} />
                    {/* <SelectOption open1={open1} handleClose1={handleClose1} MetaMask={name} ConnectPop_icon={img}  address={address} /> */}

                    <SelectOption open1={open3} handleClose1={handleclose3} MetaMask={name} ConnectPop_icon={img}  address={addresss} />

                </header>
            </>
            
        )
       

   
}

export default Header;