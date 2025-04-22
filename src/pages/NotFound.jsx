import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="container vh-100">
      <h1 className="text-center mt-5">404</h1>
      <h2 className="text-center mt-3">Page Not Found</h2>
      <p className="text-center mt-3">
        The page you are looking for does not exist.
      </p>
      <p className="text-center mt-3">
        Please check the URL or return to the
        <Link to="/" className="text-decoration-none"> Homepage</Link>.
      </p>
    </div>
  )
}