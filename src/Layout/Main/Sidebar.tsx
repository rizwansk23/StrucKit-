import { LucideMenuSquare} from "lucide-react"
import { useContext, useState } from "react"
import { ThemeContext } from "../../Theme/ThemeContext";
import { sidebar } from "../../Data/sidebar";
import { SideList } from "../../Components/sidebar/SideList";
import ThemeButton from "../../Components/sidebar/ThemeButton";


const Sidebar = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const [activeItem, setActiveItem] = useState("");


    return (
        <aside className={`w-1/3 h-screen sticky top-0 self-start bg-secondry  border-border border-r flex flex-col py-2}`}>
            {/* header */}
            <header className="flex items-center gap-4 px-2 text-text">
                <div className="border border-border bg-orange p-1 text-white rounded-lg" >
                    <LucideMenuSquare size={24} className="size-6" />
                </div>
                <h1 className=" text-text text-2xl my-4 font-bold">StrucKit  </h1>
            </header>
            <hr className="text-border " />

            {/* main body */}
            <div className=" flex-1 my-4 px-2.5 overflow-auto custom-scrollbar">
                <ul className="flex flex-col">
                    <SideList item={sidebar} activeItem={activeItem} setActiveItem={setActiveItem} />
                </ul>
            </div>
            <hr className="text-border" />

            {/* footer */}
            <div className="text-text text-md border-border  px-1.5 my-4 ">
                <ThemeButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
        </aside>
    )
}

export default Sidebar



