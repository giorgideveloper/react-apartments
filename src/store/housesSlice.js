// contentSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getHouses, getHousesById } from '../services/ApiService';

const initialState = {
	houses: [],
	housesById: [],
	isLoading: false,
	error: null,
};

// Get All House
export const fetchHouses = createAsyncThunk('house/fetchContent', async () => {
	try {
		const res = await getHouses();
		const data = await res.data;
		return data;
	} catch (error) {
		console.log(error);
	}
});

// Get House by Id
export const fetchHousesById = createAsyncThunk(
	'houseContent/fetchHousesById',
	async id => {
		try {
			const res = await getHousesById(id);
			const data = await res.data;
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const houseSlice = createSlice({
	name: 'house',
	initialState,
	reducers: {},
	extraReducers: builder => {
		//  House
		builder
			.addCase(fetchHouses.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchHouses.fulfilled, (state, action) => {
				state.isLoading = false;
				state.houses = action.payload;
			})
			.addCase(fetchHouses.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
		// HousesById
		builder
			.addCase(fetchHousesById.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchHousesById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.housesById = action.payload;
			})
			.addCase(fetchHousesById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export default houseSlice.reducer;
