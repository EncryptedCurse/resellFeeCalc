/* React */
import React, { useEffect, useState } from 'react';

/* functions */
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation
} from 'react-router-dom';

/* components */
import {
	ChakraProvider,
	Box,
	Grid,
	Container,
	VStack,
	Tabs,
	TabList,
	Tab
} from '@chakra-ui/react';
import ColorModeSwitcher from 'components/ColorModeSwitcher';

/* theme */
import theme from 'constants/theme';

/* constants */
import tabs from 'constants/tabs';

function Content() {
	const location = useLocation();
	const [tabIndex, setTabIndex] = useState(0);

	useEffect(
		() => setTabIndex(tabs.findIndex((tab) => tab.path === location.pathname)),
		[location]
	);

	return (
		<Grid p={4}>
			<ColorModeSwitcher justifySelf="flex-end" />
			<Container maxW="container.sm">
				<Tabs index={tabIndex}>
					<TabList>
						{tabs.map((tab) =>
							React.isValidElement(tab) ? (
								tab
							) : (
								<Link to={tab.path}>
									<Tab isDisabled={tab.isDisabled}>{tab.label}</Tab>
								</Link>
							)
						)}
					</TabList>
					<Box p={6}>
						<VStack spacing={5}>
							<Routes>
								<Route path="/" element={<Navigate to="/ebay" />} />
								{tabs.map((tab) => (
									<Route path={tab.path} element={tab.component} />
								))}
							</Routes>
						</VStack>
					</Box>
				</Tabs>
			</Container>
		</Grid>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<Content />
			</ChakraProvider>
		</BrowserRouter>
	);
}
