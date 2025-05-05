import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import mainRoutes from './routes/MainRoutes';
import searchRoutes from './routes/SearchRoutes';
import detailsRoutes from './routes/DetailsRoutes';
import Layout from './components/Layout';

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
