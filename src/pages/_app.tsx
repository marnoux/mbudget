import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout appTitle='mBudget'>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
