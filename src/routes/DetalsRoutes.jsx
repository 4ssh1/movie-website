import MovieDetails from "../pages/movie/MovieDetails";
import TvShowsDetails from "../pages/shows/TvShowsDetails";
import HomeDetails from "../pages/home/HomeDetails";


const detailsRoutes = [
    {
        path: "/movie-details", element: <MovieDetails />
    },
    {
        path: "/tvshows-details", element: <TvShowsDetails />
    },
    {
        path: "/details", element: <HomeDetails />
    },
]

export default detailsRoutes

