// const Web3 = require('web3');

// let web3 = new Web3('https://goerli.infura.io/v3/c6e50d19a20b4d4594ec5fa893eeaf73');
// // let web3 = new Web3('https://localhost:8545');

// web3.eth.getAccounts((error, result) => {
//     console.log('error', error);
//     console.log('result', result);
// })


const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx')
const web3 = new Web3( new Web3.providers.HttpProvider('https://goerli.infura.io/v3/c6e50d19a20b4d4594ec5fa893eeaf73') )
web3.eth.defaultAccount = '0xeb1fE8Fa8c605956742802FD5A5Ab601097E38CE'
const amountToSend = 0.00100000

let details = {
    "to": '0xD5591343Daf628697B9b126d6819C2B7033A3F94',
    "value": 0.01e18,
    // "gas": 21000,
    // "gasPrice": 50 * 1000000000, 
    // "nonce": 11,
    // "chainId": 11243575 
  }

var tx = new EthereumTx(details)
tx.sign( Buffer.from('fe8039740138a400a309d0a8944eabc059ecb2bc7d83ac4749594a4bebe0449f', 'hex') )
var serializedTx = tx.serialize();
web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log);