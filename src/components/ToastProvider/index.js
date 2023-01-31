import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Toast, ToastContainer } from 'react-bootstrap';

const ToastContext = createContext();
const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    variant: '',
    title: '',
    message: ''
  });

  const showToast = ({ variant, title, message }) => {
    setToast({
      show: true,
      variant,
      title,
      message
    });

    setTimeout(() => {
      setToast((prevState) => ({ ...prevState, show: false }));
    }, 3000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.show && (
        <ToastContainer
          position="bottom-start"
          className="ps-2 pb-2"
        >
          <Toast bg={toast.variant}>
            <Toast.Header closeButton={false}>
              <strong>{toast.title}</strong>
            </Toast.Header>
            <Toast.Body>
              <p>{toast.message}</p>
            </Toast.Body>
          </Toast>
        </ToastContainer>  
      )}
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node
}

export default ToastProvider;
export { ToastContext };