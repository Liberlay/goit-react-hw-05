import { MoonLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieReviews } from '../../utils/tmdb-api'

import toast from 'react-hot-toast'

import styles from './MovieReviews.module.scss'

export default function MovieReviews() {
  const { movieId } = useParams()

  const [reviews, setReviews] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovieReviewsData = async () => {
      try {
        setLoading(true)
        const data = await getMovieReviews(movieId)
        setReviews(data)
      } catch {
        toast.error('Oops you got error :(')
      } finally {
        setLoading(false)
      }
    }
    getMovieReviewsData()
  }, [movieId])

  return (
    <div>
      {loading && <MoonLoader />}
      {reviews !== null && reviews.length === 0 && <p>There were no reviews.</p>}
      {reviews && reviews.length > 0 && (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.item}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
