/* React */
import React, { useState, useEffect, useMemo } from 'react';

/* functions */
import calculateValues from './calculateValues';
import { useSearchParams } from 'react-router-dom';
import {
	mergeSearchParams,
	useFormChangeHandler,
	useValueCalculationHandler
} from 'functions/utilities';

/* components */
import { VStack, Divider } from '@chakra-ui/react';
import FormLabelControl from 'components/FormLabelControl';
import CurrencyInput from 'components/CurrencyInput';
import CurrencyLineItem from 'components/CurrencyLineItem';
import RadioButtonGroup from 'components/RadioButtonGroup';
import LinkButtonGroup from 'components/LinkButtonGroup';
import BottomTooltip from 'components/BottomTooltip';
import FormActionButtons from 'components/FormActionButtons';

/* constants */
import initialStates from './constants/initialStates';
import feeConstants from './constants/feeConstants';
import formOptions from './constants/formOptions';
import links from './constants/links';
import { lineItemProps, linkButtonGroupProps } from 'sites/props';

export default function StockX() {
	/* states + hooks */
	const [searchParams] = useSearchParams();
	const [formValues, setFormValues] = useState(mergeSearchParams(initialStates.formValues, searchParams));
	const [calculatedValues, setCalculatedValues] = useState(initialStates.calculatedValues);
	const sellingFeeRates = feeConstants.selling;
	const transactionFeeRates = feeConstants.transaction;

	/* handlers */
	const handleFormChange = useFormChangeHandler(setFormValues);
	const handleValueCalculation = useValueCalculationHandler(setCalculatedValues, calculateValues);

	/* side effects */
	useEffect(
		() => handleValueCalculation(formValues, sellingFeeRates, transactionFeeRates),
		[formValues]
	);

	/* JSX elements */
	const FeeRates = useMemo(
		() => [
			'(',
			<BottomTooltip label="Main rate">
				{feeConstants.selling[formValues.sellerLevel]}%
			</BottomTooltip>,
			' + ',
			<BottomTooltip label="Transaction rate">
				{feeConstants.transaction.variable}%
			</BottomTooltip>,
			')',
		],
		[formValues.sellerLevel]
	);

	/* render */
	return (
		<>
			{/* form controls */}
			<FormLabelControl label="Seller level">
				<RadioButtonGroup
					name="sellerLevel"
					options={formOptions.sellerLevel}
					value={formValues.sellerLevel}
					onChange={handleFormChange}
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
