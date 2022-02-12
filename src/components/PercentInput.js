/* React */
import { useCallback } from 'react';

/* components */
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

/**
 * @param {object}   props
 * @param {string}   props.name      - Name.
 * @param {string}   props.value     - Value.
 * @param {function} props.onChange  - `onChange` handler.
 * @param {number}   props.maxLength - Maximum length.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function PercentInput(props) {
	const { maxLength = 6, ...inputProps } = props;

	const onKeyPress = useCallback((e) => {
		if (e.target.value.length >= maxLength) {
			e.preventDefault();
		}
	}, []);

	return (
		<InputGroup>
			<Input type="number" step="0.01" onKeyPress={onKeyPress} {...inputProps} />
			<InputRightElement children="%" color="gray" />
		</InputGroup>
	);
}
