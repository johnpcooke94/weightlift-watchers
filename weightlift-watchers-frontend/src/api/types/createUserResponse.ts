import {Exercise} from '../../types/Exercise';

export interface createUserResponse {
    username: string;
    // TODO: there's no need to send the hashed password back in the response here, need to update the backend to not do that
    password: string;
    exercises: Exercise[];
    _id: string;
}
