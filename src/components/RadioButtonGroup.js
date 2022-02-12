/* components */
import { ButtonGroup, Button } from '@chakra-ui/react';

/**
 * @param {object}   props
 * @param {string}   props.name            - Name.
 * @param {any}      props.value           - Value.
 * @param {object[]} props.options         - Array of `value`/`content` objects.
 * @param {string}   props.options.value   - Option's value
 * @param {any}      props.options.content - Option's content.
 * @param {function} props.onChange        - `onChange` handler.
 * @param {string}   props.selectedColor   - Color of selected option.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function RadioButtonGroup(props) {
	const {
		name,
		options,
		value: buttonGroupValue,
		onChange,
		selectedColor = 'blue',
		...buttonGroupProps
	} = props;

	return (
		<ButtonGroup isAttached w="100%" {...buttonGroupProps}>
			{options.map((option) => {
				const { value: buttonValue, content, ...buttonProps } = option;

				return (
					<Button
						name={name}
						key={buttonValue}
						value={buttonValue}
						onClick={onChange}
						colorScheme={buttonValue === buttonGroupValue ? selectedColor : null}
						w="100%"
						{...buttonProps}
					>
						{content}
					</Button>
				);
			})}
		</ButtonGroup>
	);
}
