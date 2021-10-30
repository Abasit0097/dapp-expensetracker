import React, { useState } from "react";
const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/39f4588fa9b14c9ab5888675d3d58d43';

const web3 = new Web3(rpcURL);

//const account = '0x679083d5cB256f43826f4b1Dc7dE84Fc8C575328';

const contractAddress = '0x971836602d5dff7c51c5672129278a0f3b329719';

let ABI = require('./contractABI.js');

function TotalBalance() {

    const [balance, setbalance] = useState(0);

    function checkingTotalBalance() {
        async function getBalance() {
            try {
                const contract = new web3.eth.Contract(ABI, contractAddress);
                let balance = await contract.methods.currentBalance().call();
                console.log("current balance", balance);
                setbalance(balance);
            }
            catch (error) {
                console.log("error is", error);
            }
        }

        getBalance();

    }

    return (
        <div>
            <div>
                {balance}
            </div>

            <button onClick={() =>
                checkingTotalBalance()}>
                Net Balance
            </button>


        </div>
    )
}

export default TotalBalance;