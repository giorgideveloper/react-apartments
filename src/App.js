import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import PostPage from './page/PostPage';
import NotfoundPage from './page/NotfoundPage';
import Header from './component/Header';
import AddPage from './page/AddPage';

function App() {
	return (
		<>
			{' '}
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='api/apartment-list/:id' element={<PostPage />} />
				<Route path='addPost' element={<AddPage />} />
				<Route path='*' element={<NotfoundPage />} />
			</Routes>
		</>
	);
}

export default App;
