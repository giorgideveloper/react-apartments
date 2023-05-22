import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import loadingReducer from './loadingSlice';
import contentReducer from './contentSlice';
import housesReducer from './housesSlice';
import favoriteReducer from './favoriteSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		loading: loadingReducer,
		content: contentReducer,
		house: housesReducer,
		favorite: favoriteReducer,
	},
});
