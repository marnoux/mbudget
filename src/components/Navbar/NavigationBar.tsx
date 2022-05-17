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
				<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>Features</Nav.Link>
						<Nav.Link>Pricing</Nav.Link>
						<NavBarDropdown />
					</Nav>
					<Nav>
						<Nav.Link>Temp 1</Nav.Link>
						<Nav.Link>Temp 2</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
