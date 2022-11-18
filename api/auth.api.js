import axios from 'axios';


export const loginUser = async (user) => await axios.post('http://localhost:8080/api/auth/login', user);

export const registerUser = async (user) => await axios.post('http://localhost:8080/api/usuarios', user);