// import Cast from "components/Cast/Cast";
// import Reviews from "components/Reviews/Reviews";
import {Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { theMovieDetailsAPI } from 'servises/api'
import css from './styles/MovieDetailsPage.module.css'

const MovieDetails = () => {
  const urlOriginal = 'https://image.tmdb.org/t/p/original'
  const {movieId} = useParams()
  const [movieData, setMovieData] = useState([]);
  const locations = useLocation()
  const backLinkLocationRef = useRef(locations.state?.from ?? '/movies')

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await theMovieDetailsAPI(`${movieId}`)
      setMovieData(response);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
    fetchData();
  },[movieId])

  const { title, release_date, poster_path, genres, overview, vote_average } = movieData 

  return (
    <>
      <Link to={backLinkLocationRef.current} className={`${css.link_back} ${css.link}`}>&#8592; go Back</Link>
      <div className={css.movie_details_wrapper}>
        <div className={css.poster}>
          <img
            src={(poster_path ? urlOriginal+poster_path : <p>loading</p>)}
            alt={title}
            loading="lazy"
            width={600} />
        </div>
        <div className={css.general}>
          <h1 className={css.movie_title}>{title}
          {release_date && ` (${release_date.slice(0, 4)})`}
        </h1>
        <p className={css.text}>User Score: {Math.round((vote_average * 10))}%</p>
        <h2 className={css.info}>Overview</h2>
        <p className={css.text}>{overview}</p>
        <h2 className={css.info}>Genres</h2>
        <ul className={`${css.list_genres} ${css.list}`}>
          {genres && genres.map(({id, name}) => <li key={id}>{name}</li>)}
        </ul>
        </div>
      </div>
      <ul className={`${css.list_subcategories} ${css.list}`}>
        <li>
          <Link to='cast' className={css.link}>cast</Link>
        </li>
        <li>
          <Link to='reviews' className={css.link}>reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet/>
      </Suspense>
      
    </>
  )
}

export default MovieDetails