/* components */
import { Flex, Spacer, Tooltip, Text } from '@chakra-ui/react';

/* functions */
import { formatCurrency } from 'functions/utilities';

/* constants */
const valueColors = {
	positive: 'green.400',
	negative: 'red.400',
};

/**
 * @param {object}        props
 * @param {any}           props.label        - Left-hand label.
 * @param {number}        props.value        - Right-hand currency value.
 * @param {any}           props.tooltipLabel - Row's tooltip label.
 * @param {number|string} props.fontSize     - Font size.
 * @param {boolean}       props.color        - Whether the value should be displayed with color based on sign.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function CurrencyLineItem(props) {
	const { label, value, tooltipLabel, fontSize = 'xl', color } = props;

	const Element = (
		<Flex w="100%">
			<Text fontSize={fontSize}>{label}</Text>
			<Spacer />
			<Text
				fontSize={fontSize}
				color={color ? (value > 0 ? valueColors.positive : valueColors.negative) : undefined}
			>
				{formatCurrency(value)}
			</Text>
		</Flex>
	);

	return !tooltipLabel ? (
		Element
	) : (
		<Tooltip label={tooltipLabel} placement="left">
			{Element}
		</Tooltip>
	);
}
