import {Exercise} from '../../../types/Exercise';
import {Container, ListGroup, ListGroupItem} from 'react-bootstrap';

interface ExerciseListViewProps {
    exercises: Exercise[];
}

const ExerciseListView = (props: ExerciseListViewProps) => {
    return (
        <Container>
            <ListGroup>
                {props.exercises.map((e: Exercise) => (
                    <ListGroupItem>{e.name}</ListGroupItem>
                    ))}
            </ListGroup>
        </Container>
    );
};

export default ExerciseListView;
