const formValues = {
	sellerPaidPrice: '',
	itemListPrice: '',
	itemShippingPrice: '',
	itemShippingPriceResponsibility: 'buyer',
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
