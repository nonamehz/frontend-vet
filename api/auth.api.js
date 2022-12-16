import axios from 'axios';


export const loginUser = async (user) => await axios.post('http://localhost:8080/api/auth/login', user);

export const registerUser = async (user) => await axios.post('http://localhost:8080/api/usuarios', user);

export const getPets = async (pet) => await axios.get('http://localhost:8080/api/mascotas');

export const registerPet = async (pet) => await axios.post('http://localhost:8080/api/mascotas', pet);