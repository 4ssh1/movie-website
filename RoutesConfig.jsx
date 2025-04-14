import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar/Navbar';
import mainRoutes from './src/routes/MainRoutes';
import searchRoutes from './src/routes/SearchRoutes';
import Layout from './src/components/Layout';

const allRoutes = [...mainRoutes, ...searchRoutes];

const RoutesConfig = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          {allRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesConfig;
