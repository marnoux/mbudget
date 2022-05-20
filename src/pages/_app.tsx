import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Layout appTitle='mBudget'>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
