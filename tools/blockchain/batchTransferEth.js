const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

let provider = new HDWalletProvider(
    'fe8039740138a400a309d0a8944eabc059ecb2bc7d83ac4749594a4bebe0449f',
    // 'https://goerli.infura.io/v3/360b702766714dd49ff12864958d44f1'
    // 'http://8.142.115.123'
    'http://47.89.245.197'
);
const web3 = new Web3(provider);

let tragerAddress = [
    "0xD5591343Daf628697B9b126d6819C2B7033A3F94",
    // "0x152db915FD2f51160C7f4Cb849Bb8a2748a7fc65"
]
let amount = 0.01e18; // 0.01eth

let run = async () => {
    let accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts);

    let balance = await web3.eth.getBalance(accounts[0]);
    console.log('balance', balance);

    let getNetworkType = await web3.eth.net.getNetworkType();
    console.log('getNetworkType', getNetworkType);

    let getChainId = await web3.eth.getChainId();
    console.log('getChainId', getChainId);
    let send = async (to) => {
        try {
            
            // let result = await web3.eth.sendTransaction({
            //     from: accounts[0],
            //     to: to,
            //     value: amount
            // })
            // console.log('result', result);
            // console.log(`success: ${accounts[0]} --> ${to}, amount: ${amount} transactionHash: ${result.transactionHash}`);
        } catch(err) {
            // console.log('err', err);
            console.log(`error: ${accounts[0]} --> ${to}, amount: ${amount} ${err}`);
        }
    }
    let index = 0;
    while (index < tragerAddress.length) {
        await send(tragerAddress[index]);
        index ++;
    }
}
run();