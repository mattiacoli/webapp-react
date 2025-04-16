import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'



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
      {/* Jumbotron */}
      <div className="jumbotron p-5 mb-4 bg-black text-white border-bottom rounded-bottom" >
        <div className="container-fluid py-5">

          <div className="row">
            <div className="col-8 fs-3">
              <h1 className="display-5 fw-bolder mb-3">{movie.title}</h1>
              <p>Director: {movie.director}</p>
              <p>Year: {movie.release_year}</p>
              <p>Genre: {movie.genre}</p>

              <p>
                {movie.abstract}
              </p>

            </div>

            <div className="col-4">
              <img src={`http://localhost:3000/images/${movie.image}`} alt="" className='img-fluid' />
            </div>
          </div>

        </div>
      </div>


      {/* Reviews */}
      {movie.reviews?.length > 0 && (
        <div className="container">
          {movie.reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </>
  )
}