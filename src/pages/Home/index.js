import { useContext, useEffect, useState } from 'react';

import { Card, ProgressBar } from 'react-bootstrap';

import api from '../../api';
import { ToastContext } from '../../components/ToastProvider';

const Home = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useContext(ToastContext);

  const getColors = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.getColors({ page: 1, per_page: 20 });
      setColors(data.data);
        
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

  const loginWithBinarApi = async () => {
    const response = await api.binarLogin({
      email: 'admin@bcr.io',
      password: '123456'
    });
    localStorage.setItem('rahasia', response.data.access_token);
  }

  const getCarsFromBinarApi = async () => {
    const response = await api.getCars();
    console.log('res', response.data.cars);
  }
  const onColorSelected = (item) => setSelectedColor(item);
  
  useEffect(() => {
    getColors();
    loginWithBinarApi();
    getCarsFromBinarApi();
  }, []);
  
  useEffect(() => {
    setSelectedColor(colors[0]);
  }, [colors]);
  
  return (
    <div className="h-100 d-flex flex-column">
      {
        isLoading && (<ProgressBar striped animated now={100} />)
      }
      <div className="container">
        <Card className="my-3">
          <Card.Body>
            <div className="d-flex">
              <div
                className="me-2 rounded-2"
                style={{
                  backgroundColor: selectedColor?.color,
                  width: '100px',
                  height: '100px'
                }}
              />

              <div className="ms-2 d-flex flex-column">
                <h3 className="mb-0">{selectedColor?.name.toUpperCase()}</h3>
                <p className="mt-0">{selectedColor?.pantone_value}</p>
                <small className="text-secondary">{selectedColor?.year}</small>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      
      <div className="d-flex flex-column overflow-auto">
        <div className="ms-0 me-0 row row-cols-md-2 row-cols-lg-3 row-cols-lg-3">
          {
            colors.map((item) => (
              <div key={`key-${item.id}`} className="pb-2">
                <Card
                  className={`cursor-pointer ${selectedColor?.id === item.id ? 'border-success' : ''}`}
                  onClick={() => onColorSelected(item)}
                >
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <strong>{item.name.toUpperCase()}</strong>
                      <p>{item.pantone_value}</p>

                      <div className="d-flex align-items-center">
                        <p className="text-secondary">{item.year}</p>
                        <div
                          className="ms-auto rounded-2"
                          style={{ backgroundColor: item.color, width: '50px', height: '50px' }}
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;

