import {Exercise} from '../../types/Exercise';
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Row} from 'react-bootstrap';
import {useState} from 'react';

interface ExerciseDetailViewProps {
    exercise: Exercise;
}

// TODO: this implementation preserves changes made in the UI when the user cancels their edit
// This is not ideal but fixing it is going to be a huge pain in the ass so I'm doing it later

const ExerciseDetailView = (props: ExerciseDetailViewProps) => {

    const [editing, setEditing] = useState<boolean>();

    return (
        <Container fluid>
            <Form>
                <FormGroup>
                    <FormLabel>Exercise</FormLabel>
                    <FormControl
                        type={'text'}
                        readOnly={!editing}
                        disabled={!editing}
                        defaultValue={props.exercise.name} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type={'text'}
                        readOnly={!editing}
                        disabled={!editing}
                        defaultValue={props.exercise.description}/>
                </FormGroup>
                <FormGroup as={Row}>
                    <Col>
                        <FormLabel>Sets</FormLabel>
                        <FormControl
                            type={'text'}
                            readOnly={!editing}
                            disabled={!editing}
                            defaultValue={props.exercise.sets}/>
                    </Col>
                    <Col>
                        <FormLabel>Reps</FormLabel>
                        <FormControl
                            type={'text'}
                            readOnly={!editing}
                            disabled={!editing}
                            defaultValue={props.exercise.reps}/>
                    </Col>
                    <Col>
                        <FormLabel>Weight</FormLabel>
                        <Row>
                            <Col md={3}>
                                <FormControl
                                    type={'text'}
                                    readOnly={!editing}
                                    disabled={!editing}
                                    defaultValue={props.exercise.weight}/>
                            </Col>
                            <Col md={3}>
                                <FormSelect disabled={!editing} value={props.exercise.units}>
                                    <option>lbs</option>
                                    <option>kg</option>
                                </FormSelect>
                            </Col>
                        </Row>
                    </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '20px'}}>
                    {editing ? (
                        <>
                            <Button style={{marginRight: '15px'}}>Submit Changes</Button>
                            <Button onClick={() => setEditing(false)}>Cancel Edit</Button>
                        </>
                    ) : <Button onClick={() => setEditing(true)}>Edit Exercise</Button>}
                </FormGroup>
            </Form>
        </Container>
    );
};

export default  ExerciseDetailView;
