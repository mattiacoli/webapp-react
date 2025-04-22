import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import JumboDetail from '../components/JumboDetails'
import ReviewCard from '../components/ReviewCard'
import FormReview from '../components/FormReview'

import GlobalContext from '../contexts/GlobalContext'



export default function SingleMovie() {
  const navigate = useNavigate()

  const { setLoader } = useContext(GlobalContext)

  const { id } = useParams()

  const [movie, setMovie] = useState({})

  useEffect(() => {
    setLoader(true)
    fetch('http://localhost:3000/api/v1/movies/' + id)
      .then(res => res.json())
      .then(data => {
        if (data?.error) {
          navigate('/404')
        }
        console.log(data);
        setMovie(data)
        setLoader(false)
      })
      .catch(error => console.error(error))

  }, [])

  return (
    <>
      {/* Jumbotron */}

      <JumboDetail movie={movie} />


      {/* Form */}
      <FormReview movieId={movie.id} />


      <hr />


      {/* Reviews */}
      {movie.reviews?.length > 0 && (
        <div className="container vh-100">
          {movie.reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </>
  )
}