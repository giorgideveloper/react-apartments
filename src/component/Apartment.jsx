import React, { useRef, useState } from 'react';
import axios from 'axios';

function Apartment() {
	const [MainInputRef, setMainInputRef] = useState('');
	const [MainTypeInputRef, setMainTypeInputRef] = useState('');

	const ceilingHeight = useRef('');
	const cityRef = useRef('');
	const addressRef = useRef('');
	const areaRef = useRef('');
	const numberOfFloorsRef = useRef('');
	const apartmentFloorRef = useRef('');
	const roomRef = useRef('');
	const bedrooms = useRef('');
	const bathroom = useRef('');
	const parkingRef = useRef('');
	const pool = useRef(''); //
	const hotWater = useRef('');
	const Heating = useRef(''); //
	const apartmentTitle = useRef('');
	const description = useRef('');
	const imageRef = useRef('');
	const currencyType = useRef('');
	const priceRef = useRef('');

	console.log(ceilingHeight.current.value);
	const post = {
		user: 3,
		main_category_type: MainInputRef, //
		building_status_type: MainTypeInputRef, //
		ceiling_height: ceilingHeight.current.value,
		city: cityRef.current.value,
		address: addressRef.current.value,
		area: areaRef.current.value,
		numbers_of_floors: numberOfFloorsRef.current.value,
		apartment_floor: apartmentFloorRef.current.value,
		bedrooms: bedrooms.current.value,
		bathroom: bathroom.current.value,
		Parking_type: parkingRef.current.value,
		hot_water_type: hotWater.current.value,
		title: apartmentTitle.current.value, //
		description: description.current.value,
		image1: imageRef.current.value,
		Currency_type: currencyType.current.value,
		price: priceRef.current.value,
	};
	const token = '2649637d51088234890f12de0146dad3c47d1426';

	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			user: 2,
		},
	};

	const postData = () => {
		axios
			.post(
				`http://200c-5-152-82-202.ngrok.io/api/house-create/`,
				{
					title: 'hello2',
					description: 'apartment2',
				},
				config
			)
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 col-12'>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value='1'
								onChange={e => setMainInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio1'>
								იყიდება
							</label>
						</div>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio2'
								value='2'
								onChange={e => setMainInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio2'>
								გირავდება
							</label>
						</div>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio3'
								value='3'
								onChange={e => setMainInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio3'>
								ქირავდება
							</label>
						</div>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio4'
								value='4'
								onChange={e => setMainInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio4'>
								ქირავდება დღიურად
							</label>
						</div>
					</div>
					<div className='row pt-4'>
						<h4> მშენებლობის სტატუსი</h4>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions1'
								id='inlineRadio5'
								value='1'
								onChange={e => setMainTypeInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio5'>
								ძველი აშენებული
							</label>
						</div>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions1'
								id='inlineRadio6'
								value='2'
								onChange={e => setMainTypeInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio6'>
								ახლაი აშენებული
							</label>
						</div>
						<div class='form-check form-check-inline'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions1'
								id='inlineRadio7'
								value='3'
								onChange={e => setMainTypeInputRef(e.target.value)}
							/>
							<label class='form-check-label' for='inlineRadio7'>
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
									ჭერის სიმაღლე
								</span>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='0 მ'
									defaultValue=''
									ref={ceilingHeight}
								/>
							</div>
							<h3>მდებარეობა</h3>
							<div class='input-group input-group-default mb-3'>
								<input
									type='text'
									class='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='ქალაქი'
									ref={cityRef}
								/>
							</div>
							<div class='input-group input-group-default mb-3'>
								<input
									type='text'
									class='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='მისამართი'
									ref={addressRef}
								/>
							</div>
						</div>
					</div>
					<div className='row pt-4'>
						<div className='col-md-6 col-12'>
							<h3>პარამეტრები</h3>
							<div className='input-group mb-3'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'
								>
									სრული ფართი
								</span>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='ფართი'
									ref={areaRef}
								/>
							</div>
							<div class='input-group mb-3'>
								<span class='input-group-text'>სართული</span>
								<input
									type='text'
									aria-label='First name'
									className='form-control'
									placeholder='სართული სულ'
									ref={numberOfFloorsRef}
								/>
								<input
									type='text'
									aria-label='Last name'
									className='form-control'
									placeholder='სართული'
									ref={apartmentFloorRef}
								/>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect01'
								>
									ოთახები
								</label>
								<select
									className='form-select'
									id='inputGroupSelect01'
									ref={roomRef}
								>
									<option selected value=''>
										არჩევა რაოდ
									</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect02'
								>
									საძინებელი
								</label>
								<select
									className='form-select'
									id='inputGroupSelect02'
									ref={bedrooms}
								>
									<option selected value=''>
										არჩევა რაოდ
									</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect03'
								>
									სველი წერტილი
								</label>
								<select
									className='form-select'
									id='inputGroupSelect03'
									ref={bathroom}
								>
									<option selected value=''>
										არჩევა რაოდ
									</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect04'
								>
									პარკინგი
								</label>
								<select
									className='form-select'
									id='inputGroupSelect04'
									ref={parkingRef}
								>
									<option selected value=''>
										აირჩიე
									</option>
									<option value='1'>ეზოს პარკინგი</option>
									<option value='2'>ავტოფარეხი</option>
									<option value='3'>პარკინგის ადგილი</option>
									<option value='4'>მიწისქვეშა პარკინგი</option>
									<option value='5'>ფასიანი პარკინგი</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect04'
								>
									აუზი
								</label>
								<select
									className='form-select'
									id='inputGroupSelect04'
									ref={pool}
								>
									<option selected value=''>
										აირჩიე
									</option>
									<option value='1'>ღია</option>
									<option value='2'>დახურული</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect05'
								>
									ცხელი წყალი
								</label>
								<select
									className='form-select'
									id='inputGroupSelect05'
									ref={hotWater}
								>
									<option selected value=''>
										აირჩიე
									</option>
									<option value='1'>გაზის გამაცხელებელი</option>
									<option value='2'>ავზი</option>
									<option value='3'>დენის გამაცხელებელი</option>
									<option value='4'>ბინებრვი ცეხელი წყალი</option>
									<option value='5'>მზის გამათბობელი</option>
									<option value='6'>ცენტრალური გათბობის სისტემა</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<label
									className='input-group-text'
									htmlFor='inputGroupSelect05'
								>
									გათბობა
								</label>
								<select
									className='form-select'
									id='inputGroupSelect05'
									ref={Heating}
								>
									<option selected value=''>
										აირჩიე
									</option>
									<option value='1'>ცენტრალური გათბობა</option>
									<option value='2'>გაზის გამათბობელი</option>
									<option value='3'>დენის გამათბობელი</option>
									<option value='4'>იატაკის გათბობა</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'
								>
									სათაური
								</span>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='სათაური'
									ref={apartmentTitle}
								/>
							</div>
							<div className='form-floating mb-3'>
								<textarea
									className='form-control'
									placeholder='Leave a comment here'
									id='floatingTextarea2'
									style={{ height: '100px' }}
									ref={description}
								></textarea>
								<label for='floatingTextarea2'>აღწერა</label>
							</div>
							<div className='mb-3'>
								<input
									type='file'
									class='form-control'
									aria-label='file example'
									required
									ref={imageRef}
								/>
								<div class='invalid-feedback'>
									Example invalid form file feedback
								</div>
							</div>
							<div className='input-group mb-3'>
								<span className='input-group-text'>ფასი</span>
								<select
									className='form-select'
									id='inputGroupSelect05'
									ref={currencyType}
								>
									<option selected value=''>
										აირჩიე
									</option>
									<option value='1'>დოლარი</option>
									<option value='2'>ლარი</option>
								</select>
								<input
									type='text'
									aria-label='Last name'
									className='form-control'
									placeholder='სრული ფასი '
									ref={priceRef}
								/>
							</div>
							<button
								className='btn bg-success mb-5'
								onClick={() => postData()}
							>
								{' '}
								გამოქვეყნება
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Apartment;
