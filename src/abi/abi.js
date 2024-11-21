export const BurnVaultABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ME",
		"outputs": [
			{
				"internalType": "contract IBEP20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_block",
				"type": "uint256"
			}
		],
		"name": "_changeUnLockTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenAmount",
				"type": "uint256"
			}
		],
		"name": "getBTCValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBurnVaultBNBBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBurnVaultMEBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCirculatingSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "lock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxTxAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revenuewallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "secondsLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "senderBurnBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ME",
				"type": "address"
			}
		],
		"name": "setMEaddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_revenuewallet",
				"type": "address"
			}
		],
		"name": "setRevenuewallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lockPeriod",
				"type": "uint256"
			}
		],
		"name": "setlockPeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "setmaxTxAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "swap",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export const BLACKTokenABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_burnFee",
				"type": "uint256"
			}
		],
		"name": "BurnFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "__greyListAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "__flag",
				"type": "bool"
			}
		],
		"name": "GreyListUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "newStatus",
				"type": "bool"
			}
		],
		"name": "LiquidityEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_liquidityFee",
				"type": "uint256"
			}
		],
		"name": "LiquidityFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_maxLiquidityAmount",
				"type": "uint256"
			}
		],
		"name": "MaxLiquidityAmount",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "numTokensSellToAddToLiquidity",
				"type": "uint256"
			}
		],
		"name": "NumTokensSellToAddToLiquidity",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "SwapAndLiquifyEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "newStatus",
				"type": "bool"
			}
		],
		"name": "SwapEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_taxFee",
				"type": "uint256"
			}
		],
		"name": "TaxFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_treasuryFee",
				"type": "uint256"
			}
		],
		"name": "TreasuryFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newBurnVaultAddress",
				"type": "address"
			}
		],
		"name": "UpdateBurnVaultAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newStakingAddress",
				"type": "address"
			}
		],
		"name": "UpdateStakingAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newTreasuryAddress",
				"type": "address"
			}
		],
		"name": "UpdateTreasuryAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_target",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "LastSwapTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "deductTransferFee",
				"type": "bool"
			}
		],
		"name": "MeFromToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "SwapLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "SwapTrack",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDCAddress",
		"outputs": [
			{
				"internalType": "contract IBEP20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_allowances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_blocksSinceBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_block",
				"type": "uint256"
			}
		],
		"name": "_changeFreezeBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getBurnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getBurnVault",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getLiquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getSwapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getTaxFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getTreasuryFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getnumTokensSellToAddToLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_greyListAccount",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_isFrozen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_isrewardExcluded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_maxLiquidityAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_rOwned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_rewardExcluded",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_secondsLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "burnFee",
				"type": "uint128"
			}
		],
		"name": "_setBurnFeeExternal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_shutdown",
				"type": "bool"
			}
		],
		"name": "_setShutDown",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "taxFee",
				"type": "uint128"
			}
		],
		"name": "_setTaxFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teamWalletaddress",
				"type": "address"
			}
		],
		"name": "_setTeamWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_treasuryaddress",
				"type": "address"
			}
		],
		"name": "_setTreasuryAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "treasuryFee",
				"type": "uint128"
			}
		],
		"name": "_setTreasuryFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_tOwned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdcAmount",
				"type": "uint256"
			}
		],
		"name": "addLiquidityUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_StakingAddress",
				"type": "address"
			}
		],
		"name": "addStakingContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnVault",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "checkLiquidityValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "avaxValue",
				"type": "uint256"
			}
		],
		"name": "checkLpValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "checkSwapValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gAddress",
				"type": "address"
			}
		],
		"name": "getGreyList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isnew",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isrewardExcluded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launchpadAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "launchpadAddresses",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liquidityEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_StakingAddress",
				"type": "address"
			}
		],
		"name": "removeStakingContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "rewardexcludeAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			}
		],
		"name": "rewardexcludeAccountsMultiple",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "rewardincludeAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_burnVault",
				"type": "address"
			}
		],
		"name": "setBurnVault",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "gFlag",
				"type": "bool"
			}
		],
		"name": "setGreyList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "launchpad",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "allowed",
				"type": "bool"
			}
		],
		"name": "setLaunchpadAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setLiquidityEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "liquidityFee",
				"type": "uint128"
			}
		],
		"name": "setLiquidityFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "maxTxPercent",
				"type": "uint256"
			}
		],
		"name": "setMaxLiquidityAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setSwapAndLiquifyEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setSwapEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "USDC",
				"type": "address"
			}
		],
		"name": "setUSDCAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "uniswapv2",
				"type": "address"
			}
		],
		"name": "setUniswapV2PairAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_numTokensSellToAddToLiquidity",
				"type": "uint256"
			}
		],
		"name": "setnumTokensSellToAddToLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "shutdown",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "swapTokensForBNBUSer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rAmount",
				"type": "uint256"
			}
		],
		"name": "tokenFromMe",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBurn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTax",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "treasuryaddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawUSDC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export const FaucetABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BondReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Bonddeposited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "CreatorPaid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CREDITtokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			}
		],
		"name": "CheckBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DIMEtokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "METokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDCtokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "claimedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "creator",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			}
		],
		"name": "dispense",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dispenseamount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "getUSDCBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "setCREDITTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "setDIMETokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "setMETokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "decimals",
				"type": "uint256"
			}
		],
		"name": "setTokenDecimals",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "setUSDCTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenDecimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

export const StakingABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BONUS_MULTIPLIER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Me",
		"outputs": [
			{
				"internalType": "contract IERC20Upgradeable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_burnvaultaddress",
				"type": "address"
			}
		],
		"name": "_setBurnVaultAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teamWalletaddress",
				"type": "address"
			}
		],
		"name": "_setTeamWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnVault",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "communitywallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimalMultiplier",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHoldersRunningStakeBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "holderUnstakeRemainingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "lock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxStakeAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mePerBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minRewardBalanceToClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "pendingMe",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolInfo",
		"outputs": [
			{
				"internalType": "contract IERC20Upgradeable",
				"name": "lpToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allocPoint",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastRewardBlock",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "accMePerShare",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardStartDate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "secondsLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_allocPoint",
				"type": "uint256"
			}
		],
		"name": "setAllocationPoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_communitywallet",
				"type": "address"
			}
		],
		"name": "setCommunityWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_feesAppliableStaking",
				"type": "bool"
			}
		],
		"name": "setFeesAppliableStaking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_me",
				"type": "address"
			}
		],
		"name": "setMeAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mePerBlock",
				"type": "uint256"
			}
		],
		"name": "setMePerBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minRewardBalanceToClaim",
				"type": "uint256"
			}
		],
		"name": "setRewardAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardStartdate",
				"type": "uint256"
			}
		],
		"name": "setRewardStartDate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "setStakingTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_totalAllocPoint",
				"type": "uint256"
			}
		],
		"name": "setTotalAllocationPoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingLockPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAllocPoint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "unLockStakeHolder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "unLockWeeklyLock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "multiplierNumber",
				"type": "uint256"
			}
		],
		"name": "updateMultiplier",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "updatePool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardDebt",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawLockPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const StakingBlackABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BONUS_MULTIPLIER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Me",
		"outputs": [
			{
				"internalType": "contract IERC20Upgradeable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_burnvaultaddress",
				"type": "address"
			}
		],
		"name": "_setBurnVaultAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teamWalletaddress",
				"type": "address"
			}
		],
		"name": "_setTeamWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnVault",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "communitywallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimalMultiplier",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHoldersRunningStakeBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "holderUnstakeRemainingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "lock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxStakeAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mePerBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minRewardBalanceToClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "pendingMe",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolInfo",
		"outputs": [
			{
				"internalType": "contract IERC20Upgradeable",
				"name": "lpToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allocPoint",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastRewardBlock",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "accMePerShare",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardStartDate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "secondsLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_allocPoint",
				"type": "uint256"
			}
		],
		"name": "setAllocationPoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_communitywallet",
				"type": "address"
			}
		],
		"name": "setCommunityWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_feesAppliableStaking",
				"type": "bool"
			}
		],
		"name": "setFeesAppliableStaking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_me",
				"type": "address"
			}
		],
		"name": "setMeAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mePerBlock",
				"type": "uint256"
			}
		],
		"name": "setMePerBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minRewardBalanceToClaim",
				"type": "uint256"
			}
		],
		"name": "setRewardAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardStartdate",
				"type": "uint256"
			}
		],
		"name": "setRewardStartDate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "setStakingTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_totalAllocPoint",
				"type": "uint256"
			}
		],
		"name": "setTotalAllocationPoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingLockPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAllocPoint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "unLockStakeHolder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "unLockWeeklyLock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "multiplierNumber",
				"type": "uint256"
			}
		],
		"name": "updateMultiplier",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "updatePool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardDebt",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawLockPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const LPTokenABI =[
	{
	  "inputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Approval",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "sender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount0",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount1",
		  "type": "uint256"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		}
	  ],
	  "name": "Burn",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "sender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount0",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount1",
		  "type": "uint256"
		}
	  ],
	  "name": "Mint",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "sender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount0In",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount1In",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount0Out",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount1Out",
		  "type": "uint256"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		}
	  ],
	  "name": "Swap",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint112",
		  "name": "reserve0",
		  "type": "uint112"
		},
		{
		  "indexed": false,
		  "internalType": "uint112",
		  "name": "reserve1",
		  "type": "uint112"
		}
	  ],
	  "name": "Sync",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Transfer",
	  "type": "event"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "DOMAIN_SEPARATOR",
	  "outputs": [
		{
		  "internalType": "bytes32",
		  "name": "",
		  "type": "bytes32"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "MINIMUM_LIQUIDITY",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "PERMIT_TYPEHASH",
	  "outputs": [
		{
		  "internalType": "bytes32",
		  "name": "",
		  "type": "bytes32"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "allowance",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "approve",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		}
	  ],
	  "name": "burn",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "amount0",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "amount1",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "decimals",
	  "outputs": [
		{
		  "internalType": "uint8",
		  "name": "",
		  "type": "uint8"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "factory",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "getReserves",
	  "outputs": [
		{
		  "internalType": "uint112",
		  "name": "_reserve0",
		  "type": "uint112"
		},
		{
		  "internalType": "uint112",
		  "name": "_reserve1",
		  "type": "uint112"
		},
		{
		  "internalType": "uint32",
		  "name": "_blockTimestampLast",
		  "type": "uint32"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_token0",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "_token1",
		  "type": "address"
		}
	  ],
	  "name": "initialize",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "kLast",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		}
	  ],
	  "name": "mint",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "liquidity",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "name",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "nonces",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "deadline",
		  "type": "uint256"
		},
		{
		  "internalType": "uint8",
		  "name": "v",
		  "type": "uint8"
		},
		{
		  "internalType": "bytes32",
		  "name": "r",
		  "type": "bytes32"
		},
		{
		  "internalType": "bytes32",
		  "name": "s",
		  "type": "bytes32"
		}
	  ],
	  "name": "permit",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "price0CumulativeLast",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "price1CumulativeLast",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		}
	  ],
	  "name": "skim",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "amount0Out",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "amount1Out",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "bytes",
		  "name": "data",
		  "type": "bytes"
		}
	  ],
	  "name": "swap",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "symbol",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [],
	  "name": "sync",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "token0",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "token1",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "totalSupply",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "transfer",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "transferFrom",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
  ]

export const DutchContractABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributeRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalTokens",
				"type": "uint256"
			}
		],
		"name": "RewardsDistributed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "acknowledgement",
				"type": "string"
			}
		],
		"name": "UnFreezeAcknowledgment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithdrawnReward",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "bidded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "migrateReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_coolDown",
				"type": "uint256"
			}
		],
		"name": "reset_cooldown",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			}
		],
		"name": "reset_endTimestamp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minimumBid",
				"type": "uint256"
			}
		],
		"name": "reset_minimumBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IErc20Token",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "reset_tokenContractAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IErc20Token",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_contractOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_startTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minimumBid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_coolDown",
				"type": "uint256"
			}
		],
		"name": "reSetter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unfreeze",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawUnsoldTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "auctionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "bidAmounts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bidders",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "coolDown",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_bidder",
				"type": "address"
			}
		],
		"name": "getBiddedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEndTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_bidder",
				"type": "address"
			}
		],
		"name": "getRewardAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStartTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasBid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minimumBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IErc20Token",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userLastClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userNextClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const TokenPresaleABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ClaimReward",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithdrawnReward",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "REWARD_INTERVAL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_SPLIT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "claimableReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getClaimableRewardAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserLastClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserNextClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "migrateReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minimumDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_rewardToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_startTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tokenPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minimumDeposit",
				"type": "uint256"
			}
		],
		"name": "reSetter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			}
		],
		"name": "reset_endTimestamp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minimumDeposit",
				"type": "uint256"
			}
		],
		"name": "reset_minimumDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_startTimestamp",
				"type": "uint256"
			}
		],
		"name": "reset_startTimestamp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_rewardToken",
				"type": "address"
			}
		],
		"name": "reset_tokenContractAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenPrice",
				"type": "uint256"
			}
		],
		"name": "reset_tokenPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_totalTokens",
				"type": "uint256"
			}
		],
		"name": "reset_totalTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userLastClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userNextClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawUnsoldTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const ChainlinkPriceFeedOracleABI = [
	{
	  inputs: [],
	  name: "decimals",
	  outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
	  stateMutability: "view",
	  type: "function",
	},
	{
	  inputs: [],
	  name: "description",
	  outputs: [{ internalType: "string", name: "", type: "string" }],
	  stateMutability: "view",
	  type: "function",
	},
	{
	  inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
	  name: "getRoundData",
	  outputs: [
		{ internalType: "uint80", name: "roundId", type: "uint80" },
		{ internalType: "int256", name: "answer", type: "int256" },
		{ internalType: "uint256", name: "startedAt", type: "uint256" },
		{ internalType: "uint256", name: "updatedAt", type: "uint256" },
		{ internalType: "uint80", name: "answeredInRound", type: "uint80" },
	  ],
	  stateMutability: "view",
	  type: "function",
	},
	{
	  inputs: [],
	  name: "latestRoundData",
	  outputs: [
		{ internalType: "uint80", name: "roundId", type: "uint80" },
		{ internalType: "int256", name: "answer", type: "int256" },
		{ internalType: "uint256", name: "startedAt", type: "uint256" },
		{ internalType: "uint256", name: "updatedAt", type: "uint256" },
		{ internalType: "uint80", name: "answeredInRound", type: "uint80" },
	  ],
	  stateMutability: "view",
	  type: "function",
	},
	{
	  inputs: [],
	  name: "version",
	  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
	  stateMutability: "view",
	  type: "function",
	},
  ]

export const RewardDistrubutorABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalRewardAmountWithoutFix",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WhitelistUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getRewardBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRewardContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalRewardAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isWhitelisted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isWhitelist",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct RewardContract.WhitelistEntry[]",
				"name": "entries",
				"type": "tuple[]"
			}
		],
		"name": "setWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const AirDropCoinABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_meAddress",
				"type": "address"
			}
		],
		"name": "setMeAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_tokens",
				"type": "address[]"
			}
		],
		"name": "setTokenAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "entries",
				"type": "address[]"
			}
		],
		"name": "setWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "WhitelistUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "meAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokens",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userBal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


export const BurnVaultAddress ="0x3c46547A6168AD3d47EA7052860D32462f7e52AF"
export const BLACKTokenAddress ="0xdefb084803157b33E29EE0b3557Fa98BF22c98fa"//"0x00B32eE0510E1C6Dad9C39FC58E71A2dDd282eE8"//"0x3BEa1CCDB8593ce8f6b711e580FcB0764e48631d"//"0xdefb084803157b33E29EE0b3557Fa98BF22c98fa";
export const FaucetAddress = "0x602deb5461B57c4F7F206A38cfd86f9803D82204"//"0xEc0C6723DBAD20E98252676178aF09f5e89C05C5" ;
export const StakingBLACKAddress ="0xE2090e7DE29fcf62ba9269dDDf140d77e0f0f7f8";
export const stakingLPAddress = "0x862cE029c41f9A7f9F511a80461608AE66a14d73";
export const LPTokenAddress ="0xde80101db6fe3FA6249ba1aC5f161beDcD7E0843"

export const presSaleAddress ="0x5B3e3e8C4674c2bD7669022c87d9E71AAb2A42a9"
export const DutchAuctionAddress ="0x1f5506b65C58224b94F3BFE2e3D1085D55961279"

export const RewardDistrubutorAddress = "0xE3fB052533722562e9EB4b86a83B88f4937A2DE6"//"0x3CF5F635eB9d3d9a8aaca513eE8eAfB4df782811";
export const AirDropCoinAddress = "0x086Bf3cdD0C3e92BDbdFc17aA47643eEeDBb63e9";

export const WBTCAddress = "0x4200000000000000000000000000000000000006";
export const USDCAddress = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"//"0x39F1eC8493871916477C6F8B8363e1F1154A9e3a"//;

export const ChainlinkPriceFeedOracleAddress = "0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1";
export const Mint_Contract_ABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_burnFee",
				"type": "uint256"
			}
		],
		"name": "BurnFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "__greyListAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "__flag",
				"type": "bool"
			}
		],
		"name": "GreyListUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "newStatus",
				"type": "bool"
			}
		],
		"name": "LiquidityEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_liquidityFee",
				"type": "uint256"
			}
		],
		"name": "LiquidityFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_maxLiquidityAmount",
				"type": "uint256"
			}
		],
		"name": "MaxLiquidityAmount",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "numTokensSellToAddToLiquidity",
				"type": "uint256"
			}
		],
		"name": "NumTokensSellToAddToLiquidity",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "SwapAndLiquifyEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "newStatus",
				"type": "bool"
			}
		],
		"name": "SwapEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_taxFee",
				"type": "uint256"
			}
		],
		"name": "TaxFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_treasuryFee",
				"type": "uint256"
			}
		],
		"name": "TreasuryFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newBurnVaultAddress",
				"type": "address"
			}
		],
		"name": "UpdateBurnVaultAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newStakingAddress",
				"type": "address"
			}
		],
		"name": "UpdateStakingAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newTreasuryAddress",
				"type": "address"
			}
		],
		"name": "UpdateTreasuryAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_target",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "LastSwapTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "deductTransferFee",
				"type": "bool"
			}
		],
		"name": "MeFromToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "SwapLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "SwapTrack",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDCAddress",
		"outputs": [
			{
				"internalType": "contract IBEP20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_allowances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_blocksSinceBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_block",
				"type": "uint256"
			}
		],
		"name": "_changeFreezeBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getBurnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getBurnVault",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getLiquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getSwapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getTaxFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getTreasuryFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_getnumTokensSellToAddToLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_greyListAccount",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_isFrozen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_isrewardExcluded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_maxLiquidityAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_rOwned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_rewardExcluded",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_secondsLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "burnFee",
				"type": "uint128"
			}
		],
		"name": "_setBurnFeeExternal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_shutdown",
				"type": "bool"
			}
		],
		"name": "_setShutDown",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "taxFee",
				"type": "uint128"
			}
		],
		"name": "_setTaxFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teamWalletaddress",
				"type": "address"
			}
		],
		"name": "_setTeamWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_treasuryaddress",
				"type": "address"
			}
		],
		"name": "_setTreasuryAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "treasuryFee",
				"type": "uint128"
			}
		],
		"name": "_setTreasuryFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_tOwned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_StakingAddress",
				"type": "address"
			}
		],
		"name": "addStakingContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnVault",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "checkSwapValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gAddress",
				"type": "address"
			}
		],
		"name": "getGreyList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "treasury",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_Tokenname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Tokensymbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "TokenSupply",
				"type": "uint256"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initializes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isnew",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isrewardExcluded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launchpadAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "launchpadAddresses",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liquidityEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_StakingAddress",
				"type": "address"
			}
		],
		"name": "removeStakingContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "rewardexcludeAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			}
		],
		"name": "rewardexcludeAccountsMultiple",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "rewardincludeAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_burnVault",
				"type": "address"
			}
		],
		"name": "setBurnVault",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "gFlag",
				"type": "bool"
			}
		],
		"name": "setGreyList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "launchpad",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "allowed",
				"type": "bool"
			}
		],
		"name": "setLaunchpadAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setLiquidityEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint128",
				"name": "liquidityFee",
				"type": "uint128"
			}
		],
		"name": "setLiquidityFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "maxTxPercent",
				"type": "uint256"
			}
		],
		"name": "setMaxLiquidityAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setSwapAndLiquifyEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setSwapEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "USDC",
				"type": "address"
			}
		],
		"name": "setUSDCAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "uniswapv2",
				"type": "address"
			}
		],
		"name": "setUniswapV2PairAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_numTokensSellToAddToLiquidity",
				"type": "uint256"
			}
		],
		"name": "setnumTokensSellToAddToLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "shutdown",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rAmount",
				"type": "uint256"
			}
		],
		"name": "tokenFromMe",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBurn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTax",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "treasuryaddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawUSDC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export const  Mint_Contract_Bytecode ="60a0604052306080526012805460ff19166009179055348015601f575f80fd5b506080516156466100465f395f81816134520152818161347b01526135e001526156465ff3fe6080604052600436106104a8575f3560e01c806385b1a95611610262578063c49b9a801161014a578063e35c9b44116100be578063f2fde38b11610083578063f2fde38b14610f2b578063f3fef3a314610f4a578063f6c6afbc14610f69578063fc0e74d114610f97578063fe85b42b14610fb0578063fed1ad9b14610fc4575f80fd5b8063e35c9b4414610e84578063e5c1fe0f14610ea3578063e930320914610ec2578063f0dc2c2014610ee1578063f0efc43514610f00575f80fd5b8063d793d1011161010f578063d793d10114610d9a578063db16f67314610db9578063dc4e566514610dd8578063dd62ed3e14610e02578063dee5a8cc14610e46578063e01af92c14610e65575f80fd5b8063c49b9a8014610cf3578063c680711114610d12578063c8b55b9414610d31578063ca8ffaa014610d50578063cf22f6a414610d7b575f80fd5b8063a9059cbb116101e1578063b048a4bb116101a6578063b048a4bb14610c36578063b2bdfa7b14610c54578063b51c64d114610c72578063b8e5589114610c91578063b9623eae14610cb0578063bc5cf43714610ccf575f80fd5b8063a9059cbb14610b7c578063a998896e14610b9b578063aaf5bfc314610bb9578063ad04607214610bd8578063ad3cb1cc14610c06575f80fd5b806399dde5de1161022757806399dde5de14610adc5780639cc7746114610afb5780639d1798e514610b1a578063a30c57ef14610b2f578063a457c2d714610b5d575f80fd5b806385b1a95614610a4a5780638da5cb5b14610a695780638ef5da0414610a8557806394caf06b14610aa957806395d89b4114610ac8575f80fd5b806340dc83911161039057806359927044116103045780636a39d32c116102c95780636a39d32c146109a75780636ddd1713146109cb57806370a08231146109e4578063715018a614610a035780637777747914610a175780637f66bd3e14610a36575f80fd5b8063599270441461090e57806362671d951461092d578063645ac8601461094c57806366eba0ea1461096b57806369f9aa4114610988575f80fd5b806349bd5a5e1161035557806349bd5a5e146108715780634a74bb02146108905780634aae03d4146108b05780634d12d4b6146108d45780634f1ef286146108e757806352d1902d146108fa575f80fd5b806340dc8391146107d257806340eb803214610800578063429dc8831461081f57806344471fd914610833578063480937de14610852575f80fd5b806321916e55116104275780632fbff030116103ec5780632fbff030146106ff578063313ce5671461071c57806337792e771461073d57806339509351146107745780633b7e6d4a146107935780633c9f861d146107be575f80fd5b806321916e551461065757806323b872dd14610676578063240b7f6414610695578063264caa99146106b45780632eea532b146106d1575f80fd5b80630cfc15f91161046d5780630cfc15f91461058c578063121e7e7d146105b757806314a004b2146105ed5780631694505e1461060c57806318160ddd14610643575f80fd5b8063024c2ddd146104b357806306fdde03146104fc57806307009bff1461051d578063095ea7b31461054c5780630a481e871461056b575f80fd5b366104af57005b5f80fd5b3480156104be575f80fd5b506104e96104cd366004614ca0565b600360209081525f928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b348015610507575f80fd5b50610510610fe3565b6040516104f39190614cd7565b348015610528575f80fd5b5061053c610537366004614d0c565b611073565b60405190151581526020016104f3565b348015610557575f80fd5b5061053c610566366004614d27565b6110dd565b348015610576575f80fd5b5061058a610585366004614d51565b6110f3565b005b348015610597575f80fd5b506104e96105a6366004614d0c565b60016020525f908152604090205481565b3480156105c2575f80fd5b5061053c6105d1366004614d0c565b6001600160a01b03165f90815260046020526040902054421090565b3480156105f8575f80fd5b5061058a610607366004614d84565b611176565b348015610617575f80fd5b5060175461062b906001600160a01b031681565b6040516001600160a01b0390911681526020016104f3565b34801561064e575f80fd5b50600b546104e9565b348015610662575f80fd5b5061058a610671366004614d0c565b6111b2565b348015610681575f80fd5b5061053c610690366004614d9f565b611366565b3480156106a0575f80fd5b5061058a6106af366004614d51565b6113ce565b3480156106bf575f80fd5b506016546001600160801b03166104e9565b3480156106dc575f80fd5b5061053c6106eb366004614d0c565b60076020525f908152604090205460ff1681565b34801561070a575f80fd5b506015546001600160801b03166104e9565b348015610727575f80fd5b5060125460405160ff90911681526020016104f3565b348015610748575f80fd5b5061053c610757366004614d0c565b6001600160a01b03165f9081526006602052604090205460ff1690565b34801561077f575f80fd5b5061053c61078e366004614d27565b611445565b34801561079e575f80fd5b506104e96107ad366004614d0c565b60026020525f908152604090205481565b3480156107c9575f80fd5b50600e546104e9565b3480156107dd575f80fd5b5061053c6107ec366004614d0c565b601d6020525f908152604090205460ff1681565b34801561080b575f80fd5b506104e961081a366004614e43565b61147a565b34801561082a575f80fd5b506019546104e9565b34801561083e575f80fd5b5061058a61084d366004614d27565b611518565b34801561085d575f80fd5b5061058a61086c366004614d84565b6116ad565b34801561087c575f80fd5b5060185461062b906001600160a01b031681565b34801561089b575f80fd5b5060185461053c90600160a81b900460ff1681565b3480156108bb575f80fd5b50601b5461062b9061010090046001600160a01b031681565b61058a6108e2366004614f63565b61171f565b61058a6108f5366004614fdf565b611c36565b348015610905575f80fd5b506104e9611c51565b348015610919575f80fd5b50601c5461062b906001600160a01b031681565b348015610938575f80fd5b506104e9610947366004614d0c565b611c6c565b348015610957575f80fd5b5061058a610966366004614d0c565b611cb5565b348015610976575f80fd5b506013546001600160a01b031661062b565b348015610993575f80fd5b5061058a6109a236600461503e565b611d37565b3480156109b2575f80fd5b50601554600160801b90046001600160801b03166104e9565b3480156109d6575f80fd5b5060225461053c9060ff1681565b3480156109ef575f80fd5b506104e96109fe366004614d0c565b611d95565b348015610a0e575f80fd5b5061058a611df1565b348015610a22575f80fd5b5061058a610a31366004614d0c565b611e62565b348015610a41575f80fd5b5061058a611ead565b348015610a55575f80fd5b5061058a610a64366004614d51565b611eef565b348015610a74575f80fd5b505f546001600160a01b031661062b565b348015610a90575f80fd5b50601654600160801b90046001600160801b03166104e9565b348015610ab4575f80fd5b5061058a610ac3366004614d0c565b611f6b565b348015610ad3575f80fd5b50610510611fe2565b348015610ae7575f80fd5b5061058a610af6366004614d0c565b611ff1565b348015610b06575f80fd5b506104e9610b15366004615055565b61203c565b348015610b25575f80fd5b506104e9600f5481565b348015610b3a575f80fd5b5061053c610b49366004614d0c565b60216020525f908152604090205460ff1681565b348015610b68575f80fd5b5061053c610b77366004614d27565b6120c8565b348015610b87575f80fd5b5061053c610b96366004614d27565b612115565b348015610ba6575f80fd5b50601854600160a81b900460ff1661053c565b348015610bc4575f80fd5b5061058a610bd3366004614d0c565b612121565b348015610be3575f80fd5b5061053c610bf2366004614d0c565b60066020525f908152604090205460ff1681565b348015610c11575f80fd5b50610510604051806040016040528060058152602001640352e302e360dc1b81525081565b348015610c41575f80fd5b5060225461053c90610100900460ff1681565b348015610c5f575f80fd5b505f5461062b906001600160a01b031681565b348015610c7d575f80fd5b5061062b610c8c36600461503e565b61216c565b348015610c9c575f80fd5b506104e9610cab36600461503e565b612194565b348015610cbb575f80fd5b5061058a610cca366004615078565b61220b565b348015610cda575f80fd5b5060125461062b9061010090046001600160a01b031681565b348015610cfe575f80fd5b5061058a610d0d366004614d84565b61225e565b348015610d1d575f80fd5b5060135461062b906001600160a01b031681565b348015610d3c575f80fd5b5061058a610d4b36600461503e565b6122d4565b348015610d5b575f80fd5b506104e9610d6a366004614d0c565b601e6020525f908152604090205481565b348015610d86575f80fd5b506104e9610d95366004614d0c565b612332565b348015610da5575f80fd5b5061058a610db4366004614d0c565b612354565b348015610dc4575f80fd5b5061058a610dd3366004614d51565b612471565b348015610de3575f80fd5b506104e9610df2366004614d0c565b602080525f908152604090205481565b348015610e0d575f80fd5b506104e9610e1c366004614ca0565b6001600160a01b039182165f90815260036020908152604080832093909416825291909152205490565b348015610e51575f80fd5b5061058a610e603660046150a4565b612558565b348015610e70575f80fd5b5061058a610e7f366004614d84565b6126b5565b348015610e8f575f80fd5b5061058a610e9e366004614d0c565b61271f565b348015610eae575f80fd5b5061058a610ebd366004614d27565b612768565b348015610ecd575f80fd5b5060145461062b906001600160a01b031681565b348015610eec575f80fd5b5061058a610efb366004614d0c565b6127ba565b348015610f0b575f80fd5b506104e9610f1a366004614d0c565b601f6020525f908152604090205481565b348015610f36575f80fd5b5061058a610f45366004614d0c565b612836565b348015610f55575f80fd5b5061058a610f64366004614d27565b61291d565b348015610f74575f80fd5b5061053c610f83366004614d0c565b601a6020525f908152604090205460ff1681565b348015610fa2575f80fd5b50601b5461053c9060ff1681565b348015610fbb575f80fd5b50600d546104e9565b348015610fcf575f80fd5b5061058a610fde366004615078565b6129c1565b606060108054610ff290615113565b80601f016020809104026020016040519081016040528092919081815260200182805461101e90615113565b80156110695780601f1061104057610100808354040283529160200191611069565b820191905f5260205f20905b81548152906001019060200180831161104c57829003601f168201915b5050505050905090565b5f80546001600160a01b031633148061109a5750335f9081526021602052604090205460ff165b6110bf5760405162461bcd60e51b81526004016110b69061514b565b60405180910390fd5b506001600160a01b03165f9081526007602052604090205460ff1690565b5f6110e9338484612a4a565b5060015b92915050565b5f546001600160a01b0316331461111c5760405162461bcd60e51b81526004016110b69061514b565b601680546001600160801b03908116600160801b8483168102919091179283905560405192041681527f11a7c17dd570232260bc2f3d51f97dca1417fbf1386700bab4fd6363e92750f9906020015b60405180910390a150565b5f546001600160a01b0316331461119f5760405162461bcd60e51b81526004016110b69061514b565b601b805460ff1916911515919091179055565b5f546001600160a01b031633146111db5760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b0381165f9081526006602052604090205460ff166112525760405162461bcd60e51b815260206004820152602760248201527f4163636f756e7420697320616c726561647920696e636c7564656420666f72206044820152667265776172647360c81b60648201526084016110b6565b5f5b600a5481101561136257816001600160a01b0316600a828154811061127b5761127b615180565b5f918252602090912001546001600160a01b03160361135a57600a80546112a4906001906151a8565b815481106112b4576112b4615180565b5f91825260209091200154600a80546001600160a01b0390921691839081106112df576112df615180565b5f91825260208083209190910180546001600160a01b0319166001600160a01b039485161790559184168152600282526040808220829055600690925220805460ff19169055600a805480611336576113366151bb565b5f8281526020902081015f1990810180546001600160a01b03191690550190555050565b600101611254565b5050565b5f6113b884336113b385604051806060016040528060288152602001615584602891396001600160a01b038a165f9081526003602090815260408083203384529091529020549190612b6d565b612a4a565b6113c3848484612ba5565b5060015b9392505050565b5f546001600160a01b031633146113f75760405162461bcd60e51b81526004016110b69061514b565b601680546001600160801b0319166001600160801b0383169081179091556040519081527fc328594cab3a117e8ddf861647e12c326eb6fa98ab8f707982ad7a13e8264c7c9060200161116b565b335f8181526003602090815260408083206001600160a01b038716845290915281205490916110e99185906113b3908661334b565b60175460405163d06ca61f60e01b81525f916001600160a01b0316908290829063d06ca61f906114b09088908890600401615212565b5f60405180830381865afa1580156114ca573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526114f19190810190615232565b90508060018151811061150657611506615180565b60200260200101519250505092915050565b5f546001600160a01b031633146115415760405162461bcd60e51b81526004016110b69061514b565b6014546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015611587573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115ab91906152c2565b116115f15760405162461bcd60e51b81526020600482015260166024820152754e6f7420656e6f75676820424e422062616c616e636560501b60448201526064016110b6565b60145460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303815f875af1158015611641573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061166591906152d9565b50604080516001600160a01b0384168152602081018390527f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436491015b60405180910390a15050565b5f546001600160a01b031633146116d65760405162461bcd60e51b81526004016110b69061514b565b602280548215156101000261ff00199091161790556040517f3bdd4f2d0fab303759ca3591dedf590bc3e633b26f7e777c77e4d7d261dbd8849061116b90831515815260200190565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff1615906001600160401b03165f811580156117635750825b90505f826001600160401b0316600114801561177e5750303b155b90508115801561178c575080155b156117aa5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156117d457845460ff60401b1916600160401b1785555b60106117e08982615338565b5060116117ed8882615338565b506117f6611ead565b7004000000000000000000000000000000046015557001000000000000000000000000000000016016556512309ce540006019556611c37937e08000600f556018805460ff60a81b1916600160a81b17905561185686633b9aca006153f2565b600b555f60646118678860056153f2565b61187590633b9aca006153f2565b61187f919061541d565b600b5461188c91906151a8565b9050611899815f19615430565b6118a4905f196151a8565b600c819055335f9081526001602090815260409182902092909255601280546001600160a01b038e166101008102610100600160a81b031990921691909117909155601c80546001600160a01b031990811690921790556014805490911673036cbd53842c5426634e7929541ec2318f3dcf7e179055805163c45a015560e01b81529051738cfe327cec66d1c090dd72bd0ff11d690c33a2eb92839263c45a015592600480830193928290030181865afa158015611964573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119889190615443565b6014546040516364e329cb60e11b81523060048201526001600160a01b03918216602482015291169063c9c65396906044016020604051808303815f875af11580156119d6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119fa9190615443565b601880546001600160a01b03199081166001600160a01b039384161790915560178054909116918316919091179055335f8181526002602090815260408083208690556006909152808220805460ff199081166001908117909255308085529284208054821683179055730493ec6235e53753bd812871f259842bf2676dd6938490527f4e844596159223b59b55aa1949cd1efde9c2353d1e12502c8e38e32bcef0894180549091169091179055600b549192611ab992909190612a4a565b5f6064611ac78b60056153f2565b611ad590633b9aca006153f2565b611adf919061541d565b90505f611aeb826133a9565b5050506001600160a01b0387165f90815260026020526040902054939450611b189392508591505061334b565b6001600160a01b0384165f90815260026020908152604080832093909355600190522054611b46908261334b565b6001600160a01b0384165f81815260016020526040808220939093559151909190655af3107a40009082818181858883f19350505050158015611b8b573d5f803e3d5ffd5b50600b5460405190815233905f905f805160206155cc8339815191529060200160405180910390a36040518281526001600160a01b038416905f905f805160206155cc8339815191529060200160405180910390a350505050508315611c2b57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b611c3e613447565b611c47826134ed565b6113628282613519565b5f611c5a6135d5565b505f805160206155ac83398151915290565b6001600160a01b0381165f90815260046020526040812054421015611cae576001600160a01b0382165f908152600460205260409020546110ed9042906151a8565b505f919050565b5f546001600160a01b03163314611cde5760405162461bcd60e51b81526004016110b69061514b565b60128054610100600160a81b0319166101006001600160a01b038481168202929092179283905560405192041681527f30d36c1dd67e2019526263df539f65050c3b537a6acf65766b5da7de7128cf369060200161116b565b5f546001600160a01b03163314611d605760405162461bcd60e51b81526004016110b69061514b565b600f8190556040518181527f5256864ba96a788540d7247f2e1af47c4184d91b5fb44e7646cd529e28053d1c9060200161116b565b6001600160a01b0381165f9081526006602052604081205460ff1615611dd057506001600160a01b03165f9081526002602052604090205490565b6001600160a01b0382165f908152600160205260409020546110ed90612194565b5f546001600160a01b03163314611e1a5760405162461bcd60e51b81526004016110b69061514b565b5f80546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a35f80546001600160a01b0319169055565b5f546001600160a01b03163314611e8b5760405162461bcd60e51b81526004016110b69061514b565b601c80546001600160a01b0319166001600160a01b0392909216919091179055565b5f80546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350565b5f546001600160a01b03163314611f185760405162461bcd60e51b81526004016110b69061514b565b601580546001600160801b03908116600160801b8483168102919091179283905560405192041681527f7fc6eafc36623a1bf98ab465323c29e86651efa5e165bd87d25a3bda5c35b83f9060200161116b565b5f546001600160a01b03163314611f945760405162461bcd60e51b81526004016110b69061514b565b601380546001600160a01b0319166001600160a01b0383169081179091556040519081527f55f462545ff16557fa1fca8a088b75182cad9f40d9b226435e6ee14b7050a5ac9060200161116b565b606060118054610ff290615113565b5f546001600160a01b0316331461201a5760405162461bcd60e51b81526004016110b69061514b565b601880546001600160a01b0319166001600160a01b0392909216919091179055565b5f600b5483111561208f5760405162461bcd60e51b815260206004820152601f60248201527f416d6f756e74206d757374206265206c657373207468616e20737570706c790060448201526064016110b6565b816120ae575f61209e846133a9565b509496506110ed95505050505050565b5f6120b8846133a9565b509396506110ed95505050505050565b5f6110e933846113b3856040518060600160405280602581526020016155ec60259139335f9081526003602090815260408083206001600160a01b038d1684529091529020549190612b6d565b5f6110e9338484612ba5565b5f546001600160a01b0316331461214a5760405162461bcd60e51b81526004016110b69061514b565b601480546001600160a01b0319166001600160a01b0392909216919091179055565b600a818154811061217b575f80fd5b5f918252602090912001546001600160a01b0316905081565b5f600c548211156121f65760405162461bcd60e51b815260206004820152602660248201527f416d6f756e74206d757374206265206c657373207468616e20746f74616c205460448201526565737465723360d01b60648201526084016110b6565b5f6121ff61361e565b90506113c7838261363f565b5f546001600160a01b031633146122345760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b03919091165f908152602160205260409020805460ff1916911515919091179055565b5f546001600160a01b031633146122875760405162461bcd60e51b81526004016110b69061514b565b60188054821515600160a81b0260ff60a81b199091161790556040517f53726dfcaf90650aa7eb35524f4d3220f07413c8d6cb404cc8c18bf5591bc1599061116b90831515815260200190565b5f546001600160a01b031633146122fd5760405162461bcd60e51b81526004016110b69061514b565b60198190556040518181527f2601a1f3cf6e6d3c8c28a5baa15f85fe223b7061f6a05378d8d4e92a23e280f89060200161116b565b6001600160a01b0381165f908152600460205260408120546110ed90426151a8565b5f546001600160a01b0316331461237d5760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b0381165f9081526006602052604090205460ff16156123b55760405162461bcd60e51b81526004016110b69061545e565b6001600160a01b0381165f908152600160205260409020541561240c576001600160a01b0381165f908152600160205260409020546123f390612194565b6001600160a01b0382165f908152600260205260409020555b6001600160a01b03165f818152600660205260408120805460ff19166001908117909155600a805491820181559091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180546001600160a01b0319169091179055565b5f546001600160a01b0316331461249a5760405162461bcd60e51b81526004016110b69061514b565b6001816001600160801b0316101580156124be5750600a816001600160801b031611155b61250a5760405162461bcd60e51b815260206004820152601a60248201527f7461784665652073686f756c6420626520696e2031202d20313000000000000060448201526064016110b6565b601580546001600160801b0319166001600160801b0383169081179091556040519081527f66b46ec4824d8cb65501bd60af4d21e7f6f80aa1e98f6944eacfe170e4ce8a7d9060200161116b565b5f546001600160a01b031633146125815760405162461bcd60e51b81526004016110b69061514b565b5f5b818110156126b0575f83838381811061259e5761259e615180565b90506020020160208101906125b39190614d0c565b6001600160a01b0381165f9081526006602052604090205490915060ff16156125ee5760405162461bcd60e51b81526004016110b69061545e565b6001600160a01b0381165f9081526001602052604090205415612645576001600160a01b0381165f9081526001602052604090205461262c90612194565b6001600160a01b0382165f908152600260205260409020555b6001600160a01b03165f818152600660205260408120805460ff19166001908117909155600a8054808301825592527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a890910180546001600160a01b03191690921790915501612583565b505050565b5f546001600160a01b031633146126de5760405162461bcd60e51b81526004016110b69061514b565b6022805460ff19168215159081179091556040519081527f436b6cf978c7b6998fcce43dfe4d37e3a0dc2bb780144a2eb55d7138201e8a129060200161116b565b5f546001600160a01b031633146127485760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b03165f908152601a60205260409020805460ff19169055565b5f546001600160a01b031633146127915760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b039091165f908152600460209081526040808320939093556008905290812055565b5f546001600160a01b031633146127e35760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b0381165f818152601a6020908152604091829020805460ff1916600117905590519182527f30740e4c779c36103c49989d66d240626a100f163152c524345a280b5166834c910161116b565b5f546001600160a01b0316331461285f5760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b0381166128c45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016110b6565b5f80546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f80546001600160a01b0319166001600160a01b0392909216919091179055565b5f546001600160a01b031633146129465760405162461bcd60e51b81526004016110b69061514b565b80471161298e5760405162461bcd60e51b81526020600482015260166024820152754e6f7420656e6f75676820424e422062616c616e636560501b60448201526064016110b6565b6040516001600160a01b0383169082156108fc029083905f818181858888f19350505050158015611665573d5f803e3d5ffd5b5f546001600160a01b031633146129ea5760405162461bcd60e51b81526004016110b69061514b565b6001600160a01b0382165f81815260076020908152604091829020805460ff1916851515908117909155825193845260ff161515908301527feb2f8207d9fa2c61267d959b4c521c59da98e60d7e87e3a0b30a2197fa8d92fc91016116a1565b6001600160a01b038316612aac5760405162461bcd60e51b8152602060048201526024808201527f42455032303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016110b6565b6001600160a01b038216612b0d5760405162461bcd60e51b815260206004820152602260248201527f42455032303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016110b6565b6001600160a01b038381165f8181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b5f8184841115612b905760405162461bcd60e51b81526004016110b69190614cd7565b505f612b9c84866151a8565b95945050505050565b5f546001600160a01b0384811691161480612bc35750601b5460ff16155b612c215760405162461bcd60e51b815260206004820152602960248201527f43757272656e74204d4520746f6b656e20697320696e20656d657267656e63796044820152681029b43aba3237bbb760b91b60648201526084016110b6565b6001600160a01b038316612c855760405162461bcd60e51b815260206004820152602560248201527f42455032303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016110b6565b816001600160a01b0316836001600160a01b031603612ce65760405162461bcd60e51b815260206004820152601760248201527f42455032303a207472616e7366657220746f2073656c6600000000000000000060448201526064016110b6565b5f8111612d475760405162461bcd60e51b815260206004820152602960248201527f5472616e7366657220616d6f756e74206d7573742062652067726561746572206044820152687468616e207a65726f60b81b60648201526084016110b6565b6001600160a01b0383165f908152600460205260409020544210600103612dbb5760405162461bcd60e51b815260206004820152602260248201527f43757272656e742073656e64657220697320696e2066726f7a656e2073746174604482015261652160f01b60648201526084016110b6565b6001600160a01b0383165f9081526007602052604090205460ff1615612e5d5760405162461bcd60e51b815260206004820152604b60248201527f73656e64657220616464726573732020677265796c69737465642c206e6f207460448201527f72616e73616374696f6e732061726520616c6c6f77656420776974682074686960648201526a73206163636f756e74202160a81b608482015260a4016110b6565b6001600160a01b0382165f9081526007602052604090205460ff1615612f055760405162461bcd60e51b815260206004820152605160248201527f726563657069656e7420616464726573732069732020677265796c697374656460448201527f2c206e6f207472616e73616374696f6e732061726520616c6c6f77656420776960648201527074682074686973206163636f756e74202160781b608482015260a4016110b6565b5f6064612f1185611d95565b612f1b919061541d565b90505f612f2730611d95565b9050600f548110612f375750600f545b60195481108015908190612f555750601854600160a01b900460ff16155b8015612f6f57506018546001600160a01b03878116911614155b8015612f845750601854600160a81b900460ff165b15612f9457612f94601954613680565b6001600160a01b0386165f9081526006602052604090205460ff168015612fd357506001600160a01b0385165f9081526006602052604090205460ff16155b1561310a576018546001600160a01b03908116908616036130d0576001600160a01b03861630148061301157505f546001600160a01b038781169116145b15613026576130218686866137fd565b613343565b6001600160a01b0386165f9081526021602052604090205460ff16156130a55760405162461bcd60e51b815260206004820152602e60248201527f4572726f723a205472616e73616374696f6e206e6f7420616c6c6f776564206660448201526d37b9103a3434b99039b2b73232b960911b60648201526084016110b6565b828411156130c55760405162461bcd60e51b81526004016110b6906154a6565b6130218686866138de565b6001600160a01b0386165f908152601a602052604090205460ff1615156001036130ff576130218686866138de565b6130218686866137fd565b6001600160a01b0386165f9081526006602052604090205460ff1615801561314957506001600160a01b0385165f9081526006602052604090205460ff165b156131fd576018546001600160a01b038781169116148061318657506001600160a01b0385165f908152601a602052604090205460ff1615156001145b1561319657613021868686613a7c565b6013546001600160a01b03908116908616036131b757613021868686613b9f565b306001600160a01b038616036131d257613021868686613b9f565b828411156131f25760405162461bcd60e51b81526004016110b6906154a6565b613021868686613b9f565b6001600160a01b0386165f9081526006602052604090205460ff16801561323b57506001600160a01b0385165f9081526006602052604090205460ff165b156132a2576001600160a01b0386165f908152601a602052604090205460ff1615156001148061328757506001600160a01b0385165f908152601a602052604090205460ff1615156001145b1561329757613021868686613c39565b613021868686613d27565b6018546001600160a01b03908116908616036132ed57828411156132d85760405162461bcd60e51b81526004016110b6906154a6565b6132e3868686613d8c565b6130218685613e4c565b6018546001600160a01b039081169087160361330e57613021868686613d8c565b8284111561332e5760405162461bcd60e51b81526004016110b6906154a6565b61333986868661402f565b6133438685613e4c565b505050505050565b5f8061335783856154f4565b9050838110156113c75760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016110b6565b604080516080810182526015546001600160801b038082168352600160801b918290048116602084015260165480821694840194909452920490911660608201525f908190819081908190819081908190613405908a90614248565b90505f805f613414848d61434a565b865160208801516040890151606090990151949f50929d50909b5099509750939550929350505050919395979092949650565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806134cd57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166134c15f805160206155ac833981519152546001600160a01b031690565b6001600160a01b031614155b156134eb5760405163703e46dd60e11b815260040160405180910390fd5b565b5f546001600160a01b031633146135165760405162461bcd60e51b81526004016110b69061514b565b50565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015613573575060408051601f3d908101601f19168201909252613570918101906152c2565b60015b61359b57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016110b6565b5f805160206155ac83398151915281146135cb57604051632a87526960e21b8152600481018290526024016110b6565b6126b083836143f4565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146134eb5760405163703e46dd60e11b815260040160405180910390fd5b5f805f613629614449565b9092509050613638828261363f565b9250505090565b5f6113c783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506145b8565b6018805460ff60a01b1916600160a01b1790555f61369f82600261363f565b90505f6136ac83836145e4565b6014546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa1580156136f7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061371b91906152c2565b905061372683614625565b6014546040516370a0823160e01b81523060048201525f9161379c9184916001600160a01b0316906370a0823190602401602060405180830381865afa158015613772573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061379691906152c2565b906145e4565b90506137a88382614783565b60408051858152602081018390529081018490527f17bbfb9a6069321b6ded73bd96327c9e6b7212a5cd51ff219cd61370acafb5619060600160405180910390a150506018805460ff60a01b19169055505050565b5f613807826133a9565b5050506001600160a01b0388165f90815260026020526040902054939450613834939250859150506145e4565b6001600160a01b0385165f9081526002602090815260408083209390935560019052205461386290826145e4565b6001600160a01b038086165f908152600160205260408082209390935590851681522054613890908261334b565b6001600160a01b038085165f8181526001602052604090819020939093559151908616905f805160206155cc833981519152906138d09086815260200190565b60405180910390a350505050565b5f805f805f805f6138ee886133a9565b601654969d50949b509299509097509550935091505f9061392690606490613920908c906001600160801b03166148e1565b9061363f565b60125461010090046001600160a01b03165f90815260026020526040902054909150613952908261334b565b60125461010090046001600160a01b03165f9081526002602052604081209190915561398661397f61361e565b85906148e1565b6001600160a01b038d165f908152600260205260409020549091506139ab908b6145e4565b6001600160a01b038d165f908152600260209081526040808320939093556001905220546139d9908a6145e4565b6001600160a01b03808e165f9081526001602052604080822093909355908d1681522054613a07908961334b565b6001600160a01b038c165f90815260016020526040902055613a2b8782878761495f565b613a34836149b1565b8a6001600160a01b03168c6001600160a01b03165f805160206155cc83398151915288604051613a6691815260200190565b60405180910390a3505050505050505050505050565b5f805f805f805f613a8c886133a9565b601654969d50949b509299509097509550935091505f90613abe90606490613920908c906001600160801b03166148e1565b60125461010090046001600160a01b03165f90815260026020526040902054909150613aea908261334b565b60125461010090046001600160a01b03165f90815260026020526040812091909155613b1761397f61361e565b6001600160a01b038d165f90815260016020526040902054909150613b3c908a6145e4565b6001600160a01b03808e165f90815260016020908152604080832094909455918e16815260029091522054613b71908761334b565b6001600160a01b038c165f90815260026020908152604080832093909355600190522054613a07908961334b565b5f613ba9826133a9565b5050506001600160a01b0388165f90815260016020526040902054939450613bd6939250849150506145e4565b6001600160a01b038086165f90815260016020908152604080832094909455918616815260029091522054613c0b908361334b565b6001600160a01b0384165f90815260026020908152604080832093909355600190522054613890908261334b565b5f805f805f805f613c49886133a9565b601654969d50949b509299509097509550935091505f90613c7b90606490613920908c906001600160801b03166148e1565b60125461010090046001600160a01b03165f90815260026020526040902054909150613ca7908261334b565b60125461010090046001600160a01b03165f90815260026020526040812091909155613cd461397f61361e565b6001600160a01b038d165f90815260026020526040902054909150613cf9908b6145e4565b6001600160a01b038d165f90815260026020908152604080832093909355600190522054613b3c908a6145e4565b5f613d31826133a9565b5050506001600160a01b0388165f90815260026020526040902054939450613d5e939250859150506145e4565b6001600160a01b0385165f90815260026020908152604080832093909355600190522054613bd690826145e4565b5f805f805f805f613d9c886133a9565b601654969d50949b509299509097509550935091505f90613dce90606490613920908c906001600160801b03166148e1565b60125461010090046001600160a01b03165f90815260026020526040902054909150613dfa908261334b565b60125461010090046001600160a01b03165f90815260026020526040812091909155613e2761397f61361e565b6001600160a01b038d165f908152600160205260409020549091506139d9908a6145e4565b5f6103e8613e5984611d95565b613e649060056153f2565b613e6e919061541d565b90505f612710613e7d85611d95565b613e8890604b6153f2565b613e92919061541d565b905081831015613fad576001600160a01b0384165f90815260086020526040902054613ebf9060016154f4565b6001600160a01b0385165f908152600860205260409020819055600103613efb576001600160a01b0384165f9081526009602052604090204290555b6001600160a01b0384165f90815260096020526040902054613f219062015180906154f4565b421015613f80576001600160a01b0384165f90815260086020526040902054600211613f7b57613f5462015180426154f4565b6001600160a01b0385165f9081526004602090815260408083209390935560089052908120555b614029565b6001600160a01b0384165f9081526008602090815260408083206001905560099091529020429055614029565b818310158015613fbc57508083105b15613ff357613fca84614a33565b613fd661a8c0426154f4565b6001600160a01b0385165f90815260046020526040902055614029565b8083106140295761400384614a33565b61401062015180426154f4565b6001600160a01b0385165f908152600460205260409020555b50505050565b5f805f805f805f61403f886133a9565b601654969d50949b509299509097509550935091505f9061407190606490613920908c906001600160801b03166148e1565b60125461010090046001600160a01b03165f9081526002602052604090205490915061409d908261334b565b60125461010090046001600160a01b03165f908152600260205260408120919091556140ca61397f61361e565b6001600160a01b038d165f908152600160205260409020549091506140ef908a6145e4565b6001600160a01b03808e165f9081526001602052604080822093909355908d168152205461411d908961334b565b6001600160a01b038c165f908152600160205260408120919091556103e86141448d611d95565b61414f9060056153f2565b614159919061541d565b90505f6127106141688e611d95565b61417390604b6153f2565b61417d919061541d565b905081881015801561418e57508088105b156141bc5761419f61a8c0426154f4565b6001600160a01b038e165f908152600460205260409020556141e9565b8088106141e9576141d062015180426154f4565b6001600160a01b038e165f908152600460205260409020555b6141f58984898961495f565b6141fe856149b1565b8c6001600160a01b03168e6001600160a01b03165f805160206155cc8339815191528a60405161423091815260200190565b60405180910390a35050505050505050505050505050565b6142756040518060a001604052805f81526020015f81526020015f81526020015f81526020015f81525090565b5f61429a6064613920855f01516001600160801b0316876148e190919063ffffffff16565b90505f6142b48585606001516001600160801b0316614b0c565b90505f6142dc606461392087602001516001600160801b0316896148e190919063ffffffff16565b90505f614304606461392088604001516001600160801b03168a6148e190919063ffffffff16565b90505f61431982613796868187818e8c6145e4565b6040805160a08101825291825260208201969096529485019290925260608401929092525060808201529392505050565b5f805f8061435661361e565b90505f61436386836148e1565b90505f61437d8389602001516148e190919063ffffffff16565b90505f614397848a604001516148e190919063ffffffff16565b90505f6143b1858b606001516148e190919063ffffffff16565b90505f6143cb868c608001516148e190919063ffffffff16565b90505f6143e083613796848188818c8c6145e4565b959c959b5093995093975050505050505050565b6143fd82614b1c565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115614441576126b08282614b7f565b611362614be8565b600c54600b545f918291825b600a54811015614588578260015f600a848154811061447657614476615180565b5f9182526020808320909101546001600160a01b0316835282019290925260400190205411806144de57508160025f600a84815481106144b8576144b8615180565b5f9182526020808320909101546001600160a01b03168352820192909252604001902054115b156144f457600c54600b54945094505050509091565b61453860015f600a848154811061450d5761450d615180565b5f9182526020808320909101546001600160a01b0316835282019290925260400190205484906145e4565b925061457e60025f600a848154811061455357614553615180565b5f9182526020808320909101546001600160a01b0316835282019290925260400190205483906145e4565b9150600101614455565b50600b54600c546145989161363f565b8210156145af57600c54600b549350935050509091565b90939092509050565b5f81836145d85760405162461bcd60e51b81526004016110b69190614cd7565b505f612b9c848661541d565b5f6113c783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612b6d565b6040805160028082526060820183525f9260208301908036833701905050905030815f8151811061465857614658615180565b6001600160a01b03928316602091820292909201015260145482519116908290600190811061468957614689615180565b6001600160a01b0392831660209182029290920101526017546146af9130911684612a4a565b5f6146ba838361147a565b601754601354604051635c11d79560e01b81529293506001600160a01b0391821692635c11d795926146f89288925f92899216904290600401615507565b5f604051808303815f87803b15801561470f575f80fd5b505af1158015614721573d5f803e3d5ffd5b505060135460405163ebaa7cef60e01b8152600481018590526001600160a01b03909116925063ebaa7cef91506024015f604051808303815f87803b158015614768575f80fd5b505af115801561477a573d5f803e3d5ffd5b50505050505050565b60175461479b9030906001600160a01b031684612a4a565b60145460175460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303815f875af11580156147ed573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061481191906152d9565b506017546014546001600160a01b039182169163e8e337009130911685855f806148425f546001600160a01b031690565b60405160e089901b6001600160e01b03191681526001600160a01b039788166004820152958716602487015260448601949094526064850192909252608484015260a483015290911660c48201524260e4820152610104016060604051808303815f875af11580156148b6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906148da9190615542565b5050505050565b5f825f036148f057505f6110ed565b5f6148fb83856153f2565b905082614908858361541d565b146113c75760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b60648201526084016110b6565b6149788361379686600c546145e490919063ffffffff16565b600c55600d54614988908361334b565b600d55600e54614998908261334b565b600e55600b546149a890826145e4565b600b5550505050565b5f6149ba61361e565b90505f6149c783836148e1565b305f908152600160205260409020549091506149e3908261334b565b305f9081526001602090815260408083209390935560069052205460ff16156126b057305f90815260026020526040902054614a1f908461334b565b305f90815260026020526040902055505050565b6001600160a01b0381165f90815260086020526040902054600210613516576001600160a01b0381165f90815260096020526040812054614a7490426151a8565b905062015180811015614af2576001600160a01b0382165f90815260086020526040902054156113625760405162461bcd60e51b815260206004820152602360248201527f43757272656e742073656e64657220697320696e2066726f7a656e207374617460448201526265202160e81b60648201526084016110b6565b506001600160a01b03165f90815260086020526040812055565b5f6113c7606461392085856148e1565b806001600160a01b03163b5f03614b5157604051634c9c8ce360e01b81526001600160a01b03821660048201526024016110b6565b5f805160206155ac83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80846001600160a01b031684604051614b9b919061556d565b5f60405180830381855af49150503d805f8114614bd3576040519150601f19603f3d011682016040523d82523d5f602084013e614bd8565b606091505b5091509150612b9c858383614c07565b34156134eb5760405163b398979f60e01b815260040160405180910390fd5b606082614c1c57614c1782614c63565b6113c7565b8151158015614c3357506001600160a01b0384163b155b15614c5c57604051639996b31560e01b81526001600160a01b03851660048201526024016110b6565b50806113c7565b805115614c735780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6001600160a01b0381168114613516575f80fd5b5f8060408385031215614cb1575f80fd5b8235614cbc81614c8c565b91506020830135614ccc81614c8c565b809150509250929050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f60208284031215614d1c575f80fd5b81356113c781614c8c565b5f8060408385031215614d38575f80fd5b8235614d4381614c8c565b946020939093013593505050565b5f60208284031215614d61575f80fd5b81356001600160801b03811681146113c7575f80fd5b8015158114613516575f80fd5b5f60208284031215614d94575f80fd5b81356113c781614d77565b5f805f60608486031215614db1575f80fd5b8335614dbc81614c8c565b92506020840135614dcc81614c8c565b929592945050506040919091013590565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b0381118282101715614e1957614e19614ddd565b604052919050565b5f6001600160401b03821115614e3957614e39614ddd565b5060051b60200190565b5f8060408385031215614e54575f80fd5b8235915060208301356001600160401b03811115614e70575f80fd5b8301601f81018513614e80575f80fd5b8035614e93614e8e82614e21565b614df1565b8082825260208201915060208360051b850101925087831115614eb4575f80fd5b6020840193505b82841015614edf578335614ece81614c8c565b825260209384019390910190614ebb565b809450505050509250929050565b5f806001600160401b03841115614f0657614f06614ddd565b50601f8301601f1916602001614f1b81614df1565b915050828152838383011115614f2f575f80fd5b828260208301375f602084830101529392505050565b5f82601f830112614f54575f80fd5b6113c783833560208501614eed565b5f805f8060808587031215614f76575f80fd5b8435614f8181614c8c565b935060208501356001600160401b03811115614f9b575f80fd5b614fa787828801614f45565b93505060408501356001600160401b03811115614fc2575f80fd5b614fce87828801614f45565b949793965093946060013593505050565b5f8060408385031215614ff0575f80fd5b8235614ffb81614c8c565b915060208301356001600160401b03811115615015575f80fd5b8301601f81018513615025575f80fd5b61503485823560208401614eed565b9150509250929050565b5f6020828403121561504e575f80fd5b5035919050565b5f8060408385031215615066575f80fd5b823591506020830135614ccc81614d77565b5f8060408385031215615089575f80fd5b823561509481614c8c565b91506020830135614ccc81614d77565b5f80602083850312156150b5575f80fd5b82356001600160401b038111156150ca575f80fd5b8301601f810185136150da575f80fd5b80356001600160401b038111156150ef575f80fd5b8560208260051b8401011115615103575f80fd5b6020919091019590945092505050565b600181811c9082168061512757607f821691505b60208210810361514557634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b818103818111156110ed576110ed615194565b634e487b7160e01b5f52603160045260245ffd5b5f8151808452602084019350602083015f5b828110156152085781516001600160a01b03168652602095860195909101906001016151e1565b5093949350505050565b828152604060208201525f61522a60408301846151cf565b949350505050565b5f60208284031215615242575f80fd5b81516001600160401b03811115615257575f80fd5b8201601f81018413615267575f80fd5b8051615275614e8e82614e21565b8082825260208201915060208360051b850101925086831115615296575f80fd5b6020840193505b828410156152b857835182526020938401939091019061529d565b9695505050505050565b5f602082840312156152d2575f80fd5b5051919050565b5f602082840312156152e9575f80fd5b81516113c781614d77565b601f8211156126b057805f5260205f20601f840160051c810160208510156153195750805b601f840160051c820191505b818110156148da575f8155600101615325565b81516001600160401b0381111561535157615351614ddd565b6153658161535f8454615113565b846152f4565b6020601f821160018114615397575f83156153805750848201515b5f19600385901b1c1916600184901b1784556148da565b5f84815260208120601f198516915b828110156153c657878501518255602094850194600190920191016153a6565b50848210156153e357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b80820281158282048414176110ed576110ed615194565b634e487b7160e01b5f52601260045260245ffd5b5f8261542b5761542b615409565b500490565b5f8261543e5761543e615409565b500690565b5f60208284031215615453575f80fd5b81516113c781614c8c565b60208082526028908201527f4163636f756e7420697320616c7265616479206578636c756465642066726f6d604082015267207265776172647360c01b606082015260800190565b6020808252602e908201527f6d61785478416d6f756e742073686f756c64206265206c657373207468616e2060408201526d037b91032b8bab0b63990189012960951b606082015260800190565b808201808211156110ed576110ed615194565b85815284602082015260a060408201525f61552560a08301866151cf565b6001600160a01b0394909416606083015250608001529392505050565b5f805f60608486031215615554575f80fd5b5050815160208301516040909301519094929350919050565b5f82518060208501845e5f92019182525091905056fe42455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef42455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220da53c88dd18a7d2879839f47e294ad02f3f9f8e51dc6e7f2354f8cce7f825bcd64736f6c634300081a0033"
