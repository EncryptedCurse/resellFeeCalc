/* components */
import { Button } from '@chakra-ui/react';

/**
 * @param {object} props
 * @param {string} props.link    - Link.
 * @param {any}    props.content - Content.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function LinkButton(props) {
	const { link, content, ...buttonProps } = props;

	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Button {...buttonProps}>{content}</Button>
		</a>
	);
}
