import { GetPath } from "../hook/GetPaths"

const Queue = () => {

    const path = GetPath();

    return (
        <div className="bg-tertiary h-60 w-full">

            {path} visual page

        </div>
    )
}

export default Queue