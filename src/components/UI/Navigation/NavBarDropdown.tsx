import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const NavBarDropdown = () => {
	return (
		<NavDropdown title='Dropdown' id='collapsible-nav-dropdown'>
			<NavDropdown.Item>Action</NavDropdown.Item>
			<NavDropdown.Item>Another action</NavDropdown.Item>
			<NavDropdown.Item>Something</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item>Separated link</NavDropdown.Item>
		</NavDropdown>
	);
};

export default NavBarDropdown;
