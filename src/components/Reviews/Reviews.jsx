import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { theMovieReviewsAPI } from 'servises/api'
import css from './Reviews.module.css'
const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await theMovieReviewsAPI(`${movieId}`)
      setReviews(response);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
    fetchData();
  }, [movieId])
  

  return (
    <>
      <p className={css.reviews_title}>reviews</p>
      <ul>
          { reviews.length === 0 ? <p>We don`t have any rewiews for this movie</p> : reviews.map(({id, author, content}) => {
            return(
            <li className={css.item} key={id}>
                <p className={css.author}>{author}</p>
                <p className={css.reviews}>{content}</p>
            </li>)
          })}
      </ul>
    </>   
  )
}

export default Reviews