import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-2 d-flex justify-content-between">
        <NavLink className="nav-link" to='/'>
          <div className="logo">
            MovieForum
          </div>
        </NavLink>
        <div className="nav navbar-nav">
          <NavLink className="nav-item nav-link" to="/">Home</NavLink>
          <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        </div>
      </nav>





    </>
  )
}