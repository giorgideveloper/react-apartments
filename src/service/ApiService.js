import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.geoevents.ge/api/',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default {
	getApartments() {
		return api.get('apartment-list/');
	},
	getApartment(id) {
		return api.get(`apartment-list/${id}`);
	},
	addApartment(str) {
		return api.post('apartment-create/', str);
	},
	deleteApartment(id) {
		return api.delete(`apartment-update/${id}`);
	},
};
