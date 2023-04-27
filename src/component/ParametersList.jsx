import React from 'react';

function ParametersList({
	allParameters,
	mobileRef,
	currentRef,
	priceRef,
	areaRef,
	bedroomsRef,
	bathroomRef,
	numbersRef,
	apartmentFloorRef,
	maxApartmentRef,
	maxGuestsRef,
	ceilingRef,
	conditioner,
	isChecked,
	handleCheckboxChange,
	submit,
}) {
	return (
		<>
			{' '}
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
							ref={maxGuestsRef}
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
							ref={areaRef}
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
							სართულების რაოდენობა
						</label>
						<select
							className='form-select'
							id='inputGroupSelect01'
							ref={maxApartmentRef}
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
							ref={apartmentFloorRef}
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
					<div class='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='checkbox'
							id='inlineCheckbox1'
							value={true}
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<label className='form-check-label' htmlFor='inlineCheckbox1'>
							კონდიციონერი
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							ტელევიზორი
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							ინტერნეტი
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							ბუნებრივი აირი
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							ჭურჭლის სარეცხი მანქანა
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							აივანი
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							ვერანდა
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label' htmlFor='inlineCheckbox2'>
							ლიფტი
						</label>
					</div>
					<div class='form-check form-check-inline'>
						<input
							class='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label class='form-check-label mb-3' htmlFor='inlineCheckbox2'>
							გათბობა
						</label>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect01'>
							ოთახები
						</label>
						<select
							className='form-select'
							id='inputGroupSelect01'
							name='room'
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
							ref={bedroomsRef}
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
							ref={bathroomRef}
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
						<label className='input-group-text' htmlFor='inputGroupSelect04'>
							აუზი
						</label>
						<select className='form-select' id='inputGroupSelect04'>
							<option value=''>აირჩიე</option>
							<option value='1'>ღია</option>
							<option value='2'>დახურული</option>
						</select>
					</div>
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
						<label className='input-group-text' htmlFor='inputGroupSelect05'>
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
					<div className='input-group mb-3'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							სათაური
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='სათაური'
							name='title'
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
						<label htmlFor='floatingTextarea2'>აღწერა</label>
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
							ref={priceRef}
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
