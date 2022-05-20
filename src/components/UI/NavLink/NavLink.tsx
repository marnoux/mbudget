import Link from 'next/link';
import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';

interface NavLinkProps {
	href: string;
	title: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }: NavLinkProps) => {
	return (
		<Link href={href} passHref>
			<Nav.Link>{title}</Nav.Link>
		</Link>
	);
};

export default NavLink;
