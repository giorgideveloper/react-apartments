import React, { useState } from 'react';
import ParametersList from './ParametersList';

function HomeList() {
	const [post, setPost] = useState({
		main_category_type: '',
		building_status_type: '',
		collateral_type: '',
		collateral_period: '',
		collateral_agreement_type: '',
		rental_type: '',
		title: '',
		image1: '',
		image2: '',
		image3: '',
		youtube: '',
		short_description: '',
		description: '',
		mobile: '',
		city: '',
		address: '',
		Currency_type: '',
		price: null,
		area: null,
		ceiling_height: null,
		bedrooms: null,
		bathroom: null,
		numbers_of_floors: null,
		apartment_floor: null,
		max_guests: null,
		hot_water_type: '',
		Parking_type: '',
		favorites: false,
		created_at: '2023-04-05T02:19:33.461300+04:00',
		updated_at: '2023-04-05T02:19:33.461367+04:00',
	});

	const handleInput = event => {
		setPost({ ...post, [event.target.name]: event.target.value });
	};

	return (
		<>
			<div className='container'>
				<div className='row mb-4'>
					<div className='col-md-12'>
						<h3>სტატუსი</h3>
						<div className='form-check form-check-inline border rounded-1'>
							<input
								className='form-check-input'
								type='radio'
								name='main_category_type'
								id='inlineRadio1'
								value='1'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								სახლი
							</label>
						</div>
						<div className='form-check form-check-inline border rounded-1'>
							<input
								className='form-check-input '
								type='radio'
								name='main_category_type'
								id='inlineRadio2'
								value='2'
								onChange={handleInput}
							/>
							<label className='form-check-label ' htmlFor='inlineRadio2'>
								აგარაკი
							</label>
						</div>
					</div>
				</div>
				<div className='row mb-4'>
					<div className='col-md-12'>
						<h3>გარიგების ტიპი</h3>
						<div className='form-check form-check-inline border rounded-1'>
							<input
								className='form-check-input'
								type='radio'
								name='main_category_type'
								id='inlineRadio3'
								value='1'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio3'>
								იყიდება
							</label>
						</div>
						<div className='form-check form-check-inline border rounded-1'>
							<input
								className='form-check-input '
								type='radio'
								name='main_category_type'
								id='inlineRadio4'
								value='2'
								onChange={handleInput}
							/>
							<label className='form-check-label ' htmlFor='inlineRadio4'>
								გირავდება
							</label>
						</div>
						<div className='form-check form-check-inline border rounded-1'>
							<input
								className='form-check-input '
								type='radio'
								name='main_category_type'
								id='inlineRadio5'
								value='2'
								onChange={handleInput}
							/>
							<label className='form-check-label ' htmlFor='inlineRadio5'>
								ქირავდება
							</label>
						</div>
						<div className='form-check form-check-inline border rounded-1'>
							<input
								className='form-check-input '
								type='radio'
								name='main_category_type'
								id='inlineRadio6'
								value='2'
								onChange={handleInput}
							/>
							<label className='form-check-label ' htmlFor='inlineRadio6'>
								ქირავდება დღიურად
							</label>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<select
							className='form-select'
							aria-label='Default select example'
							onChange={handleInput}
							name='building_status_type'
						>
							<option>Open tsat menu</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
						</select>
					</div>
				</div>
				<ParametersList allParameters={handleInput} />
			</div>
		</>
	);
}

export default HomeList;
