import { Moon, Sun } from "lucide-react"
import ToggleButton from "./ToggleButton"
import type { ThemeContextType } from "../../Theme/ThemeContext"

const ThemeButton : React.FC<ThemeContextType>= ({isDarkMode , toggleTheme}) => {
    return (
        <div className="flex gap-2 bg-tile-shadow rounded-3xl pl-4 items-center p-2.5">
            {isDarkMode ? <Moon size={20} className="my-1" /> : <Sun size={20} className="my-1" />}
            <h1 className="flex-1 text-lg">{!isDarkMode ? "light" : 'dark'} mode</h1>
            <ToggleButton onchange={toggleTheme} isDarkmode={isDarkMode} />
        </div>
    )
}

export default ThemeButton