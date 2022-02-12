/* React */
import React from 'react';

/* components */
import { useColorMode, useColorModeValue, IconButton, Tooltip } from '@chakra-ui/react';
import { FaMoon as DarkModeIcon, FaSun as LightModeIcon } from 'react-icons/fa';

export default function ColorModeSwitcher(props) {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(DarkModeIcon, LightModeIcon);

	return (
		<Tooltip label={`Switch to ${text} mode`} placement="left">
			<IconButton
				size="md"
				fontSize="lg"
				marginLeft="2"
				onClick={toggleColorMode}
				icon={<SwitchIcon />}
				{...props}
			/>
		</Tooltip>
	);
}
