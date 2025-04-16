export default function CardMovie({ movie }) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <a href={`/movie/${movie.id}`}>
            <img src={`http://localhost:3000/images/${movie.image}`} alt="" style={{ aspectRatio: 1, objectFit: 'fill' }} className="card-img-top" />
          </a>
          <div className="card-body">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
          </div>
        </div>
      </div>
    </>
  )
}