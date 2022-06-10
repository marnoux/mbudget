import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
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

	const user = useSelector((state: any) => state.user.value);

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
		<Stack gap={4} className='col-md-5 mx-auto'>
			<h1>Profile</h1>
			<Form>
				<Avatar
					url={avatar_url}
					size={200}
					onUpload={(url) => {
						setAvatarUrl(url);
						updateProfile({ username, website, avatar_url: url });
					}}
				/>
				<Form.Group className='pb-2'>
					<Form.Label htmlFor='email'>Email</Form.Label>
				</Form.Group>
				<Form.Group className='pb-2'>
					<Form.Control id='email' type='text' value={session.user.email} disabled />
				</Form.Group>
				<Form.Group className='pb-2'>
					<Form.Label htmlFor='username'>Name</Form.Label>
					<Form.Control
						id='username'
						type='text'
						value={username || ''}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='pb-2'>
					<Form.Label htmlFor='website'>Website</Form.Label>
					<Form.Control
						id='website'
						type='website'
						value={website || ''}
						onChange={(e) => setWebsite(e.target.value)}
					/>
				</Form.Group>
			</Form>

			<Button
				className='button block primary'
				onClick={() => updateProfile({ username, website, avatar_url })}
				disabled={loading}
			>
				{loading ? 'Loading ...' : 'Update'}
			</Button>

			<Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
		</Stack>
	);
};

export default Account;
