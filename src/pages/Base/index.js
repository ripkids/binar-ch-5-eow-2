import { useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';

import ToastProvider from '../../components/ToastProvider';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

const Base = () => {
  const location = useLocation();

  const isBarHide = () => {
    return location.pathname === '/login'
            || location.pathname === '/sign-up'
  }
  
  return (
    <div className="vh-100">
      <ToastProvider>
        {
          isBarHide()
            ? (<Outlet />)
            : (
              <div className="max-vh-100 d-flex">
                <div className="me-lg-1 d-none d-lg-flex flex-column">
                  <SideBar />
                </div>
                <div className="w-100 d-flex flex-column">
                  <div className="d-flex d-lg-none">
                    <TopBar />
                  </div>
                  <div className="vh-100 ms-lg-1 p-3 overflow-auto">
                    <Outlet />
                  </div>
                </div>
              </div>
            )
        }
      </ToastProvider>
    </div>
  )
}

export default Base;