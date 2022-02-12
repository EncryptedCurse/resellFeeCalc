import { Tooltip } from '@chakra-ui/react';

export default function BottomTooltip(props) {
	return (
		<Tooltip label={props.label} hasArrow>
			<span>{props.children}</span>
		</Tooltip>
	);
}
