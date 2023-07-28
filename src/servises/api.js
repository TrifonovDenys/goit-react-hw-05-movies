import axios from "axios";

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjAwZTIzMDk3MWI2NzI0ZGU4MjQwNmU2ZDVkYWNjMyIsInN1YiI6IjY0YzBlMjAzZGY4NmE4MDBhZTAwZTRkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zgRFyyuH8zvvanlKCCJ0I_kHfeMY5_HPPBZjTuSxTUI'
const BASE_URL = 'https://api.themoviedb.org/3'
let targeturl = '';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: API_KEY
  }
};

const theMovieTrendingAPI = async () => {
  targeturl = '/trending/movie/day'
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data.results)
  return response
}
// theMovieTrendingAPI()

const theMovieSearchAPI = async (query) => {
  targeturl = '/search/movie'
  // const searchQuery = `?query=${query}`
  const searchQuery = `${query}`
  const response = await axios(`${BASE_URL}${targeturl}${searchQuery}`, options).then(response => response.data.results)
  return response
}
// theMovieSearchAPI('batman')

const theMovieDetailsAPI = async (id) => {
  targeturl = `/movie/${id}`
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data)
  return response
}
// theMovieDetailsAPI('11')

const theMovieCastAPI = async (id) => {
  targeturl = `/movie/${id}/credits`
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data.cast)
  return response
}
// theMovieCreditsAPI('11')

const theMovieReviewsAPI = async (id) => {
  targeturl = `/movie/${id}/reviews`
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data.results)
  return response
}
// theMovieReviewsAPI('11')



export {theMovieTrendingAPI, theMovieSearchAPI, theMovieDetailsAPI, theMovieCastAPI, theMovieReviewsAPI}

