import axios from 'axios'

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTM0NjFkYjAyMDNkMDExOWM0ZDFjOTU5Y2Y3M2FmNyIsIm5iZiI6MTc0MzE3NDAyMy4xODcsInN1YiI6IjY3ZTZiOTg3MDI3ZTczNzQwNjAwNTVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnUOs1YxhgJqjiKZ39MxuYT8wJzB9aXiFCH2u0XCvpo',
  },
}

export const getTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day'
  const response = await axios.get(url, options)

  return response.data.results
}

export const getSearchedMovie = async (movie) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}`
  const response = await axios.get(url, options)

  return response.data.results
}

export const getMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const response = await axios.get(url, options)

  return response.data
}

export const getMovieCast = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`
  const response = await axios.get(url, options)

  return response.data.cast
}

export const getMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`
  const response = await axios.get(url, options)

  return response.data.results
}
