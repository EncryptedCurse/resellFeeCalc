export default function calculateValues(formValues, sellingFeeRates, transactionFeeRates, salesTaxRates) {
	const itemListPrice = +formValues.itemListPrice;
	const itemShippingPrice = +formValues.itemShippingPrice;

	const buyerSalesTax = itemListPrice * ((salesTaxRates?.state + salesTaxRates?.local) / 100) || 0;
	const buyerShippingPrice = (formValues.itemShippingPriceResponsibility === 'buyer' && itemShippingPrice) || 0;
	const buyerTotal = itemListPrice + buyerShippingPrice + buyerSalesTax;

	const platformMainFee = buyerTotal * (sellingFeeRates?.main / 100) || 0;
	const platformSecondaryFee =
		(itemListPrice > sellingFeeRates?.secondaryThreshold
		&& +((buyerTotal - sellingFeeRates?.secondaryThreshold) * (sellingFeeRates?.secondary / 100))) || 0;
	const platformTransactionFee = transactionFeeRates.fixed;
	const platformFees = platformMainFee + platformSecondaryFee + platformTransactionFee;

	const sellerShippingPrice = (formValues.itemShippingPriceResponsibility === 'seller' && itemShippingPrice) || 0;
	const sellerPayout = itemListPrice - platformFees - sellerShippingPrice;
	const sellerProfit = sellerPayout - formValues.sellerPaidPrice;

	return {
		buyerSalesTax,
		buyerTotal,
		platformFees,
		sellerPayout,
		sellerProfit,
	};
}
