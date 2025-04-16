export default function FormReview() {
  return (
    <>

      <div className="container">
        <form action="POST">

          <h2>Add your review</h2>

          <div className="mb-3">
            <div className="row">

              {/* name input */}
              <div className="col-10">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="name"
                  className="form-control shadow-none"
                  id="name" />
              </div>

              {/* vote input */}
              <div className="col-2">
                <label htmlFor="vote" className="form-label">Vote</label>
                <input
                  type="number"
                  className="form-control fw-bold shadow-none"
                  id="vote"
                  min={0}
                  max={5} />
              </div>
            </div>
          </div>

          {/* Review text area */}
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Your Review</label>
            <textarea className="form-control shadow-none" id="text" rows="3"></textarea>
          </div>

          {/* Button */}
          <div className="mb-3">
            <button type="button" className="btn btn-dark fw-bold" style={{ color: ' rgb(69, 214, 147)' }}>
              Send <i className="bi bi-send"></i>
            </button>
          </div>

        </form>
      </div>


    </>
  )
}