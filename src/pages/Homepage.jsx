import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CardMovie from "../components/CardMovie/CardMovie"

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

                <CardMovie movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>
      </section>





    </>

  )
}