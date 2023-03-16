import axios from 'axios';

const api = axios.create({
	baseURL: 'http://f90a-5-152-82-202.ngrok.io/api/',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default {
	getApartments() {
		return api.get('apartment-list');
	},
	getApartment(id) {
		return api.get(`apartment-list/${id}`);
	},
};
