import React, { useEffect, useState } from 'react';
import { getApartments, deleteApartment } from '../services/ApiService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HiLocationMarker } from 'react-icons/hi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';
import toast from '../helpers/toast';
import {
	addToApartment,
	deleteApartments,
	getAllApartments,
} from '../store/apartmentSlice';
import { useSelector } from 'react-redux';

function GetApartments() {
	const dispatch = useDispatch();

	const apartments = useSelector(state => state.apartment.apartment);

	console.log(apartments);
	// const deleteApartments = async id => {
	// 	try {
	// 		const res = await deleteApartment(id);
	// 		console.log(res, 'deleted successfully!');
	// 		toast('success', 'Apartment deleted successfully!');
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast('error', 'Apartment could not be deleted');
	// 	}
	// };
	const handleAddFavorite = apartment => {
		dispatch(addToApartment(apartment));
	};

	useEffect(() => {
		getAllApartments();
	}, [dispatch]);

	return (
		<>
			{' '}
			<div className='container'>
				<div className='row pt-4'>
					{apartments?.map(apartment => (
						<div className='col-md-4 col-12 pt-4' key={apartment.id}>
							<div className='card ' style={{ width: '100%' }}>
								<img
									src={apartment.image1}
									className='card-img-top'
									alt='...'
								/>
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
												className='fs-5 mr-auto me-3'
												role='button'
												onClick={() => handleAddFavorite(apartment)}
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
