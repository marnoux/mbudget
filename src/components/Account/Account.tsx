import { useState, useEffect } from 'react';
import { UserSessionField } from '../../types/user';
import { supabase } from '../../utils/supabase';
import Avatar from './Avatar';

interface AccountProps {
	session: any;
}

interface UserData {
	username: UserSessionField;
	website: UserSessionField;
	avatar_url: UserSessionField;
}

const Account = ({ session }: AccountProps) => {
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState<UserData | null | any>(null);
	const [website, setWebsite] = useState<UserData | null | any>(null);
	const [avatar_url, setAvatarUrl] = useState<UserData | null | any>(null);

	useEffect(() => {
		getProfile();
	}, [session]);

	const getProfile = async () => {
		try {
			setLoading(true);
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
				setUsername(data.username);
				setWebsite(data.website);
				setAvatarUrl(data.avatar_url);
			}
		} catch (error: any) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	const updateProfile = async ({ username, website, avatar_url }: UserData) => {
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
	};

	return (
		<>
			<Avatar
				url={avatar_url}
				size={200}
				onUpload={(url) => {
					setAvatarUrl(url);
					updateProfile({ username, website, avatar_url: url });
				}}
			/>
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
		</>
	);
};

export default Account;
