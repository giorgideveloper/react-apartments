import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import PostPage from '../pages/PostPage';
import AddPage from '../pages/AddPage';
import NotfoundPage from '../pages/NotfoundPage';
import LoginPage from '../pages/auth/LoginPage';
import AuthGuard from '../components/auth/guards/AuthGuard';
import LoginGate from '../components/auth/guards/LoginGate';
import ProfilePage from '../pages/auth/ProfilePage';
import HousesPage from '../pages/HousesPage';
import HousesContentPage from '../pages/HousesContentPage';

export const Router = () => (
	<>
		<Routes>
			<Route
				path='/'
				element={
					<AuthGuard>
						<Homepage />
						<HousesPage />
					</AuthGuard>
				}
			/>
			<Route
				path='/apartments/:id'
				element={
					<AuthGuard>
						<PostPage />
					</AuthGuard>
				}
			/>
			<Route
				path='/apartments/create'
				element={
					<AuthGuard>
						<AddPage />
					</AuthGuard>
				}
			/>
			<Route
				path='/houses/:id'
				element={
					<AuthGuard>
						<HousesContentPage />
					</AuthGuard>
				}
			/>
			<Route
				path='/profile'
				element={
					<AuthGuard>
						<ProfilePage />
					</AuthGuard>
				}
			/>
			<Route
				path='/login'
				element={
					<LoginGate>
						<LoginPage />
					</LoginGate>
				}
			/>
			<Route path='*' element={<NotfoundPage />} />
		</Routes>
	</>
);
