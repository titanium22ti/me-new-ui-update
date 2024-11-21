import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import './DashboardCss/Dashboard.css';
import Dashboard from './DashboardComponent/Dashboard';
import SwapPage from '../src/DashboardPage/SwapPage';
import PoolPage from '../src/DashboardPage/PoolPage';
import VeMercuryPage from '../src/DashboardPage/VeMercuryPage';
import FaucetPage from '../src/DashboardPage/FaucetPage';
import Sidebar from './DashboardComponent/Sidebar';
import Header from './DashboardComponent/Header';
import Launchpad from '../src/DashboardPage/Launchpad';
import AirDrop from '../src/DashboardPage/AirdropPage';
import Wallet from './DashboardComponent/wallet';
import SettingsPage from '../src/DashboardPage/SettingsPage';
import Profile from './DashboardPage/Profile';
import TokenMint from './DashboardPage/TokenMint';
import DashboardFooter from './DashboardComponent/DashboardFooter';
import Listing from './DashboardPage/TokenMintLists';

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { BLACKTokenABI, BLACKTokenAddress, BurnVaultAddress, BurnVaultABI, USDCAddress } from './abi/abi';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react';
import { ProfileProvider, SignatureProvider } from './SignatureContext';

function App() {

  const [totalSupply, setTotalSupply] = useState(0.00);
  const [totalBurned, setTotalBurned] = useState(0.00);
  const [balanceOfTokens, setBalanceOfTokens] = useState(0.00);

  const [balances, setBalances] = useState({
    me: 0.00,
    eth: 0.00,
    usdc: 0.00
  });
  
  return (
    <div className='main_wrapper' style={{backgroundColor: '#040718'}}>
      <ProfileProvider>
      <SignatureProvider>
     <Header gbalances={balances} balanceOfTokens={balanceOfTokens}/>
     <Sidebar/>
      <Routes>
        {/* <Route index path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Dashboard balanceOfTokens={balanceOfTokens} totalSupply={totalSupply} totalBurn={totalBurned}/>} /> 

        <Route path="/dashboard" element={<Dashboard balanceOfTokens={balanceOfTokens} totalSupply={totalSupply} totalBurn={totalBurned}/>} /> 
        <Route path="/wallet" element={<Wallet gbalances={balances} balanceOfTokens={balanceOfTokens}/>} />
        {/* <Route path="/swap" element={<SwapPage balanceOfTokens={balanceOfTokens}/>} /> */}
        {/* <Route path="/pools" element={<PoolPage balanceOfTokens={balanceOfTokens}/>} /> */}
        {/* <Route path="/ME" element={<VeMercuryPage balanceOfTokens={balanceOfTokens}/>} /> */}
        {/* <Route path="/faucet" element={<FaucetPage gbalances={balances} balanceOfTokens={balanceOfTokens}/>} />  */}
        <Route path="/launchpad" element={<Launchpad balanceOfTokens={balanceOfTokens}/>} /> 
        {/* <Route index path="/port3reward" element={<AirDrop balanceOfTokens={balanceOfTokens}/>} />  */}
        {/* <Route index path="/profile" element={<Profile balanceOfTokens={balanceOfTokens}/>} />  */}
        {/* <Route index path="/mint" element={<TokenMint balanceOfTokens={balanceOfTokens}/>} />  */}
        {/* <Route index path="/list" element={<Listing balanceOfTokens={balanceOfTokens}/>} />  */}
        {/* <Route path="/settingspage" element={<SettingsPage />} /> */}
      </Routes>
     <DashboardFooter />
     </SignatureProvider>
     </ProfileProvider>
    </div>
  );
}

export default App;
