const web3 = require('web3');
const SafeMath = artifacts.require('./SafeMath.sol');
const Beethoven = artifacts.require('./Beethoven.sol');
const Magi = artifacts.require('./Magi.sol');
// const Esplanade = artifacts.require('./Esplanade.sol');
// const DUO = artifacts.require('./DUO.sol');
const TokenA = artifacts.require('./TokenA.sol');
const TokenB = artifacts.require('./TokenB.sol');
const InitParas = require('./contractInitParas.json');
const Beethoven6MInit = InitParas['Beethoven6M'];
// const BeethovenPPTMInit = InitParas['BeethovenPPT'];
// const DuoInit = InitParas['DUO'];
// const MagiInit = InitParas['Magi'];
// const RoleManagerInit = InitParas['RoleManager'];

module.exports = async (deployer, network, accounts) => {
	let creator;
	// let pf1, pf2, pf3;
	let fc;

	if (network == 'kovan') {
		creator = '0x00D8d0660b243452fC2f996A892D3083A903576F';
		// pf1 = '0x0022BFd6AFaD3408A1714fa8F9371ad5Ce8A0F1a';
		// pf2 = '0x002002812b42601Ae5026344F0395E68527bb0F8';
		// pf3 = '0x00476E55e02673B0E4D2B474071014D5a366Ed4E';
		fc = '0x0';
	}
	else if (network == 'ropsten') {
		creator = '0x00dCB44e6EC9011fE3A52fD0160b59b48a11564E';
		// pf1 = '0x00f125c2C1b08c2516e7A7B789d617ad93Fdf4C0';
		// pf2 = '0x002cac65031CEbefE8233672C33bAE9E95c6dC1C';
		// pf3 = '0x0076c03e1028F92f8391029f15096026bd3bdFd2';
		fc = '0x0';
	}
	else if (network == 'development' || network == 'coverage') {
		creator = accounts[0];
		// pf1 = accounts[1];
		// pf2 = accounts[2];
		// pf3 = accounts[3];
		fc = accounts[4];
	}

	console.log('creator: '+ creator);

	// 74748
	await deployer.deploy(SafeMath, {
		from: creator
	});
	await deployer.link(SafeMath, [Beethoven, Magi]);

	// // 950268
	// await deployer.deploy(
	// 	DUO,
	// 	web3.utils.toWei(DuoInit.initSupply),
	// 	DuoInit.tokenName,
	// 	DuoInit.tokenSymbol,
	// 	{
	// 		from: creator
	// 	}
	// );

	// 4700965
	// await deployer.deploy(Esplanade, RoleManagerInit.optCoolDown, {
	// 	from: creator
	// });

	// 6709109
	// await deployer.deploy(
	// 	Beethoven,
	// 	Esplanade.address,
	// 	fc,
	// 	BeethovenInit.alphaInBP,
	// 	web3.utils.toWei(BeethovenInit.couponRate),
	// 	web3.utils.toWei(BeethovenInit.hp),
	// 	web3.utils.toWei(BeethovenInit.hu),
	// 	web3.utils.toWei(BeethovenInit.hd),
	// 	BeethovenInit.comm,
	// 	BeethovenInit.pd,
	// 	BeethovenInit.optCoolDown,
	// 	BeethovenInit.pxFetchCoolDown,
	// 	BeethovenInit.iteGasTh,
	// 	BeethovenInit.preResetWaitBlk,
	// 	web3.utils.toWei(BeethovenInit.minimumBalance + ''),
	// 	{ from: creator }
	// );
	await deployer.deploy(
		Beethoven,
		Beethoven6MInit.name,
		Beethoven6MInit.maturity,
		'0xD728681490d63582047A6Cd2fC80B1343C6AbA20', // Esplanade.address, 
		fc,
		Beethoven6MInit.alphaInBP,
		web3.utils.toWei(Beethoven6MInit.couponRate),
		web3.utils.toWei(Beethoven6MInit.hp),  // 1.013 for perpetual 0 for Term
		web3.utils.toWei(Beethoven6MInit.hu),
		web3.utils.toWei(Beethoven6MInit.hd),
		Beethoven6MInit.comm,
		Beethoven6MInit.pd,
		Beethoven6MInit.optCoolDown,
		Beethoven6MInit.pxFetchCoolDown,
		Beethoven6MInit.iteGasTh,
		Beethoven6MInit.preResetWaitBlk,
		web3.utils.toWei(Beethoven6MInit.minimumBalance + ''),
		{ from: creator }
	);
	// 2575678
	// await deployer.deploy(
	// 	Magi,
	// 	creator,
	// 	pf1,
	// 	pf2,
	// 	pf3,
	// 	Esplanade.address,
	// 	MagiInit.pxFetchCoolDown,
	// 	MagiInit.optCoolDown,
	// 	{
	// 		from: creator
	// 	}
	// );

	// // 1094050
	await deployer.deploy(
		TokenA,
		Beethoven6MInit.TokenA.tokenName,
		Beethoven6MInit.TokenA.tokenSymbol,
		Beethoven.address,
		{
			from: creator
		}
	);
	// 1094370
	await deployer.deploy(
		TokenB,
		Beethoven6MInit.TokenB.tokenName,
		Beethoven6MInit.TokenB.tokenSymbol,
		Beethoven.address,
		{ from: creator }
	);
};
