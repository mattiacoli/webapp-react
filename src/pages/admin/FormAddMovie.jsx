import { useState } from "react"



export default function FormAddMovie() {


  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    genre: '',
    release_year: '',
    abstract: '',
    image: ''

  })


  function handleChange(e) {
    const { name, value } = e.target
    if (e.target.type === 'file') {
      setNewMovie({ ...newMovie, [name]: e.target.files[0] })
    } else {

      setNewMovie({ ...newMovie, [name]: value })
    }
  }


  function handleSubmit(e) {
    e.preventDefault()

    const form = new FormData();

    form.append("title", newMovie.title)
    form.append("director", newMovie.director)
    form.append("genre", newMovie.genre)
    form.append("release_year", newMovie.release_year)
    form.append("abstract", newMovie.abstract)
    form.append("image", newMovie.image)

    fetch('http://localhost:3000/api/v1/movies/add_movie',

      {
        method: "POST",
        body: form
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })
      .catch(err => console.error(err.message))

  }



  return (



    <div className="container mt-3">
      <form action='POST' onSubmit={handleSubmit}>
        <div className="mb-3">

          {/* Title */}
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newMovie.title}
            onChange={handleChange} />

          {/* Director */}
          <div className="mb-3">
            <label htmlFor="director" className="form-label">Director</label>
            <input
              type="text"
              className="form-control"
              id="director"
              name="director"
              value={newMovie.director}
              onChange={handleChange} />
          </div>


          {/* Genre */}
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              value={newMovie.genre}
              onChange={handleChange} />
          </div>

          {/* Year */}
          <div className="mb-3">
            <label htmlFor="release_year" className="form-label">Year</label>
            <input
              type="text"
              className="form-control"
              name="release_year"
              id="release_year"
              value={newMovie.release_year}
              onChange={handleChange} />
          </div>


          {/* Abstract */}
          <div className="mb-3">
            <label htmlFor="abstract" className="form-label">Abstract</label>
            <textarea
              type="text-area"
              rows='4'
              className="form-control"
              id="abstract"
              name="abstract"
              value={newMovie.abstract}
              onChange={handleChange} />
          </div>


          {/* Image */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image Url</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )

}