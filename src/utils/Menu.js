import { FaHome, FaUsers } from 'react-icons/fa';

const menus = [
  {
    id: 1,
    name: 'Home',
    url: 'home',
    icon: (isCurrentUrl) => <FaHome className={isCurrentUrl ? 'text-danger' : 'text-success'} />
  },
  {
    id: 2,
    name: 'User',
    url: 'user',
    icon: (isCurrentUrl) => <FaUsers className={isCurrentUrl ? 'text-danger' : 'text-success'} />
  }
]

export default menus;