import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title text-center fw-bolder fs-1">Login</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-dark">Login</button>
          </form>
        </div>
        <div className="card-footer text-muted">
          Don't have an account? <Link to="/register">Register</Link>
        </div>

      </div>
    </div>
  )
}