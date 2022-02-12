export default function calculateValues(formValues, sellingFeeRates, transactionFeeRates) {
	const itemListPrice = +formValues.itemListPrice;

	const platformSellingFee = itemListPrice * (sellingFeeRates[formValues.sellerLevel] / 100);
	const platformTransactionFee = itemListPrice * (transactionFeeRates.variable / 100);
	const platformFees = platformSellingFee + platformTransactionFee;

	const sellerPayout = itemListPrice - platformFees;
	const sellerProfit = sellerPayout - formValues.sellerPaidPrice;

	return {
		platformFees,
		sellerPayout,
		sellerProfit,
	};
}
