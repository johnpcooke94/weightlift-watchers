import {Exercise} from '../../types/Exercise';

export interface createUserResponse {
    username: string;
    exercises: Exercise[];
    _id: string;
}
