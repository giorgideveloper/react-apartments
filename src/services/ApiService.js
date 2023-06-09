import axios from "axios";

const baseUrl = process.env.REACT_APP_APARTMENTS_BASE_URL || "";

// Axios instance
const instance = axios.create({
  baseURL: baseUrl,
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
  if (token)
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete instance.defaults.headers.common["Authorization"];
};

// Auth endpoints
const jwt = "/token/";
export const login = (data) => instance.post("login/", data);
export const register = (data) => instance.post("registration/", data);
export const refresh = (refresh) =>
  instance.post(`${jwt}refresh/`, { refresh });
export const verify = (data) => instance.post(`${jwt}verify/`, data);

// Apartments endpoints
export const getApartments = () => instance.get("/apartments");
export const getApartmentById = (id) => instance.get(`/apartments/${id}`);
export const addApartment = (data) => instance.post("/apartments", data);
export const deleteApartment = (id) => instance.delete(`/apartments/${id}`);
