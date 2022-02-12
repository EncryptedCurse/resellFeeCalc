export default function calculateValues(formValues, transactionFeeRates) {
	const itemListPrice = +formValues.itemListPrice;

	const platformSellingFee = itemListPrice * (+formValues.commissionRate / 100) + transactionFeeRates.fixed[formValues.sellerLocation] || 0;
	const platformTransactionFee = (itemListPrice - platformSellingFee) * (transactionFeeRates.variable / 100) || 0;
	const platformFees = platformSellingFee + platformTransactionFee;

	const sellerPayout = itemListPrice - platformFees;
	const sellerProfit = sellerPayout - formValues.sellerPaidPrice;

	return {
		platformFees,
		sellerPayout,
		sellerProfit,
	};
}
