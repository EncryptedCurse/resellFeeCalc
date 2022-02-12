export default function calculateValues(formValues, sellingFeeRate, transactionFeeRates) {
	const itemListPrice = +formValues.itemListPrice;
	const itemShippingPrice = +formValues.itemShippingPrice;

	const platformSellingFee = itemListPrice * (sellingFeeRate / 100) || 0;
	const platformTransactionFee = itemListPrice * (transactionFeeRates.variable / 100) + transactionFeeRates.fixed || 0;
	const platformFees = platformSellingFee + platformTransactionFee;

	const sellerShippingPrice = (formValues.itemShippingPriceResponsibility === 'seller' && itemShippingPrice) || 0;
	const sellerPayout = itemListPrice - platformFees - sellerShippingPrice;
	const sellerProfit = sellerPayout - formValues.sellerPaidPrice;

	return {
		platformFees,
		sellerPayout,
		sellerProfit,
	};
}
