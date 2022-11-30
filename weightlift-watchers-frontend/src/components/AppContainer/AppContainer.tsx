/*
import {Container} from 'react-bootstrap';
import MainNavigation from '../MainNavigation/MainNavigation';
*/

import {Route, Routes} from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import ExerciseView from '../ExerciseView/ExerciseView';
import CreateExerciseView from '../CreateExerciseView/CreateExerciseView';
import LoginRegisterView from '../LoginRegisterView/LoginRegisterView';

const AppContainer = () => {
    return (
        <Routes>
            <Route path='/' element={<MainNavigation/>} >
                <Route index element={<ExerciseView/>}/>
                <Route path='createExercise' element={<CreateExerciseView/>}/>
                <Route path='login' element={<LoginRegisterView/>} />
            </Route>
        </Routes>
        /*<Container fluid style={{padding: 0}}>
            <MainNavigation/>
        </Container>*/
    );
}


export default AppContainer;
