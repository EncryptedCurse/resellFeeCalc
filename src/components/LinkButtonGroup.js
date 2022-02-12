/* components */
import { ButtonGroup } from '@chakra-ui/react';
import LinkButton from './LinkButton';

/**
 * @param {object}   props
 * @param {object[]} props.links         - Array of `link`/`content` objects.
 * @param {string}   props.links.link    - Button's Link.
 * @param {any}      props.links.content - Button's content.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function LinkButtonGroup(props) {
	const { links, ...buttonGroupProps } = props;

	return (
		<ButtonGroup {...buttonGroupProps}>
			{links.map((link, index) => (
				<LinkButton key={index} {...link} />
			))}
		</ButtonGroup>
	);
}
