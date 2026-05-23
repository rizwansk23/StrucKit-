import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import NavFunction from "../../Components/Routes/NavFuction"

const AppLayout = () => {
  return (
    <div className="bg-primary h-fit flex text-text relative ">
      <Sidebar />
      <div className="w-full">
        <div className="px-5 pt-4"><NavFunction /></div>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout