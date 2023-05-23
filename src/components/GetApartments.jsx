import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiLocationMarker } from 'react-icons/hi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';

// import { setLoading } from '../store/loadingSlice';
import { deleteApartments } from '../store/contentSlice';
import { fetchContent } from '../store/contentSlice';
import { addFavorite, addType } from '../store/favoriteSlice';

function GetApartments() {
	const [color, setColor] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContent());
	}, [dispatch]);

	const apartments = useSelector(state => state.content.contents);
	const isLoading = useSelector(state => state.content.isLoading);
	const error = useSelector(state => state.content.error);

	if (isLoading) {
		return 'loading...';
	}

	if (error) {
		return error;
	}

	const handleFavorite = item => {
		dispatch(addFavorite({ ...item, favorites: true }));
		setColor(!color);
	};

	return (
		<>
			{' '}
			<div className='container'>
				<div className='row pt-4'>
					<h2>Apartment</h2>
					{apartments.results?.map(apartment => (
						<div className='col-md-4 col-12 pt-4' key={apartment.id}>
							<div className='card ' style={{ width: '100%' }}>
								<img src={apartment.title} className='card-img-top' alt='...' />
								<div className='card-body '>
									<h6 className='card-title'>ბინა ბათუმში</h6>
									<p className='card-text'>
										{apartment.description.slice(0, 50)}
									</p>
									<p className='card-text fs-6'>
										<HiLocationMarker />
										{apartment.address}
									</p>
									<div className='card-content w-100'>
										<div className='card-buttons'>
											<Link to={`/apartments/${apartment.id}`}>
												<button type='button' className='btn btn-secondary'>
													Go somewhere
												</button>
											</Link>
										</div>

										<div className='card-delete-body '>
											<MdFavoriteBorder
												className='fs-5 mr-auto me-3  '
												role='button'
												onClick={() => handleFavorite(apartment)}
											/>
											<RiDeleteBin2Fill
												className='fs-4 text-danger'
												role='button'
												onClick={() => dispatch(deleteApartments(apartment.id))}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default GetApartments;
