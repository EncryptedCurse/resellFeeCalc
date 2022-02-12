const formValues = {
	buyerState: 'average',
	sellerLevel: 'regular',
	itemCategory: '',
	sellerPaidPrice: '',
	itemListPrice: '',
	itemShippingPrice: '',
	itemShippingPriceResponsibility: 'buyer',
	customTaxRate: '',
};

const calculatedValues = {
	buyerSalesTax: 0,
	buyerTotal: 0,
	platformFees: 0,
	sellerPayout: 0,
	sellerProfit: 0,
};

const initialStates = {
	formValues,
	calculatedValues,
};

export default initialStates;
