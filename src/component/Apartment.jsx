import React, { useRef, useState } from 'react';
import axios from 'axios';
import ParametersList from './ParametersList';
import cityData from './cityData/cityData.json';
import toast from '../helper/toast';
import { useNavigate } from 'react-router';

function Apartment() {
	const navigate = useNavigate();
	//  int ref
	const mobileRef = useRef(null);
	const currentRef = useRef(null);
	const priceRef = useRef(null);
	const areaRef = useRef(null);
	const ceilingRef = useRef(null);
	const bedroomsRef = useRef(null);
	const bathroomRef = useRef(null);
	const numbersRef = useRef(null);
	const apartmentFloorRef = useRef(null);
	const maxApartmentRef = useRef(null);
	const maxGuestsRef = useRef(null);
	//checkbox
	const [checkboxes, setCheckboxes] = useState([
		{ label: 'კონდიციონერი', checked: false },
		{ label: 'ტელევიზორი', checked: false },
		{ label: 'ინტერნეტი', checked: false },
		{ label: 'ბუნებრივი აირი', checked: false },
		{ label: 'ბუხარი', checked: false },
		{ label: 'მაცივარი', checked: false },
		{ label: 'სარეცხი მანქანა', checked: false },
		{ label: 'ჭურჭლის სარეცხი მანქანა', checked: false },
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
		city: '',
		address: '',
		Currency_type: '1',
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
		Parking_type: '',
		owner_name: '',
		favorites: false,
		user: 1,
	});

	const handleInput = event => {
		setPost({
			...post,
			price: parseFloat(priceRef.current.value),
			area: parseFloat(areaRef.current.value),
			ceiling_height: parseFloat(ceilingRef.current.value),
			bedrooms: parseFloat(bedroomsRef.current.value),
			bathroom: parseFloat(bathroomRef.current.value),
			apartment_floor: parseFloat(apartmentFloorRef.current.value),
			numbers_of_floors: parseFloat(maxApartmentRef.current.value),
			max_guests: parseFloat(maxGuestsRef.current.value),
			air_conditioner: checkboxes[0].checked,
			tv: checkboxes[1].checked,
			internet: checkboxes[2].checked,
			gas: checkboxes[3].checked,
			fireplace: checkboxes[4].checked,
			refrigerator: checkboxes[5].checked,
			washing_machine: checkboxes[6].checked,
			dishwasher: checkboxes[7].checked,

			[event.target.name]: event.target.value,
		});

		/* 	setCurrent({
			...post,
			Currency_type: parseFloat(currentRef.current.value),
		}); */
	};

	/* const token = '2649637d51088234890f12de0146dad3c47d1426'; */

	/* 	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			user: 2,
		},
	}; */

	const postData = () => {
		axios
			.post(`https://api.geoevents.ge/api/apartment-create/`, post)
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
						mobileRef={mobileRef}
						currentRef={currentRef}
						priceRef={priceRef}
						areaRef={areaRef}
						bedroomsRef={bedroomsRef}
						bathroomRef={bathroomRef}
						numbersRef={numbersRef}
						apartmentFloorRef={apartmentFloorRef}
						maxApartmentRef={maxApartmentRef}
						maxGuestsRef={maxGuestsRef}
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

export default Apartment;
