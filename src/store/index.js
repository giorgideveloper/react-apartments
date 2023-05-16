import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import apartmentReducer from './apartmentSlice';
import loadingReducer from './loadingSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		loading: loadingReducer,
		apartment: apartmentReducer,
	},
});
