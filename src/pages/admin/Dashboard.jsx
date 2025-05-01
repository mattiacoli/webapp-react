import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function Dashboard() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (



    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-100">
        <div className="card-body " style={{ color: 'var(--mv-primary)' }}>
          <h5 className="card-title text-center text-black fw-bolder fs-1">Dashboard</h5>
          <p className="text-center">Welcome to the admin dashboard!</p>
        </div>

        <div className="add_movie ms-auto p-2">
          <Link to='/admin/new_movie' className='btn btn-primary'>+ New Movie</Link>
        </div>


        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Picture</th>
              <th>Title</th>
              <th>Abstract</th>
              <th>Director</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (

              <tr key={movie.id}>
                <td scope="row">{movie.id}</td>
                <td>{movie.image}</td>
                <td>{movie.title}</td>
                <td>{movie.abstract}</td>
                <td>{movie.director}</td>
                <td><button className='btn btn-warning'>Edit</button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>




    </div>
  )
}