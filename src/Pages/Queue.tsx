import { GetPath } from "../hook/GetPaths"

const Queue = () => {

    const path = GetPath();

    return (
        <div>

            {path} visual page

        </div>
    )
}

export default Queue