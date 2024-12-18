import * as React from 'react';
import { useState } from "react";
import { WebBotton } from '../../component/common/WebBotton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ConnectPop_logo from '../../assets/images/Dashboard/ConnectPop_logo.svg';
import ConnectPop_logo2 from '../../assets/images/Dashboard/martian2.png';
import pontem from '../../assets/images/HomePage/pontem.jpg';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { useDisconnect } from '@web3modal/ethers5/react';

import { AptosClient, Types } from 'aptos';
// const handleCopy = () =>{setCopyButton(false)};
// const handleCopied = () =>{setCopyButton(true)};

export const SelectOption = ({ open1, handleClose1, MetaMask, ConnectPop_icon, address }) => {
    const { disconnect } = useDisconnect()
    const handleCopied = () =>{
        setCopyButton(true)
        setTimeout(() => {
            setCopyButton(false);
          }, 3000); };
    const [copyButton, setCopyButton] = useState(false);
    const getAptosWallet = () => {
        const isPetraInstalled = window.aptos
        if ('aptos' in window) {
            return window.aptos;
        } else {
            window.open('https://petra.app/', `_blank`);
        }
    }
    const Disconnect = async () => {
        console.log("closed")
        handleClose1();
        disconnect();
       
            // if(localStorage.getItem("walletName")==="Coinbase")
            // {const APP_NAME = 'Coinbase';
            // const APP_LOGO_URL = 'https://example.com/logo.png';
            // const DEFAULT_ETH_JSONRPC_URL =  'https://base-goerli.public.blastapi.io';
            // const DEFAULT_CHAIN_ID = 84531;
            
            //       const coinbaseWallet = new CoinbaseWalletSDK({
            //             appName: APP_NAME,
            //             appLogoUrl: APP_LOGO_URL,
            //             darkMode: false
            //           });
            //           coinbaseWallet.disconnect();
            //         }
            
            // localStorage.setItem("walletAddress", "");
            // localStorage.setItem("walletName","");
            window.location.reload();
            // const wallet = getAptosWallet();
            // await wallet.disconnect();
            localStorage.setItem("walletAddress", "");
            
        
        window.location.reload(false);

        
    }
    const copyCheck = () =>
    {
        navigator.clipboard.writeText(localStorage.getItem("walletAddress"));
        handleCopied() 
    }
    return (
        <>
            <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal_Box_main'>
                    <Box className="modal_Box responsive_pop">
                        <div className='ConnectPop_main'>
                            <div className='ConnectPop_Close_btn'>
                                <a href="#0" onClick={handleClose1}>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                                        <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                                    </svg>
                                </a>
                            </div>
                            <div className='select_option_block'>
                                <div className='ConnectPop_logo'>
                                    <img src={ConnectPop_logo} alt="ConnectPop_logo" />
                                </div>
                                {/* <h4>0xd0D4...199c</h4> */}
                                {localStorage.getItem("walletAddress") ? (<>
                                    <h4>{(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length - 4, (localStorage.getItem("walletAddress")).length)}</h4>
                                </>) : (<></>)}
                                <ul className='Copy_Address_row'>
                                    <li>
                                        
                                    <span>{copyButton === true ?<a style={{cursor:"pointer"}} className='btn btn-secondary mb-2 mt-2' onClick={() => copyCheck()}>
                            {/* <svg class="dark-theme-pink me-2" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"></path></svg> */}
                            Address copied!
                        </a>:<a style={{cursor:"pointer"}} className='btn btn-secondary mb-2 mt-2' onClick={() => copyCheck()}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 2H7.4375C7.33437 2 7.25 2.08437 7.25 2.1875V3.5C7.25 3.60313 7.33437 3.6875 7.4375 3.6875H19.0625V19.8125C19.0625 19.9156 19.1469 20 19.25 20H20.5625C20.6656 20 20.75 19.9156 20.75 19.8125V2.75C20.75 2.33516 20.4148 2 20 2ZM17 5H5C4.58516 5 4.25 5.33516 4.25 5.75V18.1883C4.25 18.3875 4.32969 18.5773 4.47031 18.718L8.53203 22.7797C8.58359 22.8312 8.64219 22.8734 8.70547 22.9086V22.9531H8.80391C8.88594 22.9836 8.97266 23 9.06172 23H17C17.4148 23 17.75 22.6648 17.75 22.25V5.75C17.75 5.33516 17.4148 5 17 5ZM9.45312 21.5H9.44844L5.9375 17.9891V17.9844H9.45312V21.5Z" fill="#29ABE2" />
                                            </svg>
                            Copy Address
                        </a>}</span>
                      
                        
                                        {/* <a href="#0">
                                        
                                            <span>{copyButton === true ?<a style={{cursor:"pointer"}} className="btn btn-secondary mb-2 mt-2"  onClick={() => copyCheck()}>
                                                Copied!
                                               </a>:<a style={{cursor:"pointer"}}  className="btn btn-secondary mb-2 mt-2"  onClick={() => copyCheck()}>

                                             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 2H7.4375C7.33437 2 7.25 2.08437 7.25 2.1875V3.5C7.25 3.60313 7.33437 3.6875 7.4375 3.6875H19.0625V19.8125C19.0625 19.9156 19.1469 20 19.25 20H20.5625C20.6656 20 20.75 19.9156 20.75 19.8125V2.75C20.75 2.33516 20.4148 2 20 2ZM17 5H5C4.58516 5 4.25 5.33516 4.25 5.75V18.1883C4.25 18.3875 4.32969 18.5773 4.47031 18.718L8.53203 22.7797C8.58359 22.8312 8.64219 22.8734 8.70547 22.9086V22.9531H8.80391C8.88594 22.9836 8.97266 23 9.06172 23H17C17.4148 23 17.75 22.6648 17.75 22.25V5.75C17.75 5.33516 17.4148 5 17 5ZM9.45312 21.5H9.44844L5.9375 17.9891V17.9844H9.45312V21.5Z" fill="#29ABE2" />
                                            </svg>
                                        </a>}</span>
                                        </a> */}
                                    </li>
                                    <li>

                                    
                                    <a href={"https://sepolia.basescan.org/address/" + localStorage.getItem("walletAddress")}  target="_blank" rel="noreferer">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.25129 0.516581C5.69441 0.667208 4.15122 1.30025 2.94117 2.28468C2.58524 2.57425 2.02169 3.14228 1.73781 3.49768C1.02003 4.39624 0.431839 5.61168 0.187892 6.7003C0.0346974 7.3841 0 7.71651 0 8.50093C0 9.28535 0.0346974 9.61776 0.187892 10.3016C0.435628 11.4071 1.06291 12.689 1.78147 13.5584C2.53551 14.4706 3.42656 15.1754 4.47562 15.6897C5.27494 16.0815 5.99081 16.304 6.90256 16.4442C7.40705 16.5217 8.59014 16.5217 9.09463 16.4442C10.5858 16.2149 11.9417 15.6238 13.056 14.7171C13.9417 13.9965 14.6736 13.0717 15.1872 12.0239C15.5791 11.2248 15.8017 10.5089 15.9418 9.59696C16.0194 9.09247 16.0194 7.90938 15.9418 7.40489C15.8017 6.49314 15.5791 5.77728 15.1873 4.97795C14.7693 4.12498 14.3032 3.47607 13.6304 2.81009C12.9698 2.15622 12.3647 1.72654 11.5216 1.31262C10.7318 0.92487 10.0006 0.696206 9.12595 0.563397C8.73263 0.503679 7.66111 0.476904 7.25129 0.516581ZM12.7807 3.74882C12.6892 3.97542 9.76916 10.2171 9.74195 10.2443C9.69892 10.2873 3.23347 13.2974 3.21778 13.2817C3.19617 13.2601 6.2186 6.79268 6.26996 6.75062C6.32313 6.70709 12.7188 3.71748 12.7697 3.71237C12.7845 3.7109 12.7894 3.72731 12.7807 3.74882ZM7.68629 7.67849C7.4932 7.74663 7.2417 8.00348 7.17425 8.20146C7.05917 8.53919 7.13401 8.86171 7.38591 9.11361C7.74197 9.46967 8.25522 9.46967 8.61128 9.11361C8.96733 8.75756 8.96733 8.2443 8.61128 7.88824C8.3606 7.63756 8.02064 7.56046 7.68629 7.67849Z" fill="#29ABE2" />
                                            </svg>
                            <span>View on explorer</span>
                           
                        </a>

                                    {/* <h6 className='mb-0' >{(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length -4, (localStorage.getItem("walletAddress")).length)}</h6> */}
                                        {/* <a href={"https://explorer.aptoslabs.com/account/" + localStorage.getItem("walletAddress")+"?network=Testnet"}  target="_blank" rel="noreferer">
                                       <span>View on Explorer</span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.25129 0.516581C5.69441 0.667208 4.15122 1.30025 2.94117 2.28468C2.58524 2.57425 2.02169 3.14228 1.73781 3.49768C1.02003 4.39624 0.431839 5.61168 0.187892 6.7003C0.0346974 7.3841 0 7.71651 0 8.50093C0 9.28535 0.0346974 9.61776 0.187892 10.3016C0.435628 11.4071 1.06291 12.689 1.78147 13.5584C2.53551 14.4706 3.42656 15.1754 4.47562 15.6897C5.27494 16.0815 5.99081 16.304 6.90256 16.4442C7.40705 16.5217 8.59014 16.5217 9.09463 16.4442C10.5858 16.2149 11.9417 15.6238 13.056 14.7171C13.9417 13.9965 14.6736 13.0717 15.1872 12.0239C15.5791 11.2248 15.8017 10.5089 15.9418 9.59696C16.0194 9.09247 16.0194 7.90938 15.9418 7.40489C15.8017 6.49314 15.5791 5.77728 15.1873 4.97795C14.7693 4.12498 14.3032 3.47607 13.6304 2.81009C12.9698 2.15622 12.3647 1.72654 11.5216 1.31262C10.7318 0.92487 10.0006 0.696206 9.12595 0.563397C8.73263 0.503679 7.66111 0.476904 7.25129 0.516581ZM12.7807 3.74882C12.6892 3.97542 9.76916 10.2171 9.74195 10.2443C9.69892 10.2873 3.23347 13.2974 3.21778 13.2817C3.19617 13.2601 6.2186 6.79268 6.26996 6.75062C6.32313 6.70709 12.7188 3.71748 12.7697 3.71237C12.7845 3.7109 12.7894 3.72731 12.7807 3.74882ZM7.68629 7.67849C7.4932 7.74663 7.2417 8.00348 7.17425 8.20146C7.05917 8.53919 7.13401 8.86171 7.38591 9.11361C7.74197 9.46967 8.25522 9.46967 8.61128 9.11361C8.96733 8.75756 8.96733 8.2443 8.61128 7.88824C8.3606 7.63756 8.02064 7.56046 7.68629 7.67849Z" fill="#29ABE2" />
                                            </svg>
                                        </a> */}
                                    </li>
                                </ul>
                                <div className='disconnect_row'>
                                    <p>
                                        <span>Connected with {localStorage.getItem("@w3m/wallet_id")}  <img src={localStorage.getItem("@w3m/connected_wallet_image_url")} alt="ConnectPop_icon" /> </span>
                                       
                                        {/* {localStorage.getItem("wallet") === "Petra" ? (<>
                                            <img src={ConnectPop_icon} alt="ConnectPop_icon" />
                                        </>): localStorage.getItem("wallet") === "Martian" ? (<>
                                            <img src={ConnectPop_logo2} alt="ConnectPop_icon" />
                                        </>):(<>
                                            <img src={pontem} alt="ConnectPop_icon" />
                                        </>)
                                        }
                                       
                                        {localStorage.getItem("wallet")?localStorage.getItem("wallet"):""}wallet */}
                                    </p>
                                    <div  >
                                        <WebBotton WebBotton="Disconnect" link="#0" click={() => Disconnect()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </Modal>
        </>
    );
}