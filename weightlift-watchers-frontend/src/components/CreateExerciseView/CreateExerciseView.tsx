import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Row} from 'react-bootstrap';
import {WebState} from '../../webstate/WebState';
import {FormEvent, useState} from 'react';
import {Exercise} from '../../types/Exercise';
import {createExerciseRequest} from '../../api/types/createExerciseRequest';
import {createExercise} from '../../api';
import {Navigate} from 'react-router-dom';

const CreateExerciseView = () => {

    const [submitted, setSubmitted] = useState<boolean>(false);

    const webstate = WebState.getInstance();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const nameInput = formData.get('name');
        const descriptionInput = formData.get('description');
        const setsInput = formData.get('sets');
        const repsInput = formData.get('reps');
        const weightInput = formData.get('weight');
        const unitsInput = formData.get('units');

        const request: createExerciseRequest =  {
            name: nameInput as string,
            description: descriptionInput ? descriptionInput as string : undefined,
            sets: setsInput as unknown as number,
            reps: repsInput as unknown as number,
            weight: weightInput as unknown as number,
            units: unitsInput === 'kg' ? 'kg' : 'lbs',
        }

        const response = await createExercise(request);

        if (response.status === 201) {
            const newExercise: Exercise = {
                _id: response.data._id,
                name: response.data.name,
                description: response.data.description,
                sets: response.data.sets,
                reps: response.data.reps,
                weight: response.data.weight,
                units: response.data.units,
            }

            webstate.exercises?.push(newExercise);
            setSubmitted(true);
            alert('Success!');
        }

    };

    if (!webstate.user) {
        return (
            <Container fluid style={{textAlign: 'center'}}>
                <h1 style={{textAlign:'center'}}>Please log in to create an exercise.</h1>
            </Container>
        );
    }

    if (submitted) {
        return (
            <Navigate to={'/exercises'}/>
        );
    }

    return (
        <Container fluid>
            <h1 style={{textAlign:'center'}}>Create a new exercise</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Exercise</FormLabel>
                    <FormControl
                        type={'text'}
                        placeholder={'Enter the name of the exercise'}
                        name={'name'}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type={'text'}
                        placeholder={'Enter a description for your exercise (optional)'}
                        name={'description'}/>
                </FormGroup>
                <FormGroup as={Row}>
                    <Col>
                        <FormLabel>Sets</FormLabel>
                        <FormControl
                            type={'text'}
                            placeholder={'Current number of sets'}
                            name={'sets'}/>
                    </Col>
                    <Col>
                        <FormLabel>Reps</FormLabel>
                        <FormControl
                            type={'text'}
                            placeholder={'Current number of reps'}
                            name={'reps'}/>
                    </Col>
                    <Col>
                        <FormLabel>Weight</FormLabel>
                        <Row>
                            <Col md={3}>
                                <FormControl
                                    type={'text'}
                                    placeholder={'Current weight'}
                                    name={'weight'}/>
                            </Col>
                            <Col md={3}>
                                <FormSelect name={'units'}>
                                    <option>lbs</option>
                                    <option>kg</option>
                                </FormSelect>
                            </Col>
                        </Row>
                    </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '20px'}}>
                    <Button type={'submit'}>Submit</Button>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default CreateExerciseView;
