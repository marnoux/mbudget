import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../UI/Navigation/NavigationBar';
interface LayoutProps {
	children?: React.ReactNode;
	appTitle: string;
}

const Layout: FC<LayoutProps> = ({ children, appTitle }) => {
	return (
		<>
			<NavigationBar title={appTitle} />
			<Container className='px-5'>{children}</Container>
		</>
	);
};

export default Layout;
