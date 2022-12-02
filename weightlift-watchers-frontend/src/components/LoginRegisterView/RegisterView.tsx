import {Button, Container, Form, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';

const RegisterView = () => {
  return (
      <Container>
          <Row style={{textAlign: 'center'}}>
              <h1>Register</h1>
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
                  <FormGroup controlId={'password'}>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl placeholder={'Confirm your password'}></FormControl>
                  </FormGroup>
                  <Button style={{marginTop: '20px'}} type={'submit'}>Submit</Button>
              </Form>
          </Row>
      </Container>
  );
}

export default RegisterView;
