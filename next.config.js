/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		REACT_APP_SUPABASE_DATABASE_URL: 'https://uajdvxanfbszwvtitcfo.supabase.co',
	},
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
