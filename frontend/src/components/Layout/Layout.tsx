import React from 'react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
	return (
		<div className="container mx-auto px-96">
			<Outlet />
		</div>
	);
};

export default Layout;
