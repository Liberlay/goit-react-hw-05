import { MoonLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../utils/tmdb-api'

import toast from 'react-hot-toast'
import MovieList from '../../components/MovieList/MovieList'

export default function HomePage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const data = await getTrendingMovies()
        setMovies(data)
      } catch {
        toast.error('Oops you got error :(')
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && <MovieList data={movies} />}
      {loading && <MoonLoader />}
    </div>
  )
}
