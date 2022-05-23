import { Session } from '@supabase/supabase-js';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Account from '../components/Account/Account';
import HomeView from '../components/Home/HomeView';
import Layout from '../components/Layout/Layout';
import { supabase } from '../utils/supabase';
import Auth from './auth';

const Home: NextPage = () => {
	const [session, setSession] = useState<Session | null>();

	useEffect(() => {
		setSession(supabase.auth.session());

		console.log('🚀 ~ file: index.tsx ~ line 12 ~ session', session);

		supabase.auth.onAuthStateChange((_event: any, session: any) => {
			setSession(session);
		});
	}, []);

	return (
		<div className='container' style={{ padding: '50px 0 100px 0' }}>
			{/* @ts-ignore */}
			{!session ? <Auth /> : <Account key={session.user.id} session={session} />}
		</div>
	);

	// return <HomeView />;
};

export default Home;
