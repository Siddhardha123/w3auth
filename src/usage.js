import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
const clientId = "BFL3PdgaNapy8ZLWvZ6NNy1njWCbBVI8uD6EH9W5VY-fK9PbwnC0PEIoEkrtn1n3K7rF0PweUlI1posZD_EbVp8";
const web3auth = new Web3Auth({
	clientId,
	chainConfig: { // this is ethereum chain config, change if other chain(Solana, Polygon)
		chainNamespace: CHAIN_NAMESPACES.EIP155,
		chainId: "0x1",
		rpcTarget: "https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c",
	},
});
await web3auth.initModal();

// call below line when user clicks on login button
const provider = await web3auth.connect();

// if provider is not null then user logged in successfully
export default provider