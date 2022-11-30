import {Container} from 'react-bootstrap';
import MainNavigation from '../MainNavigation/MainNavigation';
import ExerciseView from '../ExerciseView/ExerciseView';


const AppContainer = () => {
    return (
        <Container fluid style={{padding: 0}}>
            <MainNavigation/>
            <ExerciseView/>
        </Container>
    );
}


export default AppContainer;
