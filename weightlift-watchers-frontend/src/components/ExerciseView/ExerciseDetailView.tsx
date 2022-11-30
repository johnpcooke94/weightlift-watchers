import {Exercise} from '../../types/Exercise';
import {Col, Container, Form, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';

interface ExerciseDetailViewProps {
    exercise: Exercise;
}

const ExerciseDetailView = (props: ExerciseDetailViewProps) => {
    return (
      <Container fluid>
          <Form>
              <FormGroup>
                  <FormLabel>Exercise</FormLabel>
                  <FormControl plaintext readOnly defaultValue={props.exercise.name}></FormControl>
              </FormGroup>
              <FormGroup>
                  <FormLabel>Description</FormLabel>
                  <FormControl plaintext readOnly defaultValue={props.exercise.description}></FormControl>
              </FormGroup>
              <FormGroup as={Row}>
                  <Col>
                      <FormLabel>Sets</FormLabel>
                      <FormControl plaintext readOnly defaultValue={props.exercise.sets}></FormControl>
                  </Col>
                  <Col>
                      <FormLabel>Reps</FormLabel>
                      <FormControl plaintext readOnly defaultValue={props.exercise.reps}></FormControl>
                  </Col>
                  <Col>
                      <FormLabel>Weight</FormLabel>
                      <FormControl plaintext readOnly defaultValue={props.exercise.weight + props.exercise.units}></FormControl>
                  </Col>
              </FormGroup>
              <FormGroup>

              </FormGroup>
          </Form>
      </Container>
    );
};

export default  ExerciseDetailView;
