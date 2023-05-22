import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		setFavorite: [],
		setFavoriteType: false,
	},
	reducers: {
		addFavorite: (state, action) => {
			state.setFavorite = action.payload;
		},
		addType: (state, action) => {
			state.setFavoriteType = action.payload;
		},
	},
});

export const { addFavorite, addType } = favoriteSlice.actions;

export default favoriteSlice.reducer;
