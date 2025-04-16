import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="nav navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
        </div>
      </nav>





    </>
  )
}