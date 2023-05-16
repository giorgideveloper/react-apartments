import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiLocationMarker } from 'react-icons/hi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';
import { deleteApartments, getAllApartments } from '../store/apartmentSlice';
import { setLoading } from '../store/loadingSlice';
import { deleteApartment, getApartments } from '../services/ApiService';
import toast from '../helpers/toast';

function GetApartments() {
	const [apartments, setApartments] = useState();
	const dispatch = useDispatch();

	// Get all Apartments
	const getAllApartments = async () => {
		try {
			dispatch(setLoading(true));
			const res = await getApartments();
			setApartments(res.data.results);
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.log(error);
		}
	};

	const deleteApartments = async id => {
		try {
			dispatch(setLoading(true));
			await deleteApartment(id);
			toast('success', 'Apartment deleted successfully!');
			getAllApartments();
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.log(error);
			toast('error', 'Apartment could not be deleted');
		}
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
