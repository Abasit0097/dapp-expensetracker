import React, { useState } from "react";
//require("dotenv").config();
const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/39f4588fa9b14c9ab5888675d3d58d43';
const Tx = require("ethereumjs-tx").Transaction;

const web3 = new Web3(rpcURL);

const account = '0x679083d5cB256f43826f4b1Dc7dE84Fc8C575328';

const contractAddress = '0x971836602d5dff7c51c5672129278a0f3b329719';
//const abc = process.env.privateKey; react gives error if I import PVT key using env method
const privateKey = Buffer.from("ac416838cabab81a0032ee5351aa600ec2c39e33a9aa17b496b8b0642cfed05f","hex");

let ABI = require('./contractABI.js');

function ExpenseTrans() {

    let [amount, setamount] = useState();
    let [detail, setdetail] = useState();

function doTranx() {
async function addExpense() {
    try {
        const contract = new web3.eth.Contract(ABI, contractAddress);
        const txCount = await web3.eth.getTransactionCount(account);
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(100000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            to: contractAddress,
            data: contract.methods.expense(amount, detail).encodeABI()
        };
        
        const tx = new Tx(txObject, { 'chain': 'ropsten', hardfork: 'petersburg' });
        tx.sign(privateKey);

        const serialized = tx.serialize();
        const raw = '0x' + serialized.toString('hex');

        const signedTransaction = await web3.eth.sendSignedTransaction(raw);
		console.log("signed transaction = ", signedTransaction);

    }
    catch (error){
        console.log("error = ", error)
    }
}

addExpense();
}
return (
    <div>
            <div>
                <input type="amount" value={amount} id="ex" onChange={(e) => setamount(e.target.value)}
                    placeholder="Enter expense amount" />
            </div>
            <div>
                <input type="detail" value={detail} id="ex" onChange={(e) => setdetail(e.target.value)}
                    placeholder="Enter Expense Details..." />
            </div>
            <button onClick={() => {
                if (amount > 0) {
                    doTranx()
                }
                else alert("please enter valid amount")
            }
            }>
                Expense Transaction
            </button>

        </div>
)
}

export default ExpenseTrans;