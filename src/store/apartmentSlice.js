import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from '../helpers/toast';
import { getApartments } from '../services/ApiService';
import { deleteApartment } from '../services/ApiService';
import axios from 'axios';

const initialState = {
	apartments: [],
	isLoading: false,
	error: null,
};
//Get all apartments
export const getAllApartments = createAsyncThunk(
	'apartment/getAllApartments',
	async () => {
		const res = await axios('https://jsonplaceholder.typicode.com/posts');
		const data = await res.data;
		console.log(data);
		return data;
	}
);
// Delete apartments by id
export const deleteApartments = createAsyncThunk(
	'deleteApartment/deleteApartment',
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

export const apartmentSlice = createSlice({
	name: 'apartment',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllApartments.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getAllApartments.fulfilled, (state, action) => {
			state.isLoading = false;
			state.contents = action.payload;
		});
		builder.addCase(getAllApartments.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
	},
});

export default apartmentSlice.reducer;
