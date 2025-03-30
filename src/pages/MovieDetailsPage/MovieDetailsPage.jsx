import { MoonLoader } from 'react-spinners'
import { getMovieById } from '../../utils/tmdb-api'
import { Suspense, useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'

import toast from 'react-hot-toast'

import styles from './MovieDetailsPage.module.scss'

export default function MovieDetailsPage() {
  const { movieId } = useParams()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false)

  const location = useLocation()
  const backUrl = useRef(location.state ?? '/')

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true)
        const data = await getMovieById(movieId)
        setMovie(data)
      } catch {
        toast.error('Oops you got error :(')
      } finally {
        setLoading(false)
      }
    }
    getMovie()
  }, [movieId])

  return (
    <div className={styles.container}>
      <NavLink to={backUrl.current}>Go back</NavLink>
      {loading && <MoonLoader />}
      {movie && (
        <div className={styles.top}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie poster" />
          <div className={styles.info}>
            <h2>{movie.original_title}</h2>
            <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
            <h2>Genres</h2>
            <ul className={styles.genres}>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div className={styles.additional}>
        <p>Additional information:</p>
        <ul className={styles.additionalList}>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<MoonLoader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
