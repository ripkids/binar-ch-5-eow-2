import { useLocation, useNavigate } from 'react-router';

import { Image } from 'react-bootstrap';

import Menus from '../../utils/Menu';
import { getMe } from '../../utils/Storage';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const me = getMe();

  const isCurrentUrl = (url) => location.pathname === url;

  const navigateToPage = (url) => navigate(url);
  
  return (
    <div className="py-2 px-3 h-100 shadow">
      <div className="h-100 d-flex flex-column align-items-center">
        {
          Menus.map(({ id, url, icon }) => (
            <div
              key={`menu-${id}`}
              className="mb-2"
              onClick={() => navigateToPage(url)}
            >
              {icon(isCurrentUrl(url), true)}
            </div>
          ))
        }

        <Image
          roundedCircle
          src={me.avatar}
          className="mt-auto"
          style={{ width: '50px' }}
        />
      </div>
    </div>
  )
}

export default SideBar;