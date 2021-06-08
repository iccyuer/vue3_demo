const Web3 = require('web3');

let web3 = new Web3('https://goerli.infura.io/v3/c6e50d19a20b4d4594ec5fa893eeaf73');
// let web3 = new Web3('https://localhost:8545');

web3.eth.getAccounts((error, result) => {
    console.log('error', error);
    console.log('result', result);
})