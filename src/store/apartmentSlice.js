import { createSlice } from '@reduxjs/toolkit';
import toast from '../helpers/toast';

const initialState = {
	apartment: localStorage.getItem('apartment')
		? JSON.parse(localStorage.getItem('apartment'))
		: [],
	apartmentQuantity: 0,
	apartmentAmount: 0,
};

const apartmentSlice = createSlice({
	name: 'apartment',
	initialState,
	reducers: {
		addToApartment(state, action) {
			const itemIndex = state.apartment.findIndex(
				item => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.apartment[itemIndex].apartmentQuantity += 1;
				toast('info', 'increased apartment quantity');
			} else {
				const tempApartments = { ...action.payload, apartmentQuantity: 1 };
				state.apartment.push(tempApartments);
				toast('success', ` added a new apartment to favorite`);
			}

			localStorage.setItem('apartment', JSON.stringify(state.apartment));
		},
	},
});

export const { addToApartment } = apartmentSlice.actions;
export default apartmentSlice.reducer;
