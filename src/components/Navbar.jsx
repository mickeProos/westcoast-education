import { Link, useMatch, useResolvedPath } from "react-router-dom"


function Navbar () {
  return (
    <nav className="nav">
    <Link to="/" className="site-title">
      Westcoast Education 
    </Link>
    <ul>
      <CustomLink to="/teachers">Teachers</CustomLink>
      <CustomLink to="/courses">Courses</CustomLink>
    </ul>
  </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar