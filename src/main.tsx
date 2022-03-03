import './index.css';
import { App } from './App';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/Store';

render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById('root'),
);
