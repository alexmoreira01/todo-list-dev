import axios from 'axios';

export const api = axios.create({
    // baseURL: `${import.meta.env.VITE_API_URL}/todo`,
    baseURL: `${import.meta.env.VITE_API_URL_D}/todo`
});