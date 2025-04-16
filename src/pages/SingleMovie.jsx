import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export default function SingleMovie() {

  const { id } = useParams()

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/movies/' + id)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovie(data)
      })
      .catch(error => console.error(error))

  }, [])

  return (
    <>

      <div className="jumbotron h-100">

        <div className="p-5 mb-4 bg-trasparent rounded-3" >
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bolder mb-3">{movie.title}</h1>

            <div className="row">
              <div className="col-8 fs-3">
                <p>Director: {movie.director}</p>
                <p>Year: {movie.release_year}</p>
                <p>Genre: {movie.genre}</p>
                <div>
                  Summary:
                  <p>
                    {movie.abstract}
                  </p>
                </div>
              </div>

              <div className="col-4">
                <img src={`http://localhost:3000/images/${movie.image}`} alt="" className='img-fluid' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}