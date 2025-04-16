import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayouts"
import Homepage from "./pages/Homepage"
import SingleMovie from "./pages/SingleMovie"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

          <Route path="/" Component={Homepage} />

          <Route path="/movie/:id" Component={SingleMovie} />




        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
