import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/navbar/Navbar';
import mainRoutes from './src/routes/MainRoutes';
import searchRoutes from './src/routes/SearchRoutes';
import detailsRoutes from './src/routes/DetailsRoutes';
import Layout from './src/components/Layout';

const allRoutes = [...mainRoutes, ...searchRoutes, ...detailsRoutes];

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
