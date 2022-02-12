/* React */
import { useCallback } from 'react';

/* components */
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';

/**
 * @param {object}   props
 * @param {string}   props.name      - Name.
 * @param {string}   props.value     - Value.
 * @param {function} props.onChange  - `onChange` handler.
 * @param {number}   props.maxLength - Maximum length.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function CurrencyInput(props) {
	const { maxLength = 9, ...inputProps } = props;

	// ^(0|[1-9]*).?\d{0,2}$
	const onKeyPress = useCallback((e) => {
		if (e.target.value.length >= maxLength) {
			e.preventDefault();
		}
	}, []);

	return (
		<InputGroup>
			<InputLeftElement children="$" color="gray" />
			<Input type="number" step="0.01" onKeyPress={onKeyPress} {...inputProps} />
		</InputGroup>
	);
}
