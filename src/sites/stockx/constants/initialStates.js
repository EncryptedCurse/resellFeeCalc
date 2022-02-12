const formValues = {
	sellerLevel: '1',
	sellerPaidPrice: '',
	itemListPrice: '',
};

const calculatedValues = {
	platformFees: 0,
	sellerPayout: 0,
	sellerProfit: 0,
};

const initialStates = {
	formValues,
	calculatedValues,
};

export default initialStates;
