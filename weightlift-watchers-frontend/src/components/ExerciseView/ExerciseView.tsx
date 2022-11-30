import ExerciseListView from './ExerciseListView/ExerciseListView';
import ExerciseDetailView from './ExerciseDetailView/ExerciseDetailView';
import {Container} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import TestExerciseList from '../../TestExerciseList';
import {Exercise} from '../../types/Exercise';

const ExerciseView = () => {

    const [exercises, setExercises] = useState<Exercise[]>([]);

    // TODO: get this stuff from the server using the API
    useEffect(() => {
        setExercises(TestExerciseList);
    })

    return (
        <Container>
            <ExerciseListView exercises={exercises}/>
            <ExerciseDetailView/>
        </Container>
    );
};

export default ExerciseView;
