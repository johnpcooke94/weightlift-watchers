import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ExerciseView from './components/ExerciseView/ExerciseView';
import CreateExerciseView from './components/CreateExerciseView/CreateExerciseView';
import LoginView from './components/LoginRegisterView/LoginView';
import RegisterView from './components/LoginRegisterView/RegisterView';
import {WebState} from './webstate/WebState';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                element: <ExerciseView/>,
                index: true
            },
            {
                path: "/exercises",
                element: <ExerciseView/>,
            },
            {
                path: "/createExercise",
                element: <CreateExerciseView/>
            },
            {
                path: "/login",
                element: <LoginView/>
            },
            {
                path: "/register",
                element: <RegisterView/>
            }
        ]
    }
]);

// Ensuring that the webstate is instantiated when the application loads
// @ts-ignore
const webState: WebState = WebState.getInstance();

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
