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

// Requests
export const getApartments = () => instance.get("/apartments");
export const getApartmentById = (id) => instance.get(`/apartments/${id}`);
export const addApartment = (data) => instance.post("/apartments", data);
export const deleteApartment = (id) => instance.delete(`/apartments/${id}`);
