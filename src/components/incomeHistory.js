import React, { useState } from "react";
const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/39f4588fa9b14c9ab5888675d3d58d43';

const web3 = new Web3(rpcURL);

//const account = '0x679083d5cB256f43826f4b1Dc7dE84Fc8C575328';

const contractAddress = '0x971836602d5dff7c51c5672129278a0f3b329719';

let ABI = require('./contractABI.js');

function IncomeHistoryTransaction() {

    const [data, setdata] = useState(0);
    let [details, setdetails] = useState();
    function checkingHistory() {
        async function getHistory() {
            try {
                const contract = new web3.eth.Contract(ABI, contractAddress);
                let history = await contract.methods.incomeHistory(details).call();
                console.log("history", history);
                setdata(history);
            }
            catch (error) {
                console.log("error is", error);
            }
        }

        getHistory();

    }

    return (
        <div>
            <div>
                {data}
            </div>
            <div>
                <input type="details" value={details} id="ex" onChange={(e) => setdetails(e.target.value)}
                    placeholder="Enter Income Details..." />
            </div>
            <button onClick={() => {
                if (details !== "") {
                    checkingHistory()

                }
                else alert("please enter Income detail")
            }
            }>
                Get Income History
            </button>


        </div>
    )
}

export default IncomeHistoryTransaction;