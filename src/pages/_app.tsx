import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from 'react-bootstrap';	
import { Provider } from 'react-redux';
import { store } from '../state/store/store';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Layout appTitle='mBudget'>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
