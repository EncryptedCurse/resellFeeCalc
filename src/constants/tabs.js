/* components */
import { Spacer } from '@chakra-ui/react';
import Ebay from 'sites/ebay/Ebay';
import Mercari from 'sites/mercari/Mercari';
import StockX from 'sites/stockx/StockX';
import GOAT from 'sites/goat/GOAT';

const tabs = [
	{
		path: '/ebay',
		label: 'eBay',
		component: <Ebay />,
		default: true
	},
	{
		path: '/mercari',
		label: 'Mercari',
		component: <Mercari />,
	},
	{
		path: '/stockx',
		label: 'StockX',
		component: <StockX />,
	},
	{
		path: '/goat',
		label: 'GOAT',
		component: <GOAT />,
	},
	<Spacer />,
	{
		path: '/profiteq',
		label: 'Profit EQ',
		isDisabled: true,
	},
];

export default tabs;
