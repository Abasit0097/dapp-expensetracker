const abi = [
	{
		"inputs": [],
		"name": "currentBalance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amount",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			}
		],
		"name": "expense",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "EnterDetail",
				"type": "string"
			}
		],
		"name": "expenseHistory",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amount",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			}
		],
		"name": "income",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "EnterDetail",
				"type": "string"
			}
		],
		"name": "incomeHistory",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = abi;