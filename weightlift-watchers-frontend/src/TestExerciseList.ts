import {Exercise} from './types/Exercise';

const exercises: Exercise[] = [
    {
        _id: '1',
        name: 'Test Exercise 1',
        description: 'This is the first test exercise.',
        sets: 3,
        reps: 10,
        weight: 150,
        units: 'lbs'
    },
    {
        _id: '2',
        name: 'Test Exercise 2',
        description: 'This is the second test exercise.',
        sets: 5,
        reps: 5,
        weight: 200,
        units: 'lbs'
    },
    {
        _id: '3',
        name: 'Test Exercise 3',
        description: 'This is the final test exercise.',
        sets: 10,
        reps: 10,
        weight: 180,
        units: 'kg'
    },
]

export default exercises;
