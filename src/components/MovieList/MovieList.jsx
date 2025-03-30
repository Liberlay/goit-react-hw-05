import { NavLink, useLocation } from 'react-router-dom'

import styles from './MovieList.module.scss'

export default function MovieList({ data }) {
  const location = useLocation()
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
