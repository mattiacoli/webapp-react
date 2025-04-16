import style from './CardMovie.module.css'


export default function CardMovie({ movie }) {
  return (
    <>
      <div className="col">
        <div className={`card ${style.card}`}>
          <a href={`/movie/${movie.id}`}>
            <img src={`http://localhost:3000/images/${movie.image}`} alt="" className="card-img-top" />
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