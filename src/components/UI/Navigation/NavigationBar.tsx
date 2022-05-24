import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import NavLink from '../NavLink/NavLink';
// import NavBarDropdown from './NavBarDropdown';

type NavigationBarProps = {
	title: string;
};

const NavigationBar = ({ title }: NavigationBarProps) => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Link href='/'>
					<Navbar.Brand>{title} </Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>Budget</Nav.Link>
						<Nav.Link>Transactions</Nav.Link>
					</Nav>
					<Nav>
						<NavLink title={'Sign In'} href={'/auth'}></NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
