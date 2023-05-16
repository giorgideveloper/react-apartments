import './assets/css/style.css';
import { Router } from './routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginState, logoutState } from './store/authSlice';
import moment from 'moment';
import { refresh } from './services/ApiService';
import toast from './helpers/toast';
import Loading from './components/partials/Loading';
import { setLoading } from './store/loadingSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			localStorage.getItem('token') &&
			moment(localStorage.getItem('expires')).isAfter(moment())
		) {
			dispatch(
				loginState({
					access: localStorage.getItem('token'),
					refresh: localStorage.getItem('refresh'),
					user: JSON.parse(localStorage.getItem('user')),
					time: false,
				})
			);
		}

		const interval = setInterval(async () => {
			if (
				localStorage.getItem('refresh') &&
				moment(localStorage.getItem('expires')).isBefore(moment())
			) {
				try {
					dispatch(setLoading(true));
					const refreshRes = await refresh(localStorage.getItem('refresh'));
					dispatch(
						loginState({
							access: refreshRes.data.access,
							refresh: localStorage.getItem('refresh'),
							user: JSON.parse(localStorage.getItem('user')),
							time: true,
						})
					);
					dispatch(setLoading(false));
				} catch (error) {
					dispatch(setLoading(false));
					console.log(error);
					toast('warning', 'Your session expired.');
					dispatch(logoutState());
				}
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<>
			<Header />
			<Router />
			<Loading />
			<Footer />
		</>
	);
}

export default App;
