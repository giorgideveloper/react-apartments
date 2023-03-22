import React from 'react';

function ParametersList({ allParameters }) {
	return (
		<>
			{' '}
			<div className='row pt-4'>
				<div className='col-md-6 col-12'>
					<h3>პარამეტრები</h3>
					<div className='input-group mb-3'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							სრული ფართი
						</span>
						<input
							type='text'
							className='form-control'
							aria-label='Sizing example input'
							aria-describedby='inputGroup-sizing-default'
							placeholder='ფართი'
							name='room'
							onChange={allParameters}
						/>
					</div>
					<div className='input-group mb-3'>
						<span className='input-group-text'>სართული</span>
						<input
							type='text'
							aria-label='First name'
							className='form-control'
							placeholder='სართული სულ'
						/>
						<input
							type='text'
							aria-label='Last name'
							className='form-control'
							placeholder='სართული'
						/>
					</div>
					<div className='input-group mb-3'>
						<label className='input-group-text' htmlFor='inputGroupSelect01'>
							ოთახები
						</label>
						<select className='form-select' id='inputGroupSelect01'>
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
						<select className='form-select' id='inputGroupSelect02'>
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
							სველი წერტილი
						</label>
						<select className='form-select' id='inputGroupSelect03'>
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
						<select className='form-select' id='inputGroupSelect04'>
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
						<select className='form-select' id='inputGroupSelect05'>
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
						/>
					</div>
					<div className='form-floating mb-3'>
						<textarea
							className='form-control'
							placeholder='Leave a comment here'
							id='floatingTextarea2'
							style={{ height: '100px' }}
						></textarea>
						<label htmlFor='floatingTextarea2'>აღწერა</label>
					</div>
					<div className='mb-3'>
						<input
							type='file'
							className='form-control'
							aria-label='file example'
							required
						/>
						<div className='invalid-feedback'>
							Example invalid form file feedback
						</div>
					</div>
					<div className='input-group mb-3'>
						<span className='input-group-text'>ფასი</span>
						<select className='form-select' id='inputGroupSelect05'>
							<option value=''>აირჩიე</option>
							<option value='1'>დოლარი</option>
							<option value='2'>ლარი</option>
						</select>
						<input
							type='text'
							aria-label='Last name'
							className='form-control'
							placeholder='სრული ფასი '
						/>
					</div>
					<button className='btn bg-success mb-5'> გამოქვეყნება</button>
				</div>
			</div>
		</>
	);
}

export default ParametersList;
