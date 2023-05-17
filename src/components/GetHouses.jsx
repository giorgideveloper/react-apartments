import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../store/housesSlice';
import { HiLocationMarker } from 'react-icons/hi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function GetHouses() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHouses());
	}, [dispatch]);

	const houses = useSelector(state => state.house.houses);
	const isLoading = useSelector(state => state.house.isLoading);
	const error = useSelector(state => state.house.error);

	if (isLoading) {
		return 'loading...';
	}

	if (error) {
		return error;
	}

	console.log(houses);
	return (
		<>
			<div className='container'>
				<div className='row pt-4'>
					<h2>Houses</h2>
					{houses.results?.map(house => (
						<div className='col-md-4 col-12 pt-4' key={house.id}>
							<div className='card ' style={{ width: '100%' }}>
								<img src={house.title} className='card-img-top' alt='...' />
								<div className='card-body '>
									<h6 className='card-title'>სახლი ბათუმში</h6>
									<p className='card-text'>{house.description.slice(0, 50)}</p>
									<p className='card-text fs-6'>
										<HiLocationMarker />
										{house.address}
									</p>
									<div className='card-content w-100'>
										<div className='card-buttons'>
											<Link to={`/houses/${house.id}`}>
												<button type='button' className='btn btn-secondary'>
													Go somewhere
												</button>
											</Link>
										</div>

										<div className='card-delete-body '>
											<MdFavoriteBorder
												className='fs-5 mr-auto me-3'
												role='button'
											/>
											<RiDeleteBin2Fill
												className='fs-4 text-danger'
												role='button'
												// onClick={() => dispatch(deleteApartments(apartment.id))}
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

export default GetHouses;
