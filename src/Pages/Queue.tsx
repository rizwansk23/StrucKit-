import { useLocation } from "react-router-dom"
import NavFuction from "../Components/Routes/NavFuction"


const Queue = () => {

    const location = useLocation();

     const paths : String[] = location.pathname.split('/').filter(Boolean);

     const path =  paths.slice(0, 1);

    return (
        <div>
            {/* <NavFuction/> */}
            {path} visual page

        </div>
    )
}

export default Queue