import { Session } from '@supabase/supabase-js';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Account from '../../components/Account/Account';
import Auth from '../../components/Authentication/Login';
import { supabase } from '../../utils/supabase';

const AuthPage: NextPage = () => {
	const [session, setSession] = useState<Session | null>();

	useEffect(() => {
		setSession(supabase.auth.session());

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
};

export default AuthPage;
