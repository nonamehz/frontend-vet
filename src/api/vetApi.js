import axios from 'axios';
// import { getEnvVariables } from '../helpers/getEnvVariables';


// const { VITE_API_URL } = getEnvVariables();
const VITE_API_URL = 'http://localhost:8080/api'

const vetApi = axios.create({
    baseURL: VITE_API_URL
});

vetApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
});


export default vetApi;