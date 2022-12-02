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
import TestExerciseList from '../../TestExerciseList';
import {Exercise} from '../../types/Exercise';
import testExerciseList from '../../TestExerciseList';

const ExerciseView = () => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [activeExercise, setActiveExercise] = useState<Exercise>();

    // TODO: get this stuff from the server using the API
    useEffect(() => {
        setExercises(TestExerciseList);
        setActiveExercise(testExerciseList[0]);
    }, []);

    return (<> {activeExercise ? (
        <Container fluid>
            <TabContainer defaultActiveKey={activeExercise.id}>
                <Row>
                    <Col md={3}>
                        <Container>
                            <Nav variant={'pills'} className='flex-column'>
                                {exercises.map((e: Exercise) => (
                                        <NavItem>
                                            <NavLink eventKey={e.id}>{e.name}</NavLink>
                                        </NavItem>
                                    )
                                )}
                            </Nav>
                        </Container>
                    </Col>
                    <Col>
                        <TabContent>
                            {exercises.map((e: Exercise) => (
                                <TabPane eventKey={e.id}>
                                    <ExerciseDetailView exercise={e}/>
                                </TabPane>
                            ))}
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </Container>
        ) : null}
    </>

    );
};

export default ExerciseView;
