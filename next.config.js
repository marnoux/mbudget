/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		REACT_APP_FIREBASE_API_KEY: 'AIzaSyBoRFKmft37reeekxty0aaE0r1J3ySMoj4',
		REACT_APP_FIREBASE_AUTH_DOMAIN: 'react-http-5f20c.firebaseapp.com',
		REACT_APP_FIREBASE_DATABASE_URL:
			'https://react-http-5f20c-default-rtdb.europe-west1.firebasedatabase.app',
		REACT_APP_FIREBASE_PROJECT_ID: 'react-http-5f20c',
		REACT_APP_FIREBASE_STORAGE_BUCKET: 'react-http-5f20c.appspot.com',
		REACT_APP_FIREBASE_MESSAGING_SENDER_ID: '577155931419',
		REACT_APP_FIREBASE_APP_ID: '1:577155931419:web:52bb8badacb98b708887be',
	},
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
