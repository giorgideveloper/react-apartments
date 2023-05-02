import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import toast from '../helper/toast';

function GetApartments() {
	const [apartments, setApartment] = useState();

	// Get all Apartments
	const getAllApartments = async () => {
		await ApiService.getApartments()
			.then(function (res) {
				setApartment(res.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const deleteApartments = async id => {
		await ApiService.deleteApartment(id)
			.then(response => {
				console.log(response, 'deleted successfully!');
				toast('success', 'Apartment deleted successfully!');
				getAllApartments();
			})
			.catch(function (error) {
				console.log(error);
				toast('error', 'Apartment could not be deleted');
			});
	};
	useEffect(() => {
		getAllApartments();
	}, []);

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
								<div className='card-body'>
									<h6 className='card-title'>ბინა ბათუმში</h6>
									<p className='card-text'>
										{apartment.description.slice(0, 50)}
									</p>
									<p className='card-text fs-6'>
										<HiLocationMarker />
										{apartment.address}
									</p>
									<div className='card-delete-body'>
										<Link to={`api/apartment-list/${apartment.id}`}>
											<button type='button' className='btn btn-secondary'>
												Go somewhere
											</button>
										</Link>
										<RiDeleteBin2Fill
											className='fs-4 text-danger'
											onClick={() => deleteApartments(apartment.id)}
										/>
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
