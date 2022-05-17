import React, { FC, ReactNode } from 'react';
import NavigationBar from '../Navbar/Navbar';

interface Props {
	title?: string;
	children?: ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
	return (
		<>
			<NavigationBar />
		</>
	);
};

export default Layout;
