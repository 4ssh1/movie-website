import HomePage from "../pages/home/HomePage";
import MoviePage from "../pages/movie/MoviePage";
import TvShowsPage from "../pages/shows/TvShowsPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../components/protectedRoute";

const mainRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/movies", element: <MoviePage /> },
  { path: "/shows", element: <TvShowsPage /> },
  { path: "/profile", element: 
  <ProtectedRoute>
    <ProfilePage /> 
  </ProtectedRoute> 
},
];

export default mainRoutes;
