import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";


export default function DefaultLayout() {

  const { loader } = useContext(GlobalContext)

  return (
    <>


      <Header />

      <main style={{ minHeight: "80vh" }} >
        {loader && (<Loader />)
        }
        <Outlet />
      </main>


      <Footer />



    </>
  )

}