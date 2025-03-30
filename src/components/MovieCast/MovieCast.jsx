import { MoonLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieCast } from '../../utils/tmdb-api'

import toast from 'react-hot-toast'

import styles from './MovieCast.module.scss'

export default function MovieCast() {
  const { movieId } = useParams()

  const [cast, setCast] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovieCastData = async () => {
      try {
        setLoading(true)
        const data = await getMovieCast(movieId)
        setCast(data)
      } catch {
        toast.error('Oops you got error :(')
      } finally {
        setLoading(false)
      }
    }
    getMovieCastData()
  }, [movieId])

  return (
    <div>
      <div>{loading && <MoonLoader />}</div>
      {cast && cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.item}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="Actor photo" />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We did not find any information about the actors </p>
      )}
    </div>
  )
}
