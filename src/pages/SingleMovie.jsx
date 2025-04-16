import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import JumboDetail from '../components/JumboDetails'
import ReviewCard from '../components/ReviewCard'
import FormReview from '../components/FormReview'



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

      <JumboDetail movie={movie} />


      {/* Form */}
      <FormReview />


      <hr />


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