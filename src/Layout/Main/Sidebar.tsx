import {  LucideMenuSquare, Moon, Sun } from "lucide-react"
import { useContext, useState } from "react"
import { ThemeContext } from "../../Theme/ThemeContext";
import ToggleButton from "../../Components/sidebar/ToggleButton";
import { sidebar } from "../../Data/sidebar";
import { SideList } from "../../Components/sidebar/SideList";


const Sidebar = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

        const [activeItem, setActiveItem] = useState("");


    return (
        <aside className={`w-1/4 h-full bg-secondry  border-border border-r flex flex-col py-2}`}>
            {/* header */}
            <header className="flex items-center gap-4 px-2 text-text">
                <div className="border border-border bg-orange p-1 text-white rounded-lg" >
                    <LucideMenuSquare size={24} className="size-6" />
                </div>
                <h1 className=" text-text text-2xl my-4 font-bold">Data Structure  </h1>

            </header>
            <hr className="text-border " />

            {/* main body */}
            <div className=" flex-1 my-4 px-2.5 overflow-auto custom-scrollbar">

                <ul className="flex flex-col">
                    <SideList item={sidebar} activeItem={activeItem} setActiveItem={setActiveItem}/>
                </ul>



            </div>
            <hr className="text-border" />

            {/* footer */}
            <div className="text-text text-md border-border  px-1.5 my-4 ">
                <div className="flex gap-2 bg-tile-shadow rounded-3xl pl-4 items-center p-2.5">
                    {isDarkMode ? <Moon size={20} className="my-1" /> : <Sun size={20} className="my-1" />}
                    <h1 className="flex-1 text-lg">{!isDarkMode ? "light" : 'dark'} mode</h1>
                    <ToggleButton onchange={toggleTheme} isDarkmode={isDarkMode} />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar



