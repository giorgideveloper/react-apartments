import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../page/Homepage';
import PostPage from '../page/PostPage';
import AddPage from '../page/AddPage';
import NotfoundPage from '../page/NotfoundPage';

function MainRoute() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='api/apartment-list/:id' element={<PostPage />} />
				<Route path='addPost' element={<AddPage />} />
				<Route path='*' element={<NotfoundPage />} />
			</Routes>
		</>
	);
}

export default MainRoute;
