import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./layouts/DefaultLayouts"

// pages
import Homepage from "./pages/Homepage"
import SingleMovie from "./pages/SingleMovie"
import NotFound from "./pages/NotFound"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"

// global context
import GlobalContext from "./contexts/GlobalContext"
import Dashboard from "./pages/admin/Dashboard"
import FormAddMovie from "./components/FormAddMovie"




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


            {/* auth routes */}
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />

            <Route path="/admin/dashboard" Component={Dashboard} />
            <Route path="/admin/new_movie" Component={FormAddMovie} />

          </Route>
        </Routes>

      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
