import React from 'react';

function ParametersList({
	allParameters,
	ceilingRef,
	checkboxes,
	setCheckboxes,
	submit,
}) {
	const handleCheckboxChange = index => {
		const newCheckboxes = [...checkboxes];
		newCheckboxes[index].checked = !newCheckboxes[index].checked;
		setCheckboxes(newCheckboxes);
	};

	return (
		<>
			<div className='row pt-4'>
				<div className='col-md-6 col-12'>
					<h3>პარამეტრები</h3>

					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect01'>
							მაქსიმალური სტუმრების რაოდენობა
						</label>
						<select
							className='form-select'
							id='inputGroupSelect01'
							name='max_guests'
							onChange={allParameters}
						>
							<option value=''>არჩევა რაოდ</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							ბინის კვადრატულობა
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='ბინის კვადრატულობა'
							name='area'
							onChange={allParameters}
						/>
					</div>
					<div className='input-group input-group-default mb-3'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							ჭერის სიმაღლე
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='0 მ'
							defaultValue=''
							ref={ceilingRef}
							onChange={allParameters}
						/>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect01'>
							ოთახების რაოდენობა
						</label>
						<select
							className='form-select'
							id='inputGroupSelect01'
							name='rooms'
							onChange={allParameters}
						>
							<option value=''>არჩევა რაოდ</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect02'>
							საძინებელი
						</label>
						<select
							className='form-select'
							id='inputGroupSelect02'
							name='bedroom'
							onChange={allParameters}
						>
							<option value=''>არჩევა რაოდ</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect03'>
							აბაზანა
						</label>
						<select
							className='form-select'
							id='inputGroupSelect03'
							name='bathroom'
							onChange={allParameters}
						>
							<option value=''>არჩევა რაოდ</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect01'>
							სართულების რაოდენობა
						</label>
						<select
							className='form-select'
							id='inputGroupSelect01'
							name='apartment_floor'
							onChange={allParameters}
						>
							<option value=''>არჩევა რაოდ</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
							<option value='13'>13</option>
							<option value='14'>14</option>
							<option value='15'>15</option>
							<option value='16'>16</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect01'>
							ბინის სართული
						</label>
						<select
							className='form-select'
							id='inputGroupSelect01'
							name='numbers_of_floors'
							onChange={allParameters}
						>
							<option value=''>არჩევა რაოდ</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
							<option value='13'>13</option>
							<option value='14'>14</option>
							<option value='15'>15</option>
							<option value='16'>16</option>
						</select>
					</div>
					{checkboxes.map((checkbox, index) => (
						<div key={index} className='form-check form-check-inline'>
							<label key={index}>
								<input
									className='form-check-input'
									type='checkbox'
									checked={checkbox.checked}
									onChange={() => handleCheckboxChange(index)}
								/>
								{checkbox.label}
							</label>
						</div>
					))}
					<div className='input-group mb-3'>
						<label
							className='input-group-text'
							htmlFor='inputGroupSelect05'
							name='heating_type'
						>
							გათბობა
						</label>
						<select className='form-select' id='inputGroupSelect05'>
							<option value=''>აირჩიე</option>
							<option value='1'>ცენტრალური გათბობა</option>
							<option value='2'>გაზის გამათბობელი</option>
							<option value='3'>დენის გამათბობელი</option>
							<option value='4'>იატაკის გათბობა</option>
						</select>
					</div>

					{/* 	<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect04'>
							აუზი
						</label>
						<select className='form-select' id='inputGroupSelect04'>
							<option value=''>აირჩიე</option>
							<option value='1'>ღია</option>
							<option value='2'>დახურული</option>
						</select>
					</div> */}
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect05'>
							ცხელი წყალი
						</label>
						<select
							className='form-select'
							id='inputGroupSelect05'
							name='hot_water_type'
							onChange={allParameters}
						>
							<option value=''>აირჩიე</option>
							<option value='1'>გაზის გამაცხელებელი</option>
							<option value='2'>ავზი</option>
							<option value='3'>დენის გამაცხელებელი</option>
							<option value='4'>ბინებრვი ცეხელი წყალი</option>
							<option value='5'>მზის გამათბობელი</option>
							<option value='6'>ცენტრალური გათბობის სისტემა</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect04'>
							პარკინგი
						</label>
						<select
							className='form-select'
							id='inputGroupSelect04'
							name='Parking_type'
							onChange={allParameters}
						>
							<option value=''>აირჩიე</option>
							<option value='1'>ეზოს პარკინგი</option>
							<option value='2'>ავტოფარეხი</option>
							<option value='3'>პარკინგის ადგილი</option>
							<option value='4'>მიწისქვეშა პარკინგი</option>
							<option value='5'>ფასიანი პარკინგი</option>
						</select>
					</div>
					<div className='input-group mb-3'>
						<span className='input-group-text'>ფასი</span>
						<select
							className='form-select'
							id='inputGroupSelect05'
							name='Currency_type'
							onChange={allParameters}
						>
							<option value=''>აირჩიე</option>
							<option value='1'>დოლარი</option>
							<option value='2'>ლარი</option>
						</select>
						<input
							type='text'
							aria-label='Last name'
							className='form-control'
							placeholder='სრული ფასი '
							name='price'
							onChange={allParameters}
						/>
					</div>
					<div className='input-group mb-3'>
						<span
							className='input-group-text'
							id='inputGroup-sizing-default'
							name='owner_name'
						>
							მესაკუთრის სახელი
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='მფლობელის სახელი'
							name='owner_name'
							onChange={allParameters}
						/>
					</div>
					<div className='input-group mb-3'>
						<span
							className='input-group-text'
							id='inputGroup-sizing-default'
							name='owner_name'
						>
							მობილური
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='მობილური'
							name='mobile'
							onChange={allParameters}
						/>
					</div>
					<div className='form-floating mb-3'>
						<textarea
							className='form-control'
							placeholder='Leave a comment here'
							id='floatingTextarea2'
							style={{ height: '100px' }}
							name='description'
							onChange={allParameters}
						></textarea>
						<label htmlFor='floatingTextarea2'>სრული აღწერა</label>
					</div>
					<div className='mb-3'>
						<input
							type='file'
							className='form-control'
							aria-label='file example'
							// required
						/>
						<div className='invalid-feedback'>
							Example invalid form file feedback
						</div>
					</div>
					<div className='input-group mb-3'>
						<span
							className='input-group-text'
							id='inputGroup-sizing-default'
							name='owner_name'
						>
							Youtube
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='youtube'
							name='youtube'
							onChange={allParameters}
						/>
					</div>
					<button className='btn bg-success mb-5' onClick={() => submit()}>
						{' '}
						გამოქვეყნება
					</button>
				</div>
			</div>
		</>
	);
}

export default ParametersList;
