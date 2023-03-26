import axios from 'axios';
export const artistInstance = axios.create({
	baseURL: `${import.meta.env.VITE_MY_URL}/artists`,
});

export const albumInstance = axios.create({
	baseURL: `${import.meta.env.VITE_MY_URL}/albums`,
});
