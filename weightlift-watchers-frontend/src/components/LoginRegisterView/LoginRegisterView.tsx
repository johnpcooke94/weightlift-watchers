import {Button, Container, Form, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const LoginRegisterView = () => {
    return (
        <Container>
            <Row style={{textAlign: 'center'}}>
                <h1>Log in</h1>
            </Row>
            <Row>
                <Form>
                    <FormGroup controlId={'username'}>
                        <FormLabel>Username</FormLabel>
                        <FormControl placeholder={'Enter your username'}></FormControl>
                    </FormGroup>
                    <FormGroup controlId={'password'}>
                        <FormLabel>Password</FormLabel>
                        <FormControl placeholder={'Enter your password'}></FormControl>
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

export default LoginRegisterView;
