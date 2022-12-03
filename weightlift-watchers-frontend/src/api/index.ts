import {createUserRequest} from './types/createUserRequest';
import {createUserResponse} from './types/createUserResponse';
import axios, {AxiosInstance} from 'axios';
import {loginRequest} from './types/loginRequest';
import {loginResponse} from './types/loginResponse';
import {getUserResponse} from './types/getUserResponse';
import {getExercisesRequest} from './types/getExercisesRequest';
import {getExercisesResponse} from './types/getExercisesResponse';


const config = {
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
    timeout: 10000
}

let api: AxiosInstance = axios.create(config);

export async function createNewUser (request: createUserRequest) {
    return (await api.post<createUserResponse>('/user', request));
}

export async function loginUser (username: string, password: string) {

    const request: loginRequest = {
        password: password
    }

    const response = await api.post<loginResponse>(`/user/${username}/login`, request);

    if (response.status === 200) {

        localStorage.setItem('token', response.data.token);

        api = axios.create({
           ...config,
           headers: {
               Authorization: response.data.token
           }
        });

    }

    return response;

}

export async function retrieveUser (username: string) {
    return (await api.get<getUserResponse>(`/user/${username}`))
}

export async function retrieveExercises (exerciseIDs: string[]) {
    const request: getExercisesRequest = {
        ids: exerciseIDs
    };

    return await api.get<getExercisesResponse>('/exercises', {
        data: request,
    });

}
