
import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import css from './styles/HomePage.module.css'

const HomePage = ({ list }) => {
 const [moviesData, setMoviesData] = useState([]);
  const locations = useLocation()
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await list;
      setMoviesData(response);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
    fetchData();
  }, [list]);
  return (
    <>

      <h1 className={css.title}>Trending Today</h1>
      <ul className={css.list}>
        {moviesData.map(({ id, title}) => {
          return <li className={css.item} key={id}>
            <Link
              to={`movies/${id}`}
              className={css.link}
              state={{from: locations}}
            >
              {title}
            </Link>
          </li>
        })}
      </ul>
    </>
  )
}
export default HomePage