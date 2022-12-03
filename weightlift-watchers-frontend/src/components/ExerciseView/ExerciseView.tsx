import ExerciseDetailView from './ExerciseDetailView';
import {
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContainer,
    TabContent,
    TabPane
} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Exercise} from '../../types/Exercise';
import {WebState} from '../../webstate/WebState';
import {retrieveExercises} from '../../api';

const ExerciseView = () => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [defaultExercise, setDefaultExercise] = useState<Exercise | undefined>(undefined);

    const webState = WebState.getInstance();


    useEffect(() => {
        async function getExercises() {

            if (webState.user) {

                if (webState.exercises) {
                    setExercises(webState.exercises);
                } else {
                    const response = await retrieveExercises(webState.user.exercises);

                    if (response.status === 200) {
                        setExercises(response.data.exercises);
                        webState.exercises = response.data.exercises;
                    } else {
                        alert('There was a problem retrieving your exercises.');
                    }
                }

            }

        }
        getExercises();
    }, []);

    useEffect(() => {
        if (exercises.length > 0) {
            setDefaultExercise(exercises[0]);
        }
    }, [exercises]);

    if (!webState.user) {
        return (
            <Container fluid style={{textAlign: 'center'}}>
                <h2>Please log in to see your exercises.</h2>
            </Container>
        );
    }

    return (<> {defaultExercise ? (
            <Container fluid>
                <TabContainer defaultActiveKey={defaultExercise._id}>
                    <Row>
                        <Col md={3}>
                            <Container>
                                <Nav variant={'pills'} className='flex-column'>
                                    {exercises.map((e: Exercise) => (
                                            <NavItem>
                                                <NavLink eventKey={e._id}>{e.name}</NavLink>
                                            </NavItem>
                                    ))}
                                </Nav>
                            </Container>
                        </Col>
                        <Col>
                            <TabContent>
                                {exercises.map((e: Exercise) => (
                                    <TabPane eventKey={e._id}>
                                        <ExerciseDetailView exercise={e}/>
                                    </TabPane>
                                ))}
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        ) : (
            <Container fluid>
                <h2>Loading your exercises...</h2>
            </Container>
        )}
        </>

    );
};

export default ExerciseView;
