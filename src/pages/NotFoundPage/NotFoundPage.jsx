import { NavLink } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page not found :(</h2>
      <p>
        Return to <NavLink to="/">home page</NavLink>
      </p>
    </div>
  )
}
