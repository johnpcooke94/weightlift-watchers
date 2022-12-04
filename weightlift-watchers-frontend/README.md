# Weightlift Watchers Frontend

This is the React frontend for the Weightlift Watchers project. See the readme in the project root for an overview of
the project. This readme will cover the details of developing and running the frontend only.

## Getting started

### Prerequisites
- node >= 14
- npm >= 6
- mongodb >= 4.0
- typescript >= 4.0

### Running the backend
You must run the backend application first in order to use all features of the frontend in development. See the backend 
readme for more info.

### Running the frontend
1. Clone the repository
2. Run the backend - see backend readme
3. Copy `.env.example` to `.env` and ensure the API URL is correctly pointed to your local backend
4. Install dependencies `npm install`
5. Start the development server `npm start`
6. Your browser should automatically open to `http://localhost:3000`
   - Note: The port may change if 3000 is already in use by the backend

## Create React App

This frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The following scripts
are available as part of the Create React App package.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
