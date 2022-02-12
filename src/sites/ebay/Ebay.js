/* React */
import React, { useState, useEffect, useMemo } from 'react';

/* functions */
import calculateValues from './calculateValues';
import { useSearchParams } from 'react-router-dom';
import {
	mergeSearchParams,
	useFormChangeHandler,
	useValueCalculationHandler,
	intersperseArray,
	formatCurrency,
} from 'functions/utilities';

/* components */
import { VStack, Divider } from '@chakra-ui/react';
import FormLabelControl from 'components/FormLabelControl';
import MapSelect from 'components/MapSelect';
import CurrencyInput from 'components/CurrencyInput';
import PercentInput from 'components/PercentInput';
import RadioButtonGroup from 'components/RadioButtonGroup';
import CurrencyLineItem from 'components/CurrencyLineItem';
import LinkButtonGroup from 'components/LinkButtonGroup';
import BottomTooltip from 'components/BottomTooltip';
import FormActionButtons from 'components/FormActionButtons';

/* constants */
import initialStates from './constants/initialStates';
import salesTaxConstants from 'constants/salesTaxConstants';
import feeConstants from './constants/feeConstants';
import formOptions from './constants/formOptions';
import links from './constants/links';
import { lineItemProps, linkButtonGroupProps } from 'sites/props';

export default function Ebay() {
	/* states + hooks */
	const [searchParams] = useSearchParams();
	const [formValues, setFormValues] = useState(mergeSearchParams(initialStates.formValues, searchParams));
	const [calculatedValues, setCalculatedValues] = useState(initialStates.calculatedValues);
	const [sellingFeeRates, setSellingFeeRates] = useState();
	const [salesTaxRates, setSalesTaxRates] = useState();
	const transactionFeeRates = feeConstants.transaction;

	/* handlers */
	const handleFormChange = useFormChangeHandler(setFormValues);
	const handleValueCalculation = useValueCalculationHandler(setCalculatedValues, calculateValues);

	/* side effects */
	useEffect(
		() => setSellingFeeRates(feeConstants.selling[formValues.sellerLevel][formValues.itemCategory]),
		[formValues.sellerLevel, formValues.itemCategory]
	);

	useEffect(
		() => setSalesTaxRates(salesTaxConstants[formValues.buyerState]),
		[formValues.buyerState]
	);

	useEffect(
		() => handleValueCalculation(formValues, sellingFeeRates, transactionFeeRates, salesTaxRates),
		[
			sellingFeeRates,
			salesTaxRates,
			formValues.itemListPrice,
			formValues.sellerPaidPrice,
			formValues.itemShippingPrice,
			formValues.itemShippingPriceResponsibility,
		]
	);

	/* JSX elements */
	const FeeRates = useMemo(() => {
		let elements = [];

		if (sellingFeeRates?.main) {
			elements.push(
				<BottomTooltip label="Main rate">{sellingFeeRates?.main}%</BottomTooltip>
			);
		}

		if (sellingFeeRates?.secondaryThreshold
			&& formValues.itemListPrice > sellingFeeRates?.secondaryThreshold) {
			const tooltipLabel =
				`Secondary rate (on list price over ${formatCurrency(sellingFeeRates?.secondaryThreshold)})`;
			elements.push(
				<BottomTooltip label={tooltipLabel}>{sellingFeeRates?.secondary}%</BottomTooltip>
			);
		}

		if (formValues.itemCategory !== 'sneakers') {
			elements.push(
				<BottomTooltip label="Transaction fee">{formatCurrency(transactionFeeRates.fixed)}</BottomTooltip>
			);
		}

		return ['(', ...intersperseArray(elements, ' + '), ')'];
	}, [sellingFeeRates]);

	const TaxRates = useMemo(() => {
		let elements = [];

		if (salesTaxRates?.state) {
			elements.push(
				<BottomTooltip label="State rate">{salesTaxRates?.state}%</BottomTooltip>
			);
		}

		if (salesTaxRates?.local) {
			elements.push(
				<BottomTooltip label="Local rate">{salesTaxRates?.local}%</BottomTooltip>
			);
		}

		return ['(', ...intersperseArray(elements, ' + '), ')'];
	}, [salesTaxRates]);

	/* render */
	return (
		<>
			{/* form controls */}
			<FormLabelControl label="Seller level">
				<MapSelect
					name="sellerLevel"
					options={formOptions.sellerLevel}
					value={formValues.sellerLevel}
					onChange={handleFormChange}
				/>
			</FormLabelControl>
			<FormLabelControl label="Category">
				<MapSelect
					name="itemCategory"
					options={formOptions.itemCategory}
					value={formValues.itemCategory}
					onChange={handleFormChange}
					placeholder
				/>
			</FormLabelControl>
			<FormLabelControl label="Paid price">
				<CurrencyInput
					name="sellerPaidPrice"
					value={formValues.sellerPaidPrice}
					onChange={handleFormChange}
				/>
			</FormLabelControl>
			<FormLabelControl label="List price">
				<CurrencyInput
					name="itemListPrice"
					value={formValues.itemListPrice}
					onChange={handleFormChange}
				/>
			</FormLabelControl>
			<FormLabelControl label="Shipping price">
				<CurrencyInput
					name="itemShippingPrice"
					value={formValues.itemShippingPrice}
					onChange={handleFormChange}
				/>
			</FormLabelControl>
			<FormLabelControl label="Shipping price responsibility">
				<RadioButtonGroup
					name="itemShippingPriceResponsibility"
					options={formOptions.itemShippingPriceResponsibility}
					value={formValues.itemShippingPriceResponsibility}
					onChange={handleFormChange}
				/>
			</FormLabelControl>
			<FormLabelControl label="Buyer state">
				<MapSelect
					name="buyerState"
					options={formOptions.buyerState}
					value={formValues.buyerState}
					onChange={handleFormChange}
					placeholder
				/>
			</FormLabelControl>
			{formValues.buyerState === 'custom' && <PercentInput />}
			{/* calculations */}
			<VStack {...lineItemProps}>
				<CurrencyLineItem
					label={<>Buyer sales tax {formValues.buyerState && TaxRates}</>}
					value={calculatedValues.buyerSalesTax}
				/>
				<CurrencyLineItem
					label="Buyer total"
					value={calculatedValues.buyerTotal}
				/>
				<Divider />
				<CurrencyLineItem
					label={<><b>Fees</b> {FeeRates}</>}
					tooltipLabel="Based on item price, shipping price, sales tax"
					value={calculatedValues.platformFees}
				/>
				<CurrencyLineItem
					label={<b>Payout</b>}
					value={calculatedValues.sellerPayout}
				/>
				<Divider />
				<CurrencyLineItem
					label={<b>Profit</b>}
					value={calculatedValues.sellerProfit}
					color={true}
				/>
			</VStack>
			{/* links */}
			<LinkButtonGroup links={links} {...linkButtonGroupProps} />
			{/* actions */}
			<FormActionButtons
				setValues={setFormValues}
				currentValues={formValues}
				initialValues={initialStates.formValues}
			/>
		</>
	);
}
