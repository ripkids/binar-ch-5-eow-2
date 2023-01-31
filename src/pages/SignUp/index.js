import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import {
  Button,
  Card,
  Form,
  InputGroup
} from 'react-bootstrap';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

import api from '../../api';
import { saveToken } from '../../utils/Storage';
import { ToastContext } from '../../components/ToastProvider';

const SignUp = () => {
  const [credential, setCredential] = useState({
    password: null,
    email: null
  })
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Sign Up');
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const setPasswordVisibility = () => setIsPasswordShown(prevState => !prevState);
  
  const onCredentialChange = (ev, key) => {
    setCredential((prevState) => {
      const data = prevState;
      data[key] = ev.target.value;
        
      return data;
    });
  }

  const goToLogin = () => navigate('/login');
  
  const signUp = async () => {
    try {
      setIsLoading(true);
      setButtonText('Sign You Up...')
      const { data } = await api.signUp(credential);
      saveToken(data.token);

      setButtonText('Redirecting ...');
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
      setButtonText('Sign Up');
    }
  }
  
  return (
    <div className="h-100 px-5 d-flex flex-column justify-content-center">
      <Card>
        <Card.Body>
          <div className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicEmail">
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

            <div className="row">
              <div className="col">
                <Button
                  variant="outline-success"
                  className="w-100"
                  disabled={isLoading}
                  onClick={goToLogin}
                >
                  <FaArrowLeft className="me-2" />
                  Go Back
                </Button>
              </div>
              <div className="col">
                <Button
                  variant="success"
                  className="w-100"
                  disabled={isLoading}
                  onClick={signUp}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignUp;