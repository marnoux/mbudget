import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavBarDropdown from './NavBarDropdown';

type NavigationBarProps = {
	title: string;
};

const NavigationBar = ({ title }: NavigationBarProps) => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand>{title}</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>Budget</Nav.Link>
						<Nav.Link>Transactions</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link>Sign In</Nav.Link>
						<Nav.Link>My Account</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
