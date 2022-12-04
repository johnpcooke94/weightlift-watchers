import {Exercise} from '../../types/Exercise';
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Row} from 'react-bootstrap';
import {useState} from 'react';
import {updateExercise} from '../../api';
import {WebState} from '../../webstate/WebState';

interface ExerciseDetailViewProps {
    exercise: Exercise;
}

// TODO: this implementation preserves changes made in the UI when the user cancels their edit
// This is not ideal but fixing it is going to be a huge pain in the ass so I'm doing it later

const ExerciseDetailView = (props: ExerciseDetailViewProps) => {

    const [editing, setEditing] = useState<boolean>();

    const handleSubmit = async () => {
        // TODO: This is document call is extremely un-React-y but the FormEvent implementation was submitting at weird times for some reason
        const form = document.getElementById('updateExerciseForm') as HTMLFormElement;

        const formData = new FormData(form);

        const nameInput = formData.get('name');
        const descriptionInput = formData.get('description');
        const setsInput = formData.get('sets');
        const repsInput = formData.get('reps');
        const weightInput = formData.get('weight');
        const unitsInput = formData.get('units');

        // TODO: this unknown cast on the numbers is gross, find a better way to ensure only number input from the form
        const exerciseFromForm: Exercise =  {
            _id: props.exercise._id,
            name: nameInput as string,
            description: descriptionInput as string,
            sets: setsInput as unknown as number,
            reps: repsInput as unknown as number,
            weight: weightInput as unknown as number,
            units: unitsInput === 'kg' ? 'kg' : 'lbs',
        }

        const response = await updateExercise(exerciseFromForm);

        if (response.status === 204) {
            const webstate = WebState.getInstance();

            if (webstate.exercises) {
                for (let i = 0; i < webstate.exercises?.length; i++) {
                    if (webstate.exercises[i]._id === props.exercise._id) {
                        webstate.exercises[i] = exerciseFromForm;
                    }
                }
            }

            setEditing(false);
            alert('Success!');
        } else {
            alert('A problem was encountered while updating this exercise.');
        }

    }

    return (
        <Container fluid>
            <Form id={'updateExerciseForm'}>
                <FormGroup>
                    <FormLabel>Exercise</FormLabel>
                    <FormControl
                        type={'text'}
                        readOnly={!editing}
                        disabled={!editing}
                        defaultValue={props.exercise.name}
                        name={'name'}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type={'text'}
                        readOnly={!editing}
                        disabled={!editing}
                        defaultValue={props.exercise.description}
                        name={'description'}/>
                </FormGroup>
                <FormGroup as={Row}>
                    <Col>
                        <FormLabel>Sets</FormLabel>
                        <FormControl
                            type={'text'}
                            readOnly={!editing}
                            disabled={!editing}
                            defaultValue={props.exercise.sets}
                            name={'sets'}/>
                    </Col>
                    <Col>
                        <FormLabel>Reps</FormLabel>
                        <FormControl
                            type={'text'}
                            readOnly={!editing}
                            disabled={!editing}
                            defaultValue={props.exercise.reps}
                            name={'reps'}/>
                    </Col>
                    <Col>
                        <FormLabel>Weight</FormLabel>
                        <Row>
                            <Col md={3}>
                                <FormControl
                                    type={'text'}
                                    readOnly={!editing}
                                    disabled={!editing}
                                    defaultValue={props.exercise.weight}
                                    name={'weight'}/>
                            </Col>
                            <Col md={3}>
                                <FormSelect disabled={!editing} value={props.exercise.units} name={'units'}>
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
                            <Button onClick={handleSubmit} style={{marginRight: '15px'}}>Submit Changes</Button>
                            <Button onClick={() => setEditing(false)}>Cancel Edit</Button>
                        </>
                    ) : <Button onClick={() => setEditing(true)}>Edit Exercise</Button>}
                </FormGroup>
            </Form>
        </Container>
    );
};

export default  ExerciseDetailView;
