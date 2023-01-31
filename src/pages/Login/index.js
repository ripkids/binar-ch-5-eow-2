import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import api from '../../api';
import { saveToken } from '../../utils/Storage';
import { ToastContext } from '../../components/ToastProvider';

const Login = () => {
  const [credential, setCredential] = useState({ email: null, password: null });
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useContext(ToastContext);

  const navigate = useNavigate();
  
  const setPasswordVisibility = () => {
    setIsPasswordShown((prevState) => !prevState);
  }

  const onCredentialChange = (ev, key) => {
    setCredential((prevState) => {
      const data = prevState;
      data[key] = ev.target.value;

      return data;
    })
  }

  const login = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.login(credential);
      saveToken(data.token);

      showToast({
        variant: 'success',
        title: 'Success',
        message: 'Now Redirecting You, Please Wait'
      })

      setTimeout(() => {
        navigate('/home');
      }, 3000);
    } catch ({ response }) {
      const { data } = response;
      const { error } = data;

      showToast({
        variant: 'danger',
        title: 'Error',
        message: error
      })

      setIsLoading(false);
    }
  }

  const goToSignUp = () => navigate('/sign-up');
  
  return (
    <div className="h-100 container-fluid d-flex flex-column justify-content-center">
      <div className="h-100 py-3 row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <img
            src="images/undraw_secure_login.svg"
            className="w-75 align-self-center"
          />
        </div>
        <div className="col-lg-6">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <h2 className="mb-5">Welcome to Binar Color Generator</h2>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  onChange={(ev) => onCredentialChange(ev, 'email')}
                />
              </Form.Group>

              <Form.Label htmlFor="pass">Password</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="pass"
                  type={isPasswordShown ? 'text' : 'password'}
                  aria-describedby="pass"
                  aria-label="Password"
                  placeholder="Enter password"
                  onChange={(ev) => onCredentialChange(ev, 'password')}
                />
                <Button
                  id="pass"
                  variant="outline-success"
                  onClick={setPasswordVisibility}
                >
                  {
                    isPasswordShown
                      ? <FaEye />
                      : <FaEyeSlash />
                  }
                </Button>
              </InputGroup>

              <div className="mt-5 row">
                <div className="col">
                  <Button
                    variant="success"
                    className="w-100"
                    disabled={isLoading}
                    onClick={login}
                  >
                    {isLoading ? 'Logging In ...' : 'Log In'}
                  </Button>
                </div>
                <div className="col">
                  <Button
                    variant="outline-success"
                    className="w-100"
                    disabled={isLoading}
                    onClick={goToSignUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login;