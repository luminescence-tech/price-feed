require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity:"0.8.19",
	allowUnlimitedContractSize: true,
	networks: {
		hardhat: {},
		// ETH_MAINNET: {
		// 	accounts: [],
		// 	url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		// },
		goerli: {
			accounts: [`0x${process.env.PRIVATE_KEY}`],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		}
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}