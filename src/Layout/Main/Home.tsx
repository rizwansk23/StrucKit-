import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import NavFunction from "../../Components/Routes/NavFuction"

const Home = () => {
  return (
    <div className="bg-primary h-screen flex text-text ">
      <Sidebar />
      <div className="w-full">
        <NavFunction/>
        <Outlet />
      </div>
    </div>
  )
}

export default Home