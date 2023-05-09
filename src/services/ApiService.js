import axios from "axios";

// Axios instance
const instance = axios.create({
  baseURL: "https://api.geoevents.ge/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/**
 * Set token for axios instance
 *
 * @param {*} token
 */
export const setToken = (token) => {
  instance.defaults.withCredentials = true;
  instance.defaults.headers.common["Authorization"] = `Token ${token}`;
};

// Auth endpoints
const auth = "/auth";
export const login = (data) => {
  instance.defaults.baseURL = "https://api.geoevents.ge";

  return instance.post(`${auth}/token/login/`, data);
};
export const logout = () => instance.post(`${auth}/logout/`);
export const register = (data) => instance.post(`${auth}/registration/`, data);
export const user = () => instance.get(`${auth}/user/`);

// Apartments endpoints
export const getApartments = () => {
  instance.defaults.baseURL = "https://api.geoevents.ge/api";

  return instance.get("/apartments");
};
export const getApartmentById = (id) => instance.get(`/apartments/${id}`);
export const addApartment = (data) => instance.post("/apartments", data);
export const deleteApartment = (id) => instance.delete(`/apartments/${id}`);
