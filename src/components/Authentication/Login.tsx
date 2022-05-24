import { useState } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { supabase } from '../../utils/supabase';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState<string>('');

	const handleLogin = async (email: string) => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error: any) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};	

	return (
		<Stack gap={4} className='col-md-6 mx-auto'>
			<h1>Supabase + Next.js</h1>
			<p className='description'>Sign in via magic link with your email below</p>
			<Form.Control
				type='email'
				placeholder='Your email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Button
				onClick={(e) => {
					e.preventDefault();
					handleLogin(email);
				}}
				disabled={loading}
			>
				<span>{loading ? 'Loading' : 'Send magic link'}</span>
			</Button>
		</Stack>
	);
};

export default Login;
