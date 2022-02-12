/* components */
import { Select } from '@chakra-ui/react';

/**
 * @param {object}        props
 * @param {object[]}      props.options         - Array of `value`/`content` objects.
 * @param {string|number} props.options.value   - Option's value.
 * @param {any}           props.options.content - Option's content.
 * @param {function}      props.onChange        - `onChange` handler.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function MapSelect(props) {
	const { options, ...selectProps } = props;

	return (
		<Select {...selectProps}>
			{options.map((option) => {
				const { value, content, ...optionProps } = option;

				return (
					<option key={value} value={value} {...optionProps}>
						{content}
					</option>
				);
			})}
		</Select>
	);
}
