import { Outlet } from 'react-router-dom';

import ToastProvider from '../../components/ToastProvider';

const Base = () => {
  return (
    <div className="vh-100">
      <ToastProvider>
        <Outlet />
      </ToastProvider>
    </div>
  )
}

export default Base;