import { FaHome, FaUsers } from 'react-icons/fa';

const menus = [
  {
    id: 1,
    name: 'Home',
    url: '/home',
    icon: (isCurrentUrl, isSide) => <FaHome
      size={isSide ? 24 : 32}
      className={isCurrentUrl ? 'text-success' : ''}
    />
  },
  {
    id: 2,
    name: 'User',
    url: '/user',
    icon: (isCurrentUrl, isSide) => <FaUsers
      size={isSide ? 24 : 32}
      className={isCurrentUrl ? 'text-success' : ''}
    />
  }
]

export default menus;