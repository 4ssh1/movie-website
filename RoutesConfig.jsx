import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './src/routes/MainRoutes';
import Navbar from './src/components/Navbar/Navbar';


const RoutesConfig = () => {
  return (
    <Router>
         <Navbar />
          <MainRoutes />
    </Router>
  );
};

export default RoutesConfig;
