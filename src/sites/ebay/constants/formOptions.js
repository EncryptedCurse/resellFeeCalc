const sellerLevel = [
	{ value: 'regular', content: 'Regular' },
	{ value: 'starter', content: 'Store: Starter' },
	{ value: 'basic', content: 'Store: Basic, Premium, Anchor, Enterprise' },
];

const itemCategory = [
	{ value: 'gameConsoles', content: 'Video game consoles' },
	{ value: 'pcComponents', content: 'PC components' },
	{ value: 'tradingCards', content: 'Trading cards' },
	{ value: 'sneakers', content: 'Sneakers' },
];

const itemShippingPriceResponsibility = [
	{ value: 'buyer', content: 'Buyer' },
	{ value: 'seller', content: 'Seller' },
];

const buyerState = [
	{ value: 'average', content: 'Average' },
	// { value: 'custom', content: 'Custom' },
	{ value: 'AL', content: 'AL - Alabama' },
	{ value: 'AK', content: 'AK - Alaska' },
	{ value: 'AZ', content: 'AZ - Arizona' },
	{ value: 'AR', content: 'AR - Arkansas' },
	{ value: 'CA', content: 'CA - California' },
	{ value: 'CO', content: 'CO - Colorado' },
	{ value: 'CT', content: 'CT - Connecticut' },
	{ value: 'DE', content: 'DE - Delaware' },
	{ value: 'DC', content: 'DC - Washington, D.C.' },
	{ value: 'FL', content: 'FL - Florida' },
	{ value: 'GA', content: 'GA - Georgia' },
	{ value: 'HI', content: 'HI - Hawaii' },
	{ value: 'ID', content: 'ID - Idaho' },
	{ value: 'IL', content: 'IL - Illinois' },
	{ value: 'IN', content: 'IN - Indiana' },
	{ value: 'IA', content: 'IA - Iowa' },
	{ value: 'KS', content: 'KS - Kansas' },
	{ value: 'KY', content: 'KY - Kentucky' },
	{ value: 'LA', content: 'LA - Louisiana' },
	{ value: 'ME', content: 'ME - Maine' },
	{ value: 'MD', content: 'MD - Maryland' },
	{ value: 'MA', content: 'MA - Massachusetts' },
	{ value: 'MI', content: 'MI - Michigan' },
	{ value: 'MN', content: 'MN - Minnesota' },
	{ value: 'MS', content: 'MS - Mississippi' },
	{ value: 'MO', content: 'MO - Missouri' },
	{ value: 'MT', content: 'MT - Montana' },
	{ value: 'NE', content: 'NE - Nebraska' },
	{ value: 'NV', content: 'NV - Nevada' },
	{ value: 'NH', content: 'NH - New Hampshire' },
	{ value: 'NJ', content: 'NJ - New Jersey' },
	{ value: 'NM', content: 'NM - New Mexico' },
	{ value: 'NY', content: 'NY - New York' },
	{ value: 'NC', content: 'NC - North Carolina' },
	{ value: 'ND', content: 'ND - North Dakota' },
	{ value: 'OH', content: 'OH - Ohio' },
	{ value: 'OK', content: 'OK - Oklahoma' },
	{ value: 'OR', content: 'OR - Oregon' },
	{ value: 'PA', content: 'PA - Pennsylvania' },
	{ value: 'RI', content: 'RI - Rhode Island' },
	{ value: 'SC', content: 'SC - South Carolina' },
	{ value: 'SD', content: 'SD - South Dakota' },
	{ value: 'TN', content: 'TN - Tennessee' },
	{ value: 'TX', content: 'TX - Texas' },
	{ value: 'UT', content: 'UT - Utah' },
	{ value: 'VT', content: 'VT - Vermont' },
	{ value: 'VA', content: 'VA - Virginia' },
	{ value: 'WA', content: 'WA - Washington' },
	{ value: 'WV', content: 'WV - West Virginia' },
	{ value: 'WI', content: 'WI - Wisconsin' },
	{ value: 'WY', content: 'WY - Wyoming' },
];

const formOptions = {
	sellerLevel,
	itemCategory,
	itemShippingPriceResponsibility,
	buyerState,
};

export default formOptions;
