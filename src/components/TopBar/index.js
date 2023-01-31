import { Card } from 'react-bootstrap';

import Menus from '../../utils/Menu';

const TopBar = () => {
  return (
    <Card className="p-3 d-flex d-lg-none">
      <div className="row">
        <div className="col-6">
          <div className="row">
            {
              Menus.map(({id, name, url, icon }) => (
                <div className="col-2" key={`menu-${id}`}>{icon()}</div>
              ))
            }
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </Card>
  )
}

export default TopBar;