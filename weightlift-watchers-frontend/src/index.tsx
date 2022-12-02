import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ExerciseView from './components/ExerciseView/ExerciseView';
import CreateExerciseView from './components/CreateExerciseView/CreateExerciseView';
import LoginRegisterView from './components/LoginRegisterView/LoginRegisterView';

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
                element: <LoginRegisterView/>
            },
        ]
    }
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
