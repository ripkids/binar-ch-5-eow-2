import { useRoutes } from 'react-router';

import routes from './routes';

const App = () => {
  const appRoutes = useRoutes(routes());

  return appRoutes;
}

export default App;
