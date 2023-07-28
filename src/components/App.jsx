import { Routes, Route } from "react-router-dom";
// import  HomePage  from "./pages/HomePage";
// import  MoviesPage  from "./pages/MoviesPage";
import { theMovieTrendingAPI } from 'servises/api'
// import MovieDetails from "./pages/MovieDetailsPage";
import Layout from './Header/Header'
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
import { lazy } from "react";

const HomePage = lazy(() => import('../components/pages/HomePage'))
const MoviesPage = lazy(()=> import('../components/pages/MoviesPage'))
const MovieDetails = lazy(()=> import('../components/pages/MovieDetailsPage'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(()=> import('../components/Reviews/Reviews'))

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<HomePage list={theMovieTrendingAPI()}/>} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
