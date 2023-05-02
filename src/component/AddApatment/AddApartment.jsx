import React, { useRef, useState } from 'react';
import ParametersList from '../ParametersList';
import cityData from '../cityData/cityData.json';

import { useNavigate } from 'react-router';
import ApiService from '../../service/ApiService';
import toast from '../../helper/toast';

function AddApartment() {
	const navigate = useNavigate();
	//  int ref
	const ceilingRef = useRef(null);
	//checkbox
	const [checkboxes, setCheckboxes] = useState([
		{ label: 'კონდიციონერი', checked: false },
		{ label: 'ტელევიზორი', checked: false },
		{ label: 'ინტერნეტი', checked: false },
		{ label: 'ბუნებრივი აირი', checked: false },
		{ label: 'ჭურჭლის სარეცხი მანქანა', checked: false },
		{ label: 'აივანი', checked: false },
		{ label: 'ვერანდა', checked: false },
		{ label: 'ლიფტი', checked: false },
	]);

	const [post, setPost] = useState({
		main_category_type: '',
		building_status_type: '',
		collateral_type: '',
		collateral_period: '',
		collateral_agreement_type: '',
		rental_type: '',
		youtube: '',
		description: '',
		mobile: null,
		building_year: null,
		city: '',
		address: '',
		Currency_type: '',
		price: null,
		area: null,
		ceiling_height: null,
		heating_type: '',
		rooms: '',
		bedrooms: null,
		bathroom: null,
		numbers_of_floors: null,
		apartment_floor: null,
		Parking_type: '',
		max_guests: null,
		hot_water_type: '',
		owner_name: '',
		favorites: false,
		user: 1,
	});

	const handleInput = event => {
		setPost({
			...post,
			ceiling_height: parseFloat(ceilingRef.current.value),
			air_conditioner: checkboxes[0].checked,
			tv: checkboxes[1].checked,
			internet: checkboxes[2].checked,
			gas: checkboxes[3].checked,
			dishwasher: checkboxes[4].checked,
			balcony: checkboxes[5].checked,
			veranda: checkboxes[6].checked,
			service_elevator: checkboxes[7].checked,
			[event.target.name]: event.target.value,
		});
	};

	const postData = async () => {
		await ApiService.addApartment(post)
			.then(res => {
				console.log(res);
				toast('success', 'Add item');
				navigate('/', { replace: true });
			})
			.catch(err => {
				console.log(err);
				toast('warning', 'warning');
			});
	};

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 col-12'>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='main_category_type'
								id='inlineRadio1'
								value='1'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								იყიდება
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='main_category_type'
								id='inlineRadio2'
								value='2'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio2'>
								გირავდება
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='main_category_type'
								id='inlineRadio3'
								value='3'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio3'>
								ქირავდება
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='main_category_type'
								id='inlineRadio4'
								value='4'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio4'>
								ქირავდება დღიურად
							</label>
						</div>
					</div>
					<div className='row pt-4'>
						<h4> მშენებლობის სტატუსი</h4>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='building_status_type'
								id='inlineRadio5'
								value='1'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio5'>
								ძველი აშენებული
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='building_status_type'
								id='inlineRadio6'
								value='2'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio6'>
								ახლაი აშენებული
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='building_status_type'
								id='inlineRadio7'
								value='3'
								onChange={handleInput}
							/>
							<label className='form-check-label' htmlFor='inlineRadio7'>
								მშენებარე
							</label>
						</div>
					</div>
					<div className='row pt-4'>
						<div className='col-md-6 col-12'>
							<div className='input-group input-group-default mb-3'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'
								>
									მშენებლობის დასრულების თარიღი
								</span>
								<input
									type='date'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='0 მ'
									defaultValue=''
									name='building_year'
								/>
							</div>

							<h3>მდებარეობა</h3>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect011'
								>
									ქალაქი
								</label>
								<select
									className='form-select'
									id='inputGroupSelect011'
									name='city'
									onChange={handleInput}
								>
									<option value=''>არჩევა</option>
									{cityData.map((city, index) => (
										<option key={index} value={city.city}>
											{city.city}
										</option>
									))}
								</select>
							</div>
							<div className='input-group input-group-default mb-3'>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='მისამართი'
									name='address'
									onChange={handleInput}
								/>
							</div>
						</div>
					</div>
					<ParametersList
						allParameters={handleInput}
						ceilingRef={ceilingRef}
						checkboxes={checkboxes}
						setCheckboxes={setCheckboxes}
						submit={postData}
					/>
				</div>
			</div>
		</>
	);
}

export default AddApartment;
