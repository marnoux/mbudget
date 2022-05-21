import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Account from '../../components/Account/Account';

const AccountPage: NextPage = () => {
	useEffect(() => {
		getProfile();
	}, [session]);

	return <Account />;
};

export default AccountPage;
