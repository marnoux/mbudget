import { supabase } from './supabase';

export const getProfile = async () => {
	try {
		// setLoading(true);
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
			console.log('🚀 ~ file: accounts.ts ~ line 19 ~ getProfile ~ data', data);
			return data;
		}
	} catch (error: any) {
		alert(error.message);
	}
	// finally {
	// setLoading(false);
	// }
};
