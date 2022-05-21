/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_SUPABASE_URL: 'https://uajdvxanfbszwvtitcfo.supabase.co',
		NEXT_PUBLIC_SUPABASE_ANON_KEY:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhamR2eGFuZmJzend2dGl0Y2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5MDA2NzQsImV4cCI6MTk2ODQ3NjY3NH0.qTTMggOGyBLYuU92u1d6hfLAsuTsMuFQczGvkOfZBa4',
	},
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
