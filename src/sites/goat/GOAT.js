/* React */
import React, { useState, useEffect, useMemo } from 'react';

/* functions */
import calculateValues from './calculateValues';
import { useSearchParams } from 'react-router-dom';
import {
	mergeSearchParams,
	useFormChangeHandler,
	useValueCalculationHandler,
	formatCurrency,
	formatDecimalPlaces,
} from 'functions/utilities';

/* components */
import { VStack, Divider } from '@chakra-ui/react';
import FormLabelControl from 'components/FormLabelControl';
import MapSelect from 'components/MapSelect';
import CurrencyInput from 'components/CurrencyInput';
import PercentInput from 'components/PercentInput';
import CurrencyLineItem from 'components/CurrencyLineItem';
import LinkButtonGroup from 'components/LinkButtonGroup';
import BottomTooltip from 'components/BottomTooltip';
import FormActionButtons from 'components/FormActionButtons';

/* constants */
import initialStates from './constants/initialStates';
import feeConstants from './constants/feeConstants';
import formOptions from './constants/formOptions';
import links from './constants/links';
import { lineItemProps, linkButtonGroupProps } from 'sites/props';

export default function GOAT() {
	/* states + hooks */
	const [searchParams] = useSearchParams();
	const [formValues, setFormValues] = useState(mergeSearchParams(initialStates.formValues, searchParams));
	const [calculatedValues, setCalculatedValues] = useState(initialStates.calculatedValues);
	const transactionFeeRates = feeConstants.transaction;

	/* handlers */
	const handleFormChange = useFormChangeHandler(setFormValues);
	const handleValueCalculation = useValueCalculationHandler(setCalculatedValues, calculateValues);

	/* side effects */
	useEffect(
		() => handleValueCalculation(formValues, transactionFeeRates),
		[formValues]
	);

	/* JSX elements */
	const FeeRates = useMemo(
		() => [
			'(',
			<BottomTooltip label="Commission rate">
				{formatDecimalPlaces(formValues.commissionRate)}%
			</BottomTooltip>,
			' + ',
			<BottomTooltip label="Cashout rate">
				{transactionFeeRates.variable}%
			</BottomTooltip>,
			' + ',
			<BottomTooltip label="Seller fee">
				{formatCurrency(transactionFeeRates.fixed[formValues.sellerLocation])}
			</BottomTooltip>,
			')',
		],
		[formValues.sellerLocation, formValues.commissionRate]
	);

	/* render */
	return (
		<>
			{/* form controls */}
			<FormLabelControl label="Seller location">
				<MapSelect
					name="sellerLocation"
					options={formOptions.sellerLocation}
					value={formValues.sellerLocation}
					onChange={handleFormChange}
				/>
			</FormLabelControl>
			<FormLabelControl label="Commission rate">
				<PercentInput
					name="commissionRate"
					value={formValues.commissionRate}
					onChange={handleFormChange}
					min={9.5}
					max={25}
					step={0.5}
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
			{/* calculations */}
			<VStack {...lineItemProps}>
				<CurrencyLineItem
					label={<><b>Fees</b> {FeeRates}</>}
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
