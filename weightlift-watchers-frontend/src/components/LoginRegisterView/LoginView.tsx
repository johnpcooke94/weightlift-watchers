import {Button, Container, Form, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';
import {Link, Navigate} from 'react-router-dom';
import {FormEvent, useState} from 'react';
import {loginUser, retrieveUser} from '../../api';
import {WebState} from '../../webstate/WebState';

const LoginView = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const usernameInput = formData.get('username');
        const passwordInput = formData.get('password');

        // TODO: replace these alerts with something better
        if (!usernameInput) {
            alert('Please provide your username.');
            return;
        }

        if (!passwordInput) {
            alert('Please provide your password.');
            return;
        }

        const loginResponse = await loginUser(usernameInput as string, passwordInput as string);

        if (loginResponse.status === 200) {

            const getUserResponse = await retrieveUser(usernameInput as string);

            if (getUserResponse.status === 200) {
                const webState = WebState.getInstance();
                webState.user = getUserResponse.data
                setLoggedIn(true);
                alert('Success! Loading your exercises.');
            }

            if (getUserResponse.status === 401) {
                alert('Incorrect username or password.');
            }

        } else {
            alert('There was a problem logging you in.');
        }

    };

    if (loggedIn) {
        return (<Navigate to={'/exercises'} />)
    }

    return (
        <Container>
            <Row style={{textAlign: 'center'}}>
                <h1>Log in</h1>
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup controlId={'username'}>
                        <FormLabel>Username</FormLabel>
                        <FormControl placeholder={'Enter your username'} name={'username'}/>
                    </FormGroup>
                    <FormGroup controlId={'password'}>
                        <FormLabel>Password</FormLabel>
                        <FormControl type={'password'} placeholder={'Enter your password'} name={'password'}/>
                    </FormGroup>
                    <Button style={{marginTop: '20px'}} type={'submit'}>Submit</Button>
                </Form>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Container>
                    <div>Don't have an account?</div>
                    <Link to={'/register'}>Register here</Link>
                </Container>
            </Row>
        </Container>
    );
}

export default LoginView;
