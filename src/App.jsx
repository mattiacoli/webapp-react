import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./layouts/DefaultLayouts"
import Homepage from "./pages/Homepage"
import SingleMovie from "./pages/SingleMovie"
import NotFound from "./pages/NotFound"

// global context
import GlobalContext from "./contexts/GlobalContext"

function App() {

  const [loader, setLoader] = useState(false)


  return (

    <GlobalContext.Provider value={{ loader, setLoader }}>

      <BrowserRouter>


        <Routes>
          <Route Component={DefaultLayout}>
            {/* Homepage */}
            <Route path="/" Component={Homepage} />
            {/* Single movie page */}
            <Route path="/movie/:id" Component={SingleMovie} />
            {/* 404 */}
            <Route path="/*" Component={NotFound} />

          </Route>
        </Routes>

      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
