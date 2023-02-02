import { useContext, useEffect, useState } from 'react';
import { Card, Image, ProgressBar } from 'react-bootstrap';

import api from '../../api';
import { ToastContext } from '../../components/ToastProvider';

const User = () => {
  const [users, getUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useContext(ToastContext);
  
  const getAllUsers = async () => {
    try {
      setIsLoading(true);
      
      const { data } = await api.getUsers({ page: 1, per_page: 20 })
      getUsers(data.data);

      setIsLoading(false);
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
  
  useEffect(() => {
    getAllUsers();
  }, []);
  
  return (
    <div>
      {
        isLoading && (<ProgressBar striped animated now={100} /> )
      }
      <div className={`row ${isLoading ? 'mt-3' : 'mt-0'}`}>
        {
          users.map((item) => (
            <div key={`key-${item.id}`} className="col-6 col-lg-4 mb-3">
              <Card>
                <Card.Img
                  src={item.avatar}
                  className="d-none d-lg-block card-img-custom"
                />
                <Card.Body>
                  <div className="row">
                    <div className="col-3 d-flex flex-column justify-content-center">
                      <Image
                        roundedCircle
                        src={item.avatar}
                        className="w-75"
                      />
                    </div>
                    <div className="col-9">
                      <strong>{item.last_name}, {item.first_name}</strong>
                      <p className="text-secondary">{item.email}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default User;