import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { theMovieCastAPI } from 'servises/api'
import css from './Cast.module.css'
import img from '../../servises/img/No-photo-m.png'
const Cast = () => {

  const { movieId } = useParams()
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await theMovieCastAPI(`${movieId}`)
      setCast(response);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
    fetchData();
  },[movieId])
  return (
    <>
      <p className={css.cast_title}>cast</p>
    <ul className={css.list}>
        {cast.map(({cast_id, name, character, profile_path}) => {
          return(
          <li className={css.item} key={cast_id}>
              <img src={(profile_path ? `https://image.tmdb.org/t/p/original${profile_path}`:   img)} alt="" width={300} />
              <div className={css.item_block}>
                <p className={css.text_name}>Actor: {name}</p>
                <p className={css.text_name}>Character: {character}</p>
              </div>
          </li>)
        })}
    </ul>
    </>
    
  )
}

export default Cast
