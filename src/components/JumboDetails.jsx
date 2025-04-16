export default function JumboDetail({ movie }) {
  return (

    <div className="jumbotron p-5 mb-4 bg-black text-white border-bottom rounded-bottom"
      style={{ backgroundImage: `url(http://localhost:3000/images/${movie.image})`, backgroundSize: 'cover' }} >
      <div className="container-fluid p-5 rounded-3" style={{ backgroundColor: ' rgba(0, 0, 0, 0.85) ' }}>

        <div className="row" >
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
            <img src={`http://localhost:3000/images/${movie.image}`} alt="" className='img-fluid border rounded-3' />
          </div>
        </div>
      </div>
    </div>


  )
}