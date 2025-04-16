export default function ReviewCard({ review }) {


  function starRating(vote) {

    const stars = []
    const empty = []

    for (let i = 0; i < vote; i++) {
      stars.push(<i key={`filled-${i}`} className="bi bi-star-fill"></i>)
    }

    for (let i = vote; i < 5; i++) {
      empty.push(<i key={`empty-${i}`} className="bi bi-star"></i>)
    }


    return (
      <>
        {stars}
        {empty}
      </>
    )

  }



  return (

    <div key={review.id} className="card fs-4 my-3" style={{ boxShadow: '1px 1px 5px 0px #424141' }}>
      <div className="card-header d-flex justify-content-between align-item-center ">
        <h4 className='fw-bold'>{review.name}</h4>
        <div className='vote fs-5'>{starRating(review.vote)}</div>
      </div>

      <div className="card-body fs-5 ">
        {review.text}
      </div>

      <div className="card-footer fs-6 text-end">
        date {new Date(review.created_at).toLocaleDateString()}
      </div>


    </div>


  )
}