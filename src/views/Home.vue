<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, onMounted, watch, computed } from "vue";
import Web3 from "web3";
import Tx from "ethereumjs-tx";
console.log("Tx", Tx);
console.log("Web3", Web3);

export default {
	name: "Home",
	components: {
		HelloWorld,
	},

	setup() {
		onMounted(async () => {
			console.log("onMounted");

			// if (typeof web3 !== "undefined") {
			// 	console.log("已经存在web3");
			// 	web3 = new Web3(web3.currentProvider);
			// 	// web3 = new Web3(window.ethereum);
			// } else {
			// 	// set the provider you want from Web3.providers
			// 	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
			// }
			// console.log('web3', web3);
			// console.log('a,', web3.eth.accounts.wallet);
			// try {
			//     let result = await web3.eth.getAccounts();
			//     console.log('hhi', result);
			//     web3.eth.getAccounts((error, result) => {
			//         console.log('error', error);
			//         console.log('result', result);
			//     })
			//     web3.eth.getCoinbase((error, result) => {
			//         console.log('error', error);
			//         console.log('result', result);
			//     })
			// } catch (err) {
			//     console.log('err', err);
			// }
			/* 新版的方式 */
			// var web3Provider;
			// if (window.ethereum) {
			// 	web3Provider = window.ethereum;
			// 	try {
			// 		// 请求用户授权  important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			// 		await window.ethereum.enable();
			// 	} catch (error) {
			// 		// 用户不授权时
			// 		console.error("User denied account access");
			// 	}
			// } else if (window.web3) {
			// 	// 老版 MetaMask Legacy dapp browsers...
			// 	web3Provider = window.web3.currentProvider;
			// } else {
			// 	web3Provider = new Web3.providers.HttpProvider(
			// 		"http://localhost:8545"
			// 	);
			// }
			// let web3 = new Web3(web3Provider); //web3就是你需要的web3实例

			// console.log("web3", web3);
			// console.log("accounts", web3.eth.accounts);

			// web3.eth.getAccounts(function (error, result) {
			// 	if (!error) console.log("acs", result); //授权成功后result能正常获取到账号了
			// });

			// // web3.eth.getGasPrice().then((result) => {
			// // 	console.log("wei: " + result);
			// // 	console.log("ether: " + web3.utils.fromWei(result, "ether"));
			// // });
			// let gas = await web3.eth.getGasPrice();

			// console.log("wei: " + gas);
			// console.log("ether: " + web3.utils.fromWei(gas, "gwei"));

			// var abi = [
			// 	{
			// 		constant: true,
			// 		inputs: [],
			// 		name: "name",
			// 		outputs: [{ name: "", type: "string" }],
			// 		payable: false,
			// 		stateMutability: "view",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: false,
			// 		inputs: [
			// 			{ name: "spender", type: "address" },
			// 			{ name: "value", type: "uint256" },
			// 		],
			// 		name: "approve",
			// 		outputs: [{ name: "", type: "bool" }],
			// 		payable: false,
			// 		stateMutability: "nonpayable",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: true,
			// 		inputs: [],
			// 		name: "totalSupply",
			// 		outputs: [{ name: "", type: "uint256" }],
			// 		payable: false,
			// 		stateMutability: "view",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: false,
			// 		inputs: [
			// 			{ name: "sender", type: "address" },
			// 			{ name: "recipient", type: "address" },
			// 			{ name: "amount", type: "uint256" },
			// 		],
			// 		name: "transferFrom",
			// 		outputs: [{ name: "", type: "bool" }],
			// 		payable: false,
			// 		stateMutability: "nonpayable",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: true,
			// 		inputs: [],
			// 		name: "decimals",
			// 		outputs: [{ name: "", type: "uint8" }],
			// 		payable: false,
			// 		stateMutability: "view",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: false,
			// 		inputs: [
			// 			{ name: "spender", type: "address" },
			// 			{ name: "addedValue", type: "uint256" },
			// 		],
			// 		name: "increaseAllowance",
			// 		outputs: [{ name: "", type: "bool" }],
			// 		payable: false,
			// 		stateMutability: "nonpayable",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: false,
			// 		inputs: [{ name: "value", type: "uint256" }],
			// 		name: "burn",
			// 		outputs: [],
			// 		payable: false,
			// 		stateMutability: "nonpayable",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: true,
			// 		inputs: [{ name: "account", type: "address" }],
			// 		name: "balanceOf",
			// 		outputs: [{ name: "", type: "uint256" }],
			// 		payable: false,
			// 		stateMutability: "view",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: true,
			// 		inputs: [],
			// 		name: "symbol",
			// 		outputs: [{ name: "", type: "string" }],
			// 		payable: false,
			// 		stateMutability: "view",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: false,
			// 		inputs: [
			// 			{ name: "spender", type: "address" },
			// 			{ name: "subtractedValue", type: "uint256" },
			// 		],
			// 		name: "decreaseAllowance",
			// 		outputs: [{ name: "", type: "bool" }],
			// 		payable: false,
			// 		stateMutability: "nonpayable",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: false,
			// 		inputs: [
			// 			{ name: "recipient", type: "address" },
			// 			{ name: "amount", type: "uint256" },
			// 		],
			// 		name: "transfer",
			// 		outputs: [{ name: "", type: "bool" }],
			// 		payable: false,
			// 		stateMutability: "nonpayable",
			// 		type: "function",
			// 	},
			// 	{
			// 		constant: true,
			// 		inputs: [
			// 			{ name: "owner", type: "address" },
			// 			{ name: "spender", type: "address" },
			// 		],
			// 		name: "allowance",
			// 		outputs: [{ name: "", type: "uint256" }],
			// 		payable: false,
			// 		stateMutability: "view",
			// 		type: "function",
			// 	},
			// 	{
			// 		inputs: [
			// 			{ name: "name", type: "string" },
			// 			{ name: "symbol", type: "string" },
			// 			{ name: "decimals", type: "uint8" },
			// 			{ name: "totalSupply", type: "uint256" },
			// 			{ name: "feeReceiver", type: "address" },
			// 			{ name: "tokenOwnerAddress", type: "address" },
			// 		],
			// 		payable: true,
			// 		stateMutability: "payable",
			// 		type: "constructor",
			// 	},
			// 	{
			// 		anonymous: false,
			// 		inputs: [
			// 			{ indexed: true, name: "from", type: "address" },
			// 			{ indexed: true, name: "to", type: "address" },
			// 			{ indexed: false, name: "value", type: "uint256" },
			// 		],
			// 		name: "Transfer",
			// 		type: "event",
			// 	},
			// 	{
			// 		anonymous: false,
			// 		inputs: [
			// 			{ indexed: true, name: "owner", type: "address" },
			// 			{ indexed: true, name: "spender", type: "address" },
			// 			{ indexed: false, name: "value", type: "uint256" },
			// 		],
			// 		name: "Approval",
			// 		type: "event",
			// 	},
			// ];
			// var CoinContract = new web3.eth.Contract(
			// 	abi,
			// 	"0xc3d789f83f8ad3be2de64a2c8bd77822f1946fb7"
			// );
			// console.log("erere", CoinContract);
			// let send = await CoinContract.methods
			// 	.transfer(
			// 		"0xD5591343Daf628697B9b126d6819C2B7033A3F94",
			// 		"10000000000000000"
			// 	)
			// 	.send({
			// 		from: "0xeb1fE8Fa8c605956742802FD5A5Ab601097E38CE",
			// 	});
			// console.log("transfer", send);
			// let fnn = async()=>{
			//     let transferFrom = CoinContract.methods.transferFrom('0xeb1fE8Fa8c605956742802FD5A5Ab601097E38CE', '0xD5591343Daf628697B9b126d6819C2B7033A3F94', 0.5e18)
			//     .send({from: '0xeb1fE8Fa8c605956742802FD5A5Ab601097E38CE'})
			// .on('receipt', function(res){
			//     console.log('receipt', res);
			// });
			//     console.log('transferFrom', transferFrom);
			// }
			// fnn();
			// web3.eth
			// 	.getAccounts()
			// 	.then((accounts) => {
			// 		return web3.eth.sendTransaction({
			// 			from: accounts[0],
			// 			to: "0xD5591343Daf628697B9b126d6819C2B7033A3F94",
			// 			value: web3.utils.toHex(
			// 				web3.utils.toWei("0.01", "ether")
			// 			),
			// 			gasLimit: web3.utils.toHex(21000),
			// 			// gasPrice: web3.utils.toHex(
			// 			// 	web3.utils.fromWei(gas, "gwei")
			// 			// ),
			// 			gasPrice: 500000000000
			// 		});
			// 	})
			// 	.then(console.log)
			// 	.catch(console.log);

			// const account1 = "0xeb1fE8Fa8c605956742802FD5A5Ab601097E38CE"; // Your account address 1
			// const account2 = "0xD5591343Daf628697B9b126d6819C2B7033A3F94"; // Your account address 2
			// const privateKey1 = Buffer.from('fe8039740138a400a309d0a8944eabc059ecb2bc7d83ac4749594a4bebe0449f', 'hex')
			// web3.eth.getTransactionCount(account1, (err, txCount) => {
			// 	// 创建交易对象
			// 	const txObject = {
			// 		nonce: web3.utils.toHex(txCount),
			// 		to: account2,
			// 		value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
			// 		// gasLimit: web3.utils.toHex(21000),
			// 		// gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
			// 	};

			// 	// 签署交易
			// 	const tx = new Tx(txObject, {
			// 		chain: "ropsten",
			// 		hardfork: "petersburg",
			// 	});
			// 	tx.sign(privateKey1);

			// 	const serializedTx = tx.serialize();
			// 	const raw = "0x" + serializedTx.toString("hex");

			// 	// 广播交易
			// 	web3.eth.sendSignedTransaction(raw, (err, txHash) => {
			// 		console.log("txHash:", txHash);
			// 		// 可以去ropsten.etherscan.io查看交易详情
			// 	});
			// });
		});
	},
};
</script>
