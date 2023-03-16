import React from 'react';

function apartment() {
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
								value='option1'
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
								value='option2'
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
								value='option3'
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
								value='option4'
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
								value='option5'
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
								value='option6'
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
								value='option7'
							/>
							<label class='form-check-label' for='inlineRadio7'>
								მშენებარე
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default apartment;
