import React from 'react';
import HomePage from './containers/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Albums from './containers/Albums';
import Tracks from './containers/Tracks';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="albums" element={<Albums />} />
					<Route path="tracks" element={<Tracks />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
