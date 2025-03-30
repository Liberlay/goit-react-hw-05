import { NavLink } from 'react-router-dom'

import clsx from 'clsx'

import styles from './Navigation.module.scss'

export default function Navigation() {
  const isLinkActive = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink className={isLinkActive} to={'/'}>
          HomePage
        </NavLink>
        <NavLink className={isLinkActive} to={'movies'}>
          MoviesPage
        </NavLink>
      </div>
    </header>
  )
}
