module.exports = {
	migrations_directory: './migrations',
	networks: {
		development: {
			host: 'localhost',
			port: 8545,
			network_id: '*', // Match any network id,
			gas: 7990000
		},
		kovan: {
			host: 'localhost',
			port: 8545,
			network_id: '*', // Match any network id,
			from: '0x00D8d0660b243452fC2f996A892D3083A903576F' // kovan
			// gas:5000000
		},
		ropsten: {
			host: 'localhost',
			port: 8545,
			network_id: '*', // Match any network id,
			from: '0x00dCB44e6EC9011fE3A52fD0160b59b48a11564E' //ropsten
			// gas:5000000
		},
		live: {
			host: 'localhost',
			port: 8545,
			network_id: '*' // Match any network id,
			// gas:5000000
		},
		coverage: {
			host: 'localhost',
			network_id: '*',
			port: 8555,
			gas: 0xfffffffffff,
			gasPrice: 0x01
		}
	}
};
