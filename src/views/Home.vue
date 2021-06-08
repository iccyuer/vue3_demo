<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, onMounted, watch, computed } from "vue";
import Web3 from "web3";

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
			var web3Provider;
			if (window.ethereum) {
				web3Provider = window.ethereum;
				try {
					// 请求用户授权  important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					await window.ethereum.enable();
				} catch (error) {
					// 用户不授权时
					console.error("User denied account access");
				}
			} else if (window.web3) {
				// 老版 MetaMask Legacy dapp browsers...
				web3Provider = window.web3.currentProvider;
			} else {
				web3Provider = new Web3.providers.HttpProvider(
					"http://localhost:8545"
				);
			}
			let web3js = new Web3(web3Provider); //web3js就是你需要的web3实例

			web3js.eth.getAccounts(function (error, result) {
				if (!error) console.log(result); //授权成功后result能正常获取到账号了
			});
		});
	},
};
</script>
