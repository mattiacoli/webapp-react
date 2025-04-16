import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Homepage() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/movies')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>



      {/* Movies Card Section */}
      <section>

        <div className="container mt-3">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {movies.length > 0 && (
              movies.map(movie => (

                <div className="col" key={movie.id}>
                  <div className="card h-100">
                    <Link to={`/movie/${movie.id}`}>
                      <img src={`http://localhost:3000/images/${movie.image}`} alt="" style={{ aspectRatio: 1, objectFit: 'fill' }} className="card-img-top" />
                    </Link>
                    <div className="card-body">
                      <h3>{movie.title}</h3>
                      <p>{movie.genre}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>





    </>

  )
}