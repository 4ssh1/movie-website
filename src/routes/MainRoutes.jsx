import HomePage from "../pages/home/HomePage";
import MoviePage from "../pages/movie/MoviePage";
import TvShowsPage from "../pages/shows/TvShowsPage";

const mainRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/movie", element: <MoviePage /> },
  { path: "/tv", element: <TvShowsPage /> },
];

export default mainRoutes;
