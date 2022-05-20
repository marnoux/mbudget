import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignUp from './SignUp';

const SignUpWrapper = () => {
	return (
		<Container>
			<Row>
				<Col xs></Col>
				<Col xs={{ order: 12 }}>
					<SignUp />
				</Col>
				<Col xs={{ order: 1 }}></Col>
			</Row>
		</Container>
	);
};

export default SignUpWrapper;
