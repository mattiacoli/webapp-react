export default function FormReview() {
  return (
    <>


      <div className="container">
        <form action="POST">

          <div className="mb-3">
            <div className="row">

              <div className="col-10">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name" />
              </div>

              <div className="col-2">
                <label htmlFor="vote" className="form-label">Vote</label>
                <input
                  type="number"
                  className="form-control"
                  id="vote"
                  min={0}
                  max={5} />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label">Your Review</label>
            <textarea className="form-control" id="text" rows="3"></textarea>
          </div>



          <div className="mb-3">
            <button type="button" className="btn btn-dark">
              Send <i className="bi bi-send"></i>
            </button>
          </div>

        </form>
      </div>


    </>
  )
}