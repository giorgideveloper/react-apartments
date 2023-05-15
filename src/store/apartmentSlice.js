import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from '../helpers/toast';
import { getApartments } from '../services/ApiService';
import { deleteApartment } from '../services/ApiService';

const initialState = {
	apartment: [],
	apartmentQuantity: 0,
	apartmentAmount: 0,
};
//Get all apartments
export const getAllApartments = createAsyncThunk(
	'apartment/getApartmentsRedux',
	async () => {
		const response = await getApartments();
		console.log(response.data.results);
		return response.data;
	}
);
// Delete apartments by id
export const deleteApartments = createAsyncThunk(
	'deleteApartment/deleteApartmentRedux',
	async id => {
		try {
			const res = await deleteApartment(id);
			console.log(res, 'deleted successfully!');
			toast('success', 'Apartment deleted successfully!');
		} catch (error) {
			console.log(error);
			toast('error', 'Apartment could not be deleted');
		}
	}
);

const apartmentSlice = createSlice({
	name: 'apartment',
	initialState,
	extraReducers(builder) {
		// trending movies
		builder
			.addCase(getAllApartments.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(getAllApartments.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.apartment = state.apartment.concat(action.payload);
			})
			.addCase(getAllApartments.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
	},
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
