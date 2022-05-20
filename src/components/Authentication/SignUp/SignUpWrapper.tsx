import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignUp from './SignUp';

const SignUpWrapper = () => {
	return (
		<Container>
			<Row>
				<Col></Col>
				<Col style={{ paddingTop: '2rem', minWidth: '320px' }}>
					<SignUp />
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default SignUpWrapper;
