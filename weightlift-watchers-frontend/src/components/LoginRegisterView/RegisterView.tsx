import {Button, Container, Form, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';
import {FormEvent} from 'react';
import {createUserRequest} from '../../api/types/createUserRequest';
import {createNewUser} from '../../api';

const RegisterView = () => {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const usernameInput = formData.get('username');
        const passwordInput = formData.get('password');
        const confirmPasswordInput = formData.get('confirmPassword');

        // TODO: replace these alerts with something better
        if (passwordInput !== confirmPasswordInput) {
            alert("Your password does not match your password confirmation, please check and try again.");
        } else {
            const request: createUserRequest = {
                username: usernameInput as string,
                password: passwordInput as string
            }

            try {
                const response = await createNewUser(request);
                if (response.status === 200) {
                    alert("Success!");
                }
            } catch (err) {
                alert('An error was encountered while registering your account');
            }

        }

    }

  return (
      <Container>
          <Row style={{textAlign: 'center'}}>
              <h1>Register</h1>
          </Row>
          <Row>
              <Form onSubmit={handleSubmit}>
                  <FormGroup>
                      <FormLabel>Username</FormLabel>
                      <FormControl placeholder={'Enter your username'} name={'username'}/>
                  </FormGroup>
                  <FormGroup>
                      <FormLabel>Password</FormLabel>
                      <FormControl type={'password'} placeholder={'Enter your password'} name={'password'}/>
                  </FormGroup>
                  <FormGroup>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl type={'password'} placeholder={'Confirm your password'} name={'confirmPassword'}/>
                  </FormGroup>
                  <Button style={{marginTop: '20px'}} type={'submit'}>Submit</Button>
              </Form>
          </Row>
      </Container>
  );
}

export default RegisterView;
