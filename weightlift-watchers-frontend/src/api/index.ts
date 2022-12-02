import {createUserRequest} from './types/createUserRequest';
import {createUserResponse} from './types/createUserResponse';
import axios, {AxiosInstance} from 'axios';


//const token = localStorage.getItem('token');

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
    timeout: 10000
});

export async function createNewUser (request: createUserRequest) {
    return (await api.post<createUserResponse>('/user', request));
}
