import './assets/Style/Main.css';
import './Routes';
import Header from './Layouts/Header/Header';
import MainRoute from './Routes';
import Footer from './Layouts/Footer/Footer';

function App() {
	return (
		<>
			{' '}
			<Header />
			<MainRoute />
			<Footer />
		</>
	);
}

export default App;
