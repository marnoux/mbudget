/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_SUPABASE_URL: `https://uajdvxanfbszwvtitcfo.supabase.co`,
		NEXT_PUBLIC_SUPABASE_ANON_KEY: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhamR2eGFuZmJzend2dGl0Y2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5MDA2NzQsImV4cCI6MTk2ODQ3NjY3NH0.qTTMggOGyBLYuU92u1d6hfLAsuTsMuFQczGvkOfZBa4`,
		MOCK_SESSION: {
			provider_token: null,
			access_token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjUzMzM5NTIwLCJzdWIiOiJjZGQ2OTFmMy04OTI0LTRmMGQtYmY1ZS03Yzk1MTUyNmFkZTMiLCJlbWFpbCI6Im1hcm5vdXhtYW5zZXJAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.tLoNHdpBtYijV6hx3-WOk5UMy6mSVOfaW-CKSujH0pw',
			expires_in: 3600,
			expires_at: 1653339523,
			refresh_token: 'GeBRk1OjGu9WuRuBBKH0bA',
			token_type: 'bearer',
			user: {
				id: 'cdd691f3-8924-4f0d-bf5e-7c951526ade3',
				aud: 'authenticated',
				role: 'authenticated',
				email: 'marnouxmanser@gmail.com',
				email_confirmed_at: '2022-05-21T11:04:59.833376Z',
				phone: '',
				confirmation_sent_at: '2022-05-21T11:04:50.624434Z',
				confirmed_at: '2022-05-21T11:04:59.833376Z',
				recovery_sent_at: '2022-05-23T19:57:06.817344Z',
				last_sign_in_at: '2022-05-23T19:58:40.44327Z',
				app_metadata: {
					provider: 'email',
					providers: ['email'],
				},
				user_metadata: {},
				identities: [
					{
						id: 'cdd691f3-8924-4f0d-bf5e-7c951526ade3',
						user_id: 'cdd691f3-8924-4f0d-bf5e-7c951526ade3',
						identity_data: {
							sub: 'cdd691f3-8924-4f0d-bf5e-7c951526ade3',
						},
						provider: 'email',
						last_sign_in_at: '2022-05-21T11:04:50.619101Z',
						created_at: '2022-05-21T11:04:50.619147Z',
						updated_at: '2022-05-21T11:04:50.61915Z',
					},
				],
				created_at: '2022-05-21T11:04:50.613204Z',
				updated_at: '2022-05-23T19:58:40.444305Z',
			},
		},
	},
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
