import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ConnectPop_icon_1 from '../assets/images/Dashboard/petrawallet.jpg';
import ConnectPop_icon_2 from '../assets/images/Dashboard/martian2.png';
import Coinbaseicon from '../assets/images/HomePage/coinbase-icon.svg';
import ConnectPop_logo from '../assets/images/Dashboard/ConnectPop_logo.svg';
import pontem from '../assets/images/HomePage/pontem.jpg';
import avalanchewalletLogo from '../assets/images/HomePage/avalanchewallet.png';
import trustwalletLogo from '../assets/images/HomePage/trust-wallet-logo.png';
import { SelectOption } from './Common/SelectOption';
import { useState, useEffect } from "react";
import { AptosClient, Types } from 'aptos';
import { toast } from 'react-toastify';
import MetaMaskIcon from '../assets/images/HomePage/metamask-icon.svg';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';


// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import Web3 from 'web3';
// import {AvalancheWalletSDK} from '@avalabs/avalanche-wallet-sdk';


import { InjectedConnector } from 'wagmi/connectors/injected'





const ConnectPop = ({ open, handleclose,ConnectClose}) => {
    const [show, setShow] = React.useState(false);

    const [open1, setOpen1] = React.useState(false);
    const [name, setname] = React.useState('');
    const [img, setimg] = React.useState();
    const handleShow = () => setShow(true);


    const handleOpen1 = (name, img) => { setname(name); setimg(img); setOpen1(true) };
    const handleClose1 = () => setOpen1(false);

    const [address, setAddress] = useState();
    // const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
    // const client1 = new AptosClient('')
    const [modules, setModules] = useState(Types.$MoveModuleBytecode);
    // console.log("modules setModules", modules);
    const [resources, setResources] = useState(Types.$MoveResource);
    console.log("module resources", resources);
    const [datas, setdatas] = useState([]);
    const [petraw, setpetraw] = useState(false);
    const [martianw, setmartianw] = useState(false);
    const [pontemw, setpontemw] = useState(false);
    console.log("data", petraw,martianw);

    // useEffect(() => {
    //     installcheck()
    // }, [])

    const installcheck = async()=>{
        try{
            const isPetraInstalled = window.aptos
            if('aptos' in window){
                setpetraw(true);
            }
            if ("martian" in window){
                setmartianw(true)
            }
            if (window.pontem){
                setpontemw(true)
            }
        }catch(err){

        }

    }
    const getAptosWallet = () => {
        const isPetraInstalled = window.aptos
        if ('aptos' in window) {
            return window.aptos;
        } else {
            window.open('https://petra.app/', `_blank`);
        }
    }

    // const wallet = getAptosWallet();
    // const connect = async () => {
    //     const wallet = getAptosWallet();
    //     try {
    //         // const network = await wallet.network();
    //         console.log("network",wallet);
    //         const response = await wallet.connect();
    //         console.log(response); // { address: string, address: string }

    //         const account = await wallet.account();
    //         setAddress(account.address);
    //         handleOpen1('Petrawallet', ConnectPop_icon_1);
    //         localStorage.setItem("walletAddress", account.address);
    //         localStorage.setItem("wallet", "Petra");
           
    //         console.log(account); // { address: string, address: string }
    //         window.location.reload(false);
    //         const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
    //         console.log(client.getAccountModules(account.address).then(setModules));
    //         // give pool address
    //         const sample = await client.getAccountResources("0x99022357deb3930e8abec121878ea94e35ccf35cfaacd8f748ab50b28b305589").then(setResources);
    //         //  await client.getAccountResources("0x298985bd84a66d96bfd31b2baa491109ceb1421717222078cc34dae91e86fbe6");
    //         console.log("one", resources);
    //         setdatas(resources);

    //         resources.map(async (r) => {
    //             if (r.type ===
    //                 "0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::pool::LiquidisedAsset<0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::TestCoinsV1::USDT>") {
    //                 console.log("liability value", r.data.liability);
    //                 localStorage.setItem("liabilityAmount", r.data.liability);
    //             }
    //         });
    //         resources.map(async (r) => {
    //             if (r.type === "0x1::coin::CoinStore<0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::TestCoinsV1::USDT>") {
    //                 console.log("deposit value", r.data.coin.value);
    //                 let depositValue = r.data.coin.value / 100000000;
    //                 console.log("deposit value", depositValue);
    //                 localStorage.setItem("depositAmount", depositValue);

    //             }
    //         });

           
    //     } catch (error) {
    //         // { code: 4001, message: "User rejected the request."}
    //     }
    // }

    const connect = async () => {
        if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask is installed!");
            
            await ConnectWallet();
          } else {
            console.log("MetaMask is not installed.");
            window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '_blank','noreferrer');
          }
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    const isCoinbaseInstalled = async () => {
        if (typeof window.ethereum !== "undefined") {
            console.log("Coinbase is installed!");
            
      
            const APP_NAME = 'Coinbase';
            const APP_LOGO_URL = 'https://example.com/logo.png';
            const DEFAULT_ETH_JSONRPC_URL =  'https://chain-proxy.wallet.coinbase.com?targetName=avalanche-fuji';
            const DEFAULT_CHAIN_ID = 43113;
      
            const coinbaseWallet = new CoinbaseWalletSDK({
                  appName: APP_NAME,
                  appLogoUrl: APP_LOGO_URL,
                  darkMode: false
                });
            
                // Initialize a Web3 Provider object
                const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID);
                // const web3 = new Web3(ethereum);
  
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
        
                console.log(`User's address is ${account}`);
        // setUserAddress(userAddress);
        // web3.eth.defaultAccount = account;
        
          localStorage.setItem("walletAddress", accounts[0]);
          console.log("Coinbase is not Coinbase.");
          localStorage.setItem("walletName","Coinbase");
          console.log("account", account);
          await sleep(3000);
          window.location.reload();
          
          } else {
            console.log("Coinbase is not installed.");
            window.open('https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad', '_blank','noreferrer');
            
          }
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.Coinbase);
    };

    async function ConnectWallet() {
        // const { activate, chainId } = useWeb3React();
          const injectedConnector = new InjectedConnector({ supportedChainIds: [43113] });
          // activate(injectedConnector);
          // <><Header active = {active}/></>
          // <AvatarDropDown deactivate = {deactivate} />
          console.log("injectedConnector", injectedConnector);
          const chainId = await window.ethereum.request({ method: 'eth_requestAccounts' });
              console.log(chainId);
              if(chainId!==0xa869)
              {  await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId:'0xa869' }],
                });
              }
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((err) => {
              if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to Wallet.');
              } else {
                console.error(err);
              }
            });
          const account = accounts[0];
          localStorage.setItem("walletName","Metamask");
          localStorage.setItem("walletAddress", accounts[0]);
          console.log("account", account);
          await sleep(3000);
          window.location.reload();
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    // const reload = () => {
    //     sessionStorage.setItem("reloading", "true");
    //     window.location.reload(false); 
    // };
    
    //     window.onload = () => {
    //         let reloading = sessionStorage.getItem("reloading");
    //         if (reloading) {
    //             sessionStorage.removeItem("reloading");
    //             popShow();
    //         }
    //     }
    //     const popShow = async () => {
    //         handleShow();
    //     }
    const disconnect = async () => {
        if(localStorage.getItem("walletName")==="Coinbase")
        {const APP_NAME = 'Coinbase';
        const APP_LOGO_URL = 'https://example.com/logo.png';
        const DEFAULT_ETH_JSONRPC_URL =  'https://base-goerli.public.blastapi.io';
        const DEFAULT_CHAIN_ID = 84531;
        
              const coinbaseWallet = new CoinbaseWalletSDK({
                    appName: APP_NAME,
                    appLogoUrl: APP_LOGO_URL,
                    darkMode: false
                  });
                  coinbaseWallet.disconnect();
                }
        
        localStorage.setItem("walletAddress", "");
        localStorage.setItem("walletName","");
        window.location.reload();
        // const wallet = getAptosWallet();
        // await wallet.disconnect();
        localStorage.setItem("walletAddress", "");
    }
    const getProvider = () => {
        const isMartianWalletInstalled = window.aptos
        if ("martian" in window) {
          return(window.martian);
        } else{
        window.open("https://www.martianwallet.xyz/", "_blank");
    }}
      const connectwallet =async()=>{
        const get = getProvider();
        try{
            // const response1 = await  get.connect();
            // console.log(response1);

            // const account = await get.account();
            // setAddress(account.address);
            const network = await window.martian.network();
console.log("network",network);
if(network === "Testnet"){
    let response = await window.martian.connect();
    localStorage.setItem("walletAddress",response.address);  
 
    handleOpen1('Martainwallet', ConnectPop_icon_2)
    window.location.reload(false);  
}
else{
    toast.error("Try to connect Testnet");
}
            
            // localStorage.setItem("AWalletAddress",response.address);
           
            localStorage.setItem("wallet", "Martian");
            // console.log(account);
            // handleOpen1('Martainwallet', ConnectPop_icon_2)
            // window.location.reload(false);
            const client = new AptosClient('')
           
        // const isMartianWalletInstalled = window.martian
        // console.log("Is",isMartianWalletInstalled)
        // const get = getProvider();
        // console.log("get",get)
        
        
        
         const client1 = new AptosClient('https://www.martianwallet.xyz/", "_blank');
        // 
        // console.log(client.getAccountModules(account.address).then(setModules));
        // const sample = await client1.getAccountResources("0x99022357deb3930e8abec121878ea94e35ccf35cfaacd8f748ab50b28b305589").then(setResources);
        // console.log(response); 
        // setdatas(resources);
        // resources.map(async (r) => {
        //     if (r.type ===
        //         "0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::pool::LiquidisedAsset<0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::TestCoinsV1::USDT>") {
        //         console.log("liability value", r.data.liability);
        //         localStorage.setItem("liabilityAmount", r.data.liability);
        //     }
        // });
        // resources.map(async (r) => {
        //     if (r.type === "0x1::coin::CoinStore<0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::TestCoinsV1::USDT>") {
        //         console.log("deposit value", r.data.coin.value);
        //         let depositValue = r.data.coin.value / 100000000;
        //         console.log("deposit value", depositValue);
        //         localStorage.setItem("depositAmount", depositValue);

        //     }
        // });


      }catch (error) {

      }
      }
      const disconn=async()=>{
        // localStorage.setItem('AWalletAddress',"")
        await window.martian.disconnect();
        const network = await window.martian.network();
        console.log(network);
      }
      const getpontemprov = async()=>{
        const isMartianWalletInstalled = window.aptos
        if (window.pontem) {
          return(window.martian);
        } else{
            window.open("https://chrome.google.com/webstore/detail/pontem-aptos-wallet/phkbamefinggmakgklpkljjmgibohnba", "_blank")
        }
      }
      const connectwalletpontem =async()=>{

        
        const get = await getpontemprov();
        try{
            // const response1 = await  get.connect();
            // console.log(response1);

            // const account = await get.account();
            // setAddress(account.address);
//             const network = await window.pontem.network();
// console.log("network",network);
// if(network === "Testnet"){
    let response = await window.pontem.connect();
    console.log("network",response);
    localStorage.setItem("walletAddress",response.address);  
 
    handleOpen1('Pontem Wallet', pontem)
    window.location.reload(false);  
// }
// else{
//     toast.error("Try to connect Testnet");
// }
            
            // localStorage.setItem("AWalletAddress",response.address);
           
            localStorage.setItem("wallet", "pontem");
            // console.log(account);
            // handleOpen1('Martainwallet', ConnectPop_icon_2)
            // window.location.reload(false);
            const client = new AptosClient('')
           
        // const isMartianWalletInstalled = window.martian
        // console.log("Is",isMartianWalletInstalled)
        // const get = getProvider();
        // console.log("get",get)
        
        
        
         const client1 = new AptosClient('https://www.martianwallet.xyz/", "_blank');
        // 
        // console.log(client.getAccountModules(account.address).then(setModules));
        // const sample = await client1.getAccountResources("0x99022357deb3930e8abec121878ea94e35ccf35cfaacd8f748ab50b28b305589").then(setResources);
        // console.log(response); 
        // setdatas(resources);
        // resources.map(async (r) => {
        //     if (r.type ===
        //         "0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::pool::LiquidisedAsset<0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::TestCoinsV1::USDT>") {
        //         console.log("liability value", r.data.liability);
        //         localStorage.setItem("liabilityAmount", r.data.liability);
        //     }
        // });
        // resources.map(async (r) => {
        //     if (r.type === "0x1::coin::CoinStore<0xe0a3e32c696f4a2a915418821d061db73cf8a473850facc82295aa38bbaa7e28::TestCoinsV1::USDT>") {
        //         console.log("deposit value", r.data.coin.value);
        //         let depositValue = r.data.coin.value / 100000000;
        //         console.log("deposit value", depositValue);
        //         localStorage.setItem("depositAmount", depositValue);

        //     }
        // });


      }catch (error) {

      }
      }
    // const getProvider = () => {
    //     if ("martian" in window) {
    //       return(window.martian);
    //     }
    //     window.open("https://www.martianwallet.xyz/", "_blank");
    //   };
    //   const connectwallet =async()=>{
    //     const isMartianWalletInstalled = window.martian
    //     console.log("Is",isMartianWalletInstalled)
    //     const get = getProvider();
    //     console.log("get",get)
    //     let response = await window.martian.connect();
    //     localStorage.setItem("AWalletAddress",response.address)
    //     console.log(response); // { address: string, address: string }
    //     // window.location.reload(false)
    //     }

    return (
        <>
         {localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " ||  localStorage.getItem("walletAddress") === '' || localStorage.getItem("walletAddress") === undefined ? 
         (<>
            <div>
                <Modal
                    open={open}
                    onClose={handleclose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='connect_pop_block'
                >
                    <Box className='modal_Box_main'>
                        <div id="modal-modal-title" className="modal_Box responsive_pop">
                            <div className='ConnectPop_main'>
                                <div className='ConnectPop_items_block'>
                                    <div className='ConnectPop_Close_btn'>
                                    {/* <div className='ConnectPop_Close_btn'> */}
                                    {/* <a href="#0" onClick={ConnectClose}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                                            <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                                        </svg>
                                    </a> */}
                                {/* </div> */}
                                        <a href="#0" onClick={handleclose}className="sasa" >
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                                                <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='ConnectPop_logo'>
                                        <img src={ConnectPop_logo} alt="ConnectPop_logo" />
                                    </div>
                                    <ul className='ConnectPop_items'>
                                        <li>
                                            {/* <a href="#0" onClick={() => handleOpen1('MetaMask', ConnectPop_icon_1)}>
                                                <span>MetaMask</span>
                                                <img src={ConnectPop_icon_1} alt="ConnectPop_icon" />
                                            </a> */}
                                            <a href="#0" onClick={() => connect()}>
                                                 <p>
                                                 <img src={MetaMaskIcon} width="30" height="30" alt="ConnectPop_icon" />
                                                    <span>MetaMask </span>
                                                </p>
                                                {/* {petraw?(<>
                                                    <p className='cm_install' onClick={()=>window.open('https://petra.app/', `_blank`)}>Installed</p>
                                                </>):(<>
                                                    <p className='cm_install'>Install</p>
                                                </>)} */}
                                               
                                                
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" onClick={() => isCoinbaseInstalled()}>
                                                <p>
                                                    <img src={Coinbaseicon} width="30" height="30" alt="ConnectPop_icon" />
                                                    <span>Coinbase Wallet</span>
                                                </p>
                                                {/* {martianw?(<>
                                                    <p className='cm_install'>Installed</p>
                                                </>):(<>
                                                    <p className='cm_install'onClick={()=>window.open("https://www.martianwallet.xyz/", "_blank")}>Install</p>
                                                </>)} */}
                                                {/* <p className='cm_install'>Installed</p>  */}
                                                                                           </a>
                                        </li>
                                        <li>
                                            <a href="#0" onClick={() => connectwalletpontem()}>
                                                <p>
                                                    <img src={trustwalletLogo} width="30" height="30" alt="ConnectPop_icon" />
                                                    <span>Trust Wallet</span>
                                                </p>
                                                {/* {pontemw?(<>
                                                    <p className='cm_install'>Installed</p>
                                                </>):(<>
                                                    <p className='cm_install'onClick={()=>window.open("https://chrome.google.com/webstore/detail/pontem-aptos-wallet/phkbamefinggmakgklpkljjmgibohnba", "_blank")}>Install</p>
                                                </>)} */}
                                                {/* <p className='cm_install'>Installed</p>  */}
                                                                                           </a>
                                        </li>

                                        <li>
                                            <a href="#0" onClick={() => connectwalletpontem()}>
                                                <p>
                                                    <img src={avalanchewalletLogo} width="30" height="30" alt="ConnectPop_icon" />
                                                    <span>Avalanche Wallet</span>
                                                   
                                                </p>
                                                {/* {pontemw?(<>
                                                    <p className='cm_install'>Installed</p>
                                                </>):(<>
                                                    <p className='cm_install'onClick={()=>window.open("https://chrome.google.com/webstore/detail/pontem-aptos-wallet/phkbamefinggmakgklpkljjmgibohnba", "_blank")}>Install</p>
                                                </>)} */}
                                                {/* <p className='cm_install'>Installed</p>  */}
                                                                                           </a>
                                        </li>
                                        <w3m-button />
                                        {/* <li>
                                            <a href="#0" onClick={() => handleOpen1('Coinbase Wallet', ConnectPop_icon_3)}>
                                                <span>Coinbase Wallet</span>
                                                <img src={ConnectPop_icon_3} alt="ConnectPop_icon" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
         </>):
         (<>
            {/* <SelectOption open1={!open1} handleClose1={!handleClose1} MetaMask={name} ConnectPop_icon={img}  address={address} /> */}

         </>)}
            
            <SelectOption open1={open1} handleClose1={handleClose1} MetaMask={name} ConnectPop_icon={img}  address={address} />
        </>
    );
}

export default ConnectPop;
