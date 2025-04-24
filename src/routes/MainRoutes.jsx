import HomePage from "../pages/home/HomePage";
import MoviePage from "../pages/movie/MoviePage";
import TvShowsPage from "../pages/shows/TvShowsPage";

const mainRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/movies", element: <MoviePage /> },
  { path: "/shows", element: <TvShowsPage /> },
];

export default mainRoutes;
