/* React */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

/* components */
import App from './App';

/* theme */
import theme from 'constants/theme';
import { ColorModeScript } from '@chakra-ui/react';

/* dev */
// import * as serviceWorker from './functions/serviceWorker';
// import reportWebVitals from 'functions/reportWebVitals';

ReactDOM.render(
	<StrictMode>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<App />
	</StrictMode>,
	document.getElementById('root')
);

// serviceWorker.unregister();
// reportWebVitals(console.log);
