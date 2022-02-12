/* components */
import { FormControl, FormLabel } from '@chakra-ui/react';

/**
 * @param {object} props
 * @param {any}    props.label    - Control label.
 * @param {any}    props.children - Control.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function FormLabelControl(props) {
	const { label, children, ...formControlProps } = props;

	return (
		<FormControl as="fieldset" w="100%" {...formControlProps}>
			<FormLabel as="legend">{label}</FormLabel>
			{children}
		</FormControl>
	);
}
