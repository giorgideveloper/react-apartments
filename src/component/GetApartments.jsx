import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';
import { Link } from 'react-router-dom';

function GetApartments() {
	const [apartments, setApartment] = useState();

	// Get all Apartments
	const getAllApartments = () => {
		ApiService.getApartments()
			.then(function (res) {
				setApartment(res.data);
			})
			.catch(function (error) {
				console.log(error);
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
						<div className='col-md-4 col-12' key={apartment.id}>
							<div className='card' style={{ width: '100%' }}>
								<img
									src={apartment.image1}
									className='card-img-top'
									alt='...'
								/>
								<div className='card-body'>
									<h6 className='card-title'>{apartment.title}</h6>
									<p className='card-text'>{apartment.short_description}</p>
									<p className='card-text fs-6'>{apartment.address}</p>

									<Link to={`/apartment-list/${apartment.id}`}>
										<button>Go somewhere</button>
									</Link>
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
