import { Link } from "react-router-dom"

export default function Register() {
  return (


    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title text-center fw-bolder fs-1">Register</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-dark">Register</button>
          </form>
        </div>
        <div className="card-footer text-muted">
          Already have an account? <Link to="/login">Login</Link>
        </div>


      </div>
    </div>





  )
}