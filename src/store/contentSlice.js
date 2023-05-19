// contentSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteApartment, getApartments } from '../services/ApiService';
import toast from '../helpers/toast';

const initialState = {
	contents: [],
	isLoading: false,
	error: null,
};
// Get Apartments
export const fetchContent = createAsyncThunk(
	'content/fetchContent',
	async () => {
		const res = await getApartments();
		const data = await res.data;
		return data;
	}
);
// Delete Apartments
export const deleteApartments = createAsyncThunk(
	'delete/deleteApartments',
	async id => {
		try {
			await deleteApartment(id);
			toast('success', 'Apartment deleted successfully!');
			fetchContent();
		} catch (error) {
			console.log(error);
			toast('error', 'Apartment could not be deleted');
		}
	}
);

export const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchContent.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchContent.fulfilled, (state, action) => {
			state.isLoading = false;
			state.contents = action.payload;
		});
		builder.addCase(fetchContent.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
	},
});

export default contentSlice.reducer;
