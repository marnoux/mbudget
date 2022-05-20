import { Formik, FormikHelpers, Field } from 'formik';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}

const SignUp = () => {
	return (
		<Card>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
				}}
				onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 500);
				}}
			>
				<Form>
					<Form.Group>
						<Form.Label htmlFor='firstName'>First Name</Form.Label>
						<Field id='firstName' component={Form.Control} name='firstName' placeholder='John' />

						<Form.Label htmlFor='lastName'>Last Name</Form.Label>
						<Field id='lastName' component={Form.Control} name='lastName' placeholder='Doe' />
					</Form.Group>

					<Form.Group>
						<Form.Label htmlFor='email'>Email</Form.Label>
						<Field
							id='email'
							component={Form.Control}
							name='email'
							placeholder='email@email.com'
							type='email'
						/>
					</Form.Group>

					<Button type='submit'>Submit</Button>
				</Form>
			</Formik>
		</Card>
	);
};

export default SignUp;
