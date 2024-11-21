import { ethers } from "ethers";
import numeral from "numeral";
import { BLACKTokenABI, BLACKTokenAddress } from "./abi";
import { useContext } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { SignatureContext } from '../SignatureContext';
import { Link } from "react-router-dom";

const url = "https://base-sepolia-rpc.publicnode.com";
const provider = new ethers.providers.JsonRpcProvider(url);

export const NumberAbbreviation = ({ number }) => {
    const formattedNumber = numeral(number).format('0.00a');
    return <span>{formattedNumber.toUpperCase()}</span>;
};

export const getTimeLeftForJoker = async(userAddress) => {
  try {
      const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);

      let secondsleft = ethers.utils.formatUnits(await JOKERContract._secondsLeft(userAddress), 0);
      let secondsLeftInText = await convertEpochToDateTime(secondsleft);
      let timePercentage = (parseInt((secondsleft / 86400) * 100));

      return { secondsleft, secondsLeftInText, timePercentage };
  } catch (error) {
      console.error("Error fetching time left for joker:", error);
      return 0;
  }
};

export const convertEpochToDateTime = async(secondsLeft) => {
  const now = new Date(); // Current date and time
  const targetEpoch = now.getTime() + secondsLeft * 1000; // Calculate target epoch time

  const date = new Date(targetEpoch); // Convert target epoch time to Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const retrieveTxnByPage = async (address, transactionsPerPage, pageNumber) => {
  let JokerTransaction = await getTokenTransactions(BLACKTokenAddress, address, transactionsPerPage, pageNumber);
  return JokerTransaction.result;
};

export const getTokenTransactions = async(tokenContractAddress, walletAddress, limit, pageNumber) => {
  try {
      const apiKey = "EFI94DQAT8AX3RAWG998TS5S3725PXB226";

      const networkSepolia = 'api-sepolia.basescan.org';

      const url = `https://${networkSepolia}/api?module=account&action=tokentx&contractaddress=${tokenContractAddress}&address=${walletAddress}&startblock=0&endblock=999999999&sort=desc&apikey=${apiKey}&offset=${limit}&page=${pageNumber}`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return false;
      }
  } catch (error) {
      console.error("Error fetching token transactions:", error);
      return 0;
  }
};

//------------------------------Token Transactions Length fetch--------------------------------
export const getTokenTransactionsLength = async(tokenContractAddress, walletAddress) => {
  try {
      const apiKey = "EFI94DQAT8AX3RAWG998TS5S3725PXB226";

      const networkSepolia = 'api-sepolia.basescan.org';

      const url = `https://${networkSepolia}/api?module=account&action=tokentx&contractaddress=${tokenContractAddress}&address=${walletAddress}&startblock=0&endblock=999999999&sort=asc&apikey=${apiKey}`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data.result.length;
      } else {
        return false;
      }
  } catch (error) {
      console.error("Error fetching token transactions length:", error);
      return 0;
  }
};

export const convertEpochToTimeAgo = (epoch) => {
  const milliseconds = new Date().getTime() - epoch * 1000;
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

const generateMessage = () => {
  const timestamp = new Date().toLocaleString(); // Get current timestamp
  return `Welcome to testnet.mecollateral.com, Please sign this message to login.\n\nTimestamp: ${timestamp}`;
};

// React functional component that handles signing the message
export const SignMessageComponent = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { signature, setSignature } = useContext(SignatureContext);

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
      localStorage.setItem("login", true);
    } catch (error) {
      console.error('Error signing message:', error.message);
      // Handle error
    }
  };

  return (
    <Link onClick={handleSignMessage}>Log In</Link>
  );
};
