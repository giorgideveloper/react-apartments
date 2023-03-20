import React, { useState } from 'react';
import Apartment from './Apartment';
import HomeList from './HomeList';

function AddPost() {
	const [selects, setSelects] = useState();
	console.log(selects);
	return (
		<>
			<div className='container'>
				<div className='row pt-4'>
					<div className='col-12 col-md-6'>
						<h1> Add {selects}</h1>
						<div className='input-group mb-3'>
							<label className='input-group-text' htmlFor='inputGroupSelect01'>
								უძრავი ქონების ტიპი
							</label>
							<select
								className='form-select'
								id='inputGroupSelect01'
								value={selects}
								onChange={e => setSelects(e.target.value)}
							>
								<option selected value=''>
									არჩევა
								</option>
								<option value='apartment'>კორპუსი ბინა</option>
								<option value='home'>სახლი და აგარაკი</option>
								<option value='space'>კომერციული ფართი</option>
								<option value='land'>მიწის ნაკვეთი</option>
								<option value='hotel'>სასტუმრო</option>
							</select>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='content'>
						{(selects === 'apartment' && <Apartment />) ||
							(selects === 'home' && <HomeList />) ||
							(selects === 'space' && <h2>კომერციული ფართი</h2>) ||
							(selects === 'land' && <h2>მიწის ნაკვეთი</h2>) ||
							(selects === 'hotel' && <h2>სასტუმრო</h2>)}
					</div>
				</div>
			</div>
		</>
	);
}

export default AddPost;
