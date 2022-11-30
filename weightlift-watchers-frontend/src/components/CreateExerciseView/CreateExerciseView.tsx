import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Row} from 'react-bootstrap';

const CreateExerciseView = () => {
    return (
        <Container fluid>
            <Form>
                <FormGroup>
                    <FormLabel>Exercise</FormLabel>
                    <FormControl
                        type={'text'}
                        placeholder={'Enter the name of the exercise'} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type={'text'}
                        placeholder={'Enter a description for your exercise (optional)'}/>
                </FormGroup>
                <FormGroup as={Row}>
                    <Col>
                        <FormLabel>Sets</FormLabel>
                        <FormControl
                            type={'text'}
                            placeholder={'Current number of sets'}/>
                    </Col>
                    <Col>
                        <FormLabel>Reps</FormLabel>
                        <FormControl
                            type={'text'}
                            placeholder={'Current number of reps'}/>
                    </Col>
                    <Col>
                        <FormLabel>Weight</FormLabel>
                        <Row>
                            <Col md={3}>
                                <FormControl
                                    type={'text'}
                                    placeholder={'Current weight'}/>
                            </Col>
                            <Col md={3}>
                                <FormSelect>
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
