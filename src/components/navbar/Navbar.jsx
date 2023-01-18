import { Link, useMatch, useResolvedPath } from "react-router-dom"
import  ReactDOM  from "react-dom"
import { Fragment, useState } from "react"
import AddPage from "../../pages/AddPage"
import "../../styles/styles.css"


function Navbar () {
  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    setModal(!modal);
  }

  return (
    <nav className="nav">
    <Link to="/" className="site-title">
      Westcoast Education 
    </Link>
    <ul>
    <li onClick={clickHandler} className="listelement">
            Add teacher/course
          </li>
          {modal && <Fragment>
        {ReactDOM.createPortal(
        <AddPage closeModal={setModal}/>,
        document.querySelector('#modal-root'),
      )}
      </Fragment>}
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