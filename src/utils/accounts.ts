import { createContext } from 'react';
import { supabase } from './supabase';

export const getProfile = async () => {
	try {
		const user = supabase.auth.user();

		let { data, error, status } = await supabase
			.from('profiles')
			.select(`username, website, avatar_url`)
			.eq('id', user?.id)
			.single();

		if (error && status !== 406) {
			throw error;
		}

		if (data) {
			const UserContext = createContext(data);
		}
	} catch (error: any) {
		alert(error.message);
	} finally {
		
	}
};
