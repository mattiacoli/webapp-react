import { useState } from 'react'

export default function FormReview({ movieId }) {

  const initialData = {
    name: '',
    vote: 0,
    text: ''
  }


  const [formData, setFormData] = useState(initialData)



  function handleSubmit(e) {
    e.preventDefault()

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

      }).catch(error => console.log(error))





  }


  return (
    <>

      <div className="container">
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