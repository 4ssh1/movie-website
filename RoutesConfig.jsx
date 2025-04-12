import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './src/routes/MainRoutes';


const RoutesConfig = () => {
  return (
    <Router>
          <MainRoutes />
    </Router>
  );
};

export default RoutesConfig;
