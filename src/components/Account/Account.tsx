import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';

interface AccountProps {
	session: any;
}

interface UserData {
	username: string | ReadonlyArray<string> | number | undefined;
	website: string | ReadonlyArray<string> | number | undefined;
	avatar_url: string | ReadonlyArray<string> | number | undefined;
}

const Account = ({ session }: AccountProps) => {
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState<UserData | null | any>(null);
	const [website, setWebsite] = useState<UserData | null | any>(null);
	const [avatar_url, setAvatarUrl] = useState<UserData | null | any>(null);

	async function updateProfile({ username, website, avatar_url }: UserData) {
		try {
			setLoading(true);
			const user = supabase.auth.user();

			const updates = {
				id: user?.id,
				username,
				website,
				avatar_url,
				updated_at: new Date(),
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal', // Don't return the value after inserting
			});

			if (error) {
				throw error;
			}
		} catch (error: any) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='form-widget'>
			<div>
				<label htmlFor='email'>Email</label>
				<input id='email' type='text' value={session.user.email} disabled />
			</div>
			<div>
				<label htmlFor='username'>Name</label>
				<input
					id='username'
					type='text'
					value={username || ''}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='website'>Website</label>
				<input
					id='website'
					type='website'
					value={website || ''}
					onChange={(e) => setWebsite(e.target.value)}
				/>
			</div>

			<div>
				<button
					className='button block primary'
					onClick={() => updateProfile({ username, website, avatar_url })}
					disabled={loading}
				>
					{loading ? 'Loading ...' : 'Update'}
				</button>
			</div>

			<div>
				<button className='button block' onClick={() => supabase.auth.signOut()}>
					Sign Out
				</button>
			</div>
		</div>
	);
};

export default Account;
