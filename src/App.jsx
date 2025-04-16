import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SingleMovie from "./pages/SingleMovie"
import DefaultLayout from "./layouts/DefaultLayouts"

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
