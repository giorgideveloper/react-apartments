import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutState } from '../../store/authSlice';
import toast from '../../helpers/toast';

function Header() {
	const { pathname } = useLocation();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	const user = useSelector(state => state.auth.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutState());
		toast('success', 'Logged out');
		navigate('/login');
	};

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm'>
			<div className='container'>
				<Link
					className={`navbar-brand fw-bold ${
						pathname === '/' ? 'text-primary' : ''
					}`}
					to='/'
				>
					Apartments
				</Link>

				<button
					className='navbar-toggler border-0'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-2'>
						{isAuthenticated ? (
							<>
								<li className='nav-item'>
									<Link
										className={`btn btn-success shadow-sm rounded-pill py-1 px-4 mt-2 ${
											pathname === '/apartments/create' ? 'btn-warning' : ''
										}`}
										to='apartments/create'
									>
										<BsBuildingFillAdd /> Add apartment
									</Link>
								</li>

								<li className='nav-item dropdown'>
									<button
										className='btn btn-link dropdown-toggle text-decoration-none nav-link'
										data-bs-toggle='dropdown'
										aria-expanded='false'
									>
										<img
											width='20'
											height='20'
											className='rounded-pill me-1'
											src={`https://ui-avatars.com/api/?background=random&name=${user?.user}`}
											alt={user?.user}
										/>
										{user?.user}
									</button>
									<ul className='dropdown-menu dropdown-menu-end shadow-sm mt-2'>
										<li>
											<Link
												className={`dropdown-item ${
													pathname === '/profile' ? 'active' : ''
												}`}
												to='/profile'
											>
												<CgProfile /> Profile
											</Link>
										</li>
										<li>
											<button
												className='btn dropdown-item'
												onClick={handleLogout}
											>
												<CgLogOut /> Logout
											</button>
										</li>
									</ul>
								</li>
								<li className='nav-item'>
									<MdFavoriteBorder />
								</li>
							</>
						) : (
							''
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
