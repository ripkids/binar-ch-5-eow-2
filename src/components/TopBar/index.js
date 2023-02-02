import { useNavigate, useLocation } from 'react-router';
import { Image } from 'react-bootstrap';

import Menus from '../../utils/Menu';
import { getMe } from '../../utils/Storage';

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const me = getMe();

  const isCurrentUrl = (url) => location.pathname === url;

  const navigateToPage = (url) => navigate(url);
  
  return (
    <div className="w-100 p-3 d-flex shadow-sm">
      <div className="w-75 d-flex flex-column justify-content-center">
        <div className="row">
          {
            Menus.map(({id, name, url, icon }) => (
              <div
                key={`menu-${id}`}
                className="col-1"
                onClick={() => navigateToPage(url)}
              >
                {icon(isCurrentUrl(url))}
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-25 ms-auto d-flex justify-content-end">
        <Image
          roundedCircle
          src={me.avatar}
          style={{ width: '50px' }}
        />
      </div>
    </div>
  )
}

export default TopBar;