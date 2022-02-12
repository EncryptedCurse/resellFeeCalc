const feeConstants = {
	selling: {
		regular: {
			gameConsoles: {
				main: 12.55,
				secondary: 2.35,
				secondaryThreshold: 7500,
			},
			pcComponents: {
				main: 12.55,
				secondary: 2.35,
				secondaryThreshold: 7500,
			},
			tradingCards: {
				main: 12.35,
				secondary: 2.35,
				secondaryThreshold: 7500,
			},
			sneakers: {
				main: 8.0,
				secondary: null,
				secondaryThreshold: null,
			},
		},
		starter: {
			gameConsoles: {
				main: 12.55,
				secondary: 2.35,
				secondaryThreshold: 7500,
			},
			pcComponents: {
				main: 12.55,
				secondary: 2.35,
				secondaryThreshold: 7500,
			},
			tradingCards: {
				main: 12.35,
				secondary: 2.35,
				secondaryThreshold: 7500,
			},
			sneakers: {
				main: 7.0,
				secondary: null,
				secondaryThreshold: null,
			},
		},
		basic: {
			gameConsoles: {
				main: 6.55,
				secondary: 2.35,
				secondaryThreshold: 2500,
			},
			pcComponents: {
				main: 8.7,
				secondary: 2.35,
				secondaryThreshold: 2500,
			},
			tradingCards: {
				main: 11.5,
				secondary: 2.35,
				secondaryThreshold: 2500,
			},
			sneakers: {
				main: 7.0,
				secondary: null,
				secondaryThreshold: null,
			},
		},
	},
	transaction: {
		fixed: 0.3,
	},
};

export default feeConstants;
