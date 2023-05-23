import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		setFavorite: [],
		setFavoriteType: false,
	},
	reducers: {
		addFavorite: (state, action) => {
			let existsItemIndex = state.setFavorite?.findIndex(
				item => item.id === action.payload?.id
			);
			if (existsItemIndex !== -1) {
				state.setFavorite.splice(existsItemIndex, 1);
			} else {
				let allFavorite = { ...action.payload };
				state.setFavorite?.push(allFavorite);
			}
		},
		removeFromFavorite: (state, action) => {
			const itemToRemove = action.payload;
			const index = state.setFavorite.findIndex(
				item => item.id === itemToRemove.id
			);
			if (index !== -1) {
				state.setFavorite.splice(index, 1);
			}
		},
	},
});

export const { addFavorite, addType } = favoriteSlice.actions;

export default favoriteSlice.reducer;
