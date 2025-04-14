import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import TvShowsPage from "../pages/TvShowsPage";

const mainRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/movies", element: <MoviePage /> },
  { path: "/shows", element: <TvShowsPage /> },
];

export default mainRoutes;
