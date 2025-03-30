import { MoonLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSearchedMovie } from '../../utils/tmdb-api'

import toast from 'react-hot-toast'
import MovieList from '../../components/MovieList/MovieList'
import SearchForm from '../../components/SearchForm/SearchForm'

export default function MoviesPage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const searchParam = searchParams.get('query') ?? ''

  useEffect(() => {
    const getSearchedData = async () => {
      try {
        setLoading(true)
        const data = await getSearchedMovie(searchParam)
        setMovies(data)
      } catch {
        toast.error('Oops you got error :(')
      } finally {
        setLoading(false)
      }
    }
    getSearchedData()
  }, [searchParam])

  const handleSearch = (newSearch) => {
    searchParams.set('query', newSearch)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {movies.length > 0 && <MovieList data={movies} />}
      {loading && <MoonLoader />}
    </div>
  )
}
