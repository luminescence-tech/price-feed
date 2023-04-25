require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity:"0.8.19",
	allowUnlimitedContractSize: true,
	networks: {
		hardhat: {},
		// ETH_MAINNET: {
		// 	accounts: [`${process.env.PRIVATE_KEY}`],
		// 	url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		// },
		goerli: {
			accounts: [`0xfa4feaa8e7958c3ec039dc048cc0378e76738e4e215cdae4e312940d38982533`],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		}
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}