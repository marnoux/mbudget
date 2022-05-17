import React, { FC, ReactNode } from 'react';
import NavigationBar from '../Navbar/NavigationBar';

interface Props {
	title?: string;
	children?: ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
	return (
		<>
			<NavigationBar title='mBudget' />
		</>
	);
};

export default Layout;
