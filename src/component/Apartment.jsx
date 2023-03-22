import React, { useState } from 'react';
import axios from 'axios';
import ParametersList from './ParametersList';

function Apartment() {
	const [post, setPost] = useState({
		main_category_type: '',
		building_status_type: '',
	});

	const handleInput = event => {
		setPost({ ...post, [event.target.name]: event.target.value });
	};

	const token = '2649637d51088234890f12de0146dad3c47d1426';

	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			user: 2,
		},
	};
	console.log(post);

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
									ჭერის სიმაღლე
								</span>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='0 მ'
									defaultValue=''
								/>
							</div>
							<h3>მდებარეობა</h3>
							<div className='input-group input-group-default mb-3'>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='ქალაქი'
								/>
							</div>
							<div className='input-group input-group-default mb-3'>
								<input
									type='text'
									className='form-control'
									aria-label='Sizing example input'
									aria-describedby='inputGroup-sizing-default'
									placeholder='მისამართი'
								/>
							</div>
						</div>
					</div>
					<ParametersList allParameters={handleInput} />
				</div>
			</div>
		</>
	);
}

export default Apartment;
