import { Outlet } from "react-router-dom"
import Sidebar from "../Layout/Main/Sidebar"
import NavFuction from "../Components/Routes/NavFuction"

const Home = () => {
  return (
    <div className="bg-primary h-screen flex text-text ">
      <Sidebar />
      <div className="w-full">
        <NavFuction/>
        <Outlet />
      </div>
    </div>
  )
}

export default Home