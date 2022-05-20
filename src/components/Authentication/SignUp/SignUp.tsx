import { Formik, FormikHelpers, Field } from 'formik';
import React from 'react';
import { Button, Card, Form, Stack } from 'react-bootstrap';

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}

const SignUp = () => {
	return (
		<Card className='pt-3' style={{ borderRadius: '2rem' }}>
			<Card.Body>
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
						<Stack gap={2} className='col-md-5 mx-auto'>
							<Form.Group>
								<Form.Label htmlFor='firstName'>First Name</Form.Label>
								<Field
									id='firstName'
									component={Form.Control}
									name='firstName'
									placeholder='John'
								/>

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
						</Stack>{' '}
						<Stack gap={2} className='col-md-5 mx-auto pt-4'>
							<Button type='submit'>Submit</Button>
						</Stack>
					</Form>
				</Formik>
			</Card.Body>
		</Card>
	);
};

export default SignUp;
