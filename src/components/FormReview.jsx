import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormReview({ movieId }) {

  const initialData = {
    name: '',
    vote: 0,
    text: ''
  }

  const [formData, setFormData] = useState(initialData)

  const [success, setSuccess] = useState()

  const [errors, setErrors] = useState([])

  const navigate = useNavigate()



  function isValidate(data) {
    const formErrors = {}

    if (data.name.length < 3) formErrors.name = 'Name must be at least 3 characters long'
    if (!data.vote) formErrors.vote = "Vote is required"
    if (data.vote < 1 || data.vote > 5) formErrors.vote = 'Vote must be between 1 and 5'
    if (data.text.length < 10) formErrors.text = 'Your review must be at least 10 characters long '

    setErrors(formErrors)

    return Object.keys(formErrors).length === 0
  }



  function handleSubmit(e) {
    e.preventDefault()

    if (!isValidate(formData)) {

      console.log({ errors });


      return
    }

    fetch('http://localhost:3000/api/v1/movies/' + movieId + '/review',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    )

      .then(res => res.json())
      .then(data => {

        console.log(data);
        setSuccess(data)

        setTimeout(() => {
          setSuccess(false)
          navigate(0)
        }, 2000)

      })
      .catch(error => console.log(error))

  }

  return (
    <>

      <div className="container">


        {success && (

          <div className="alert alert-success" role="alert">
            {success.message}
          </div>
        )}

        {Object.keys(errors).length > 0 && (

          <div className="alert alert-danger" role="alert">
            <ul>
              {Object.keys(errors).map((key) => (
                <li key={key}>
                  {errors[key]}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form action="POST" onSubmit={handleSubmit}>

          <h2>Add your review</h2>

          <div className="mb-3">
            <div className="row">

              {/* name input */}
              <div className="col-10">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="name"
                  className="form-control shadow-none"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              {/* vote input */}
              <div className="col-2">
                <label htmlFor="vote" className="form-label">Vote</label>
                <input
                  type="number"
                  className="form-control fw-bold shadow-none"
                  id="vote"
                  min={0}
                  max={5}
                  value={formData.vote}
                  onChange={(e) => setFormData({ ...formData, vote: e.target.value })} />
              </div>
            </div>
          </div>

          {/* Review text area */}
          <div className="mb-3">
            <label htmlFor="review" className="form-label">Your Review</label>
            <textarea
              className="form-control shadow-none"
              id="review"
              rows="3"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })} ></textarea>
          </div>

          {/* Button */}
          <div className="mb-3">
            <button type="submit" className="btn btn-dark fw-bold" style={{ color: ' rgb(69, 214, 147)' }}>
              Send <i className="bi bi-send"></i>
            </button>
          </div>

        </form>
      </div>


    </>
  )
}