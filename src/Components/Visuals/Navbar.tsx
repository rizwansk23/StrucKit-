import { useContext } from 'react'
import NavFunction from '../Routes/NavFuction'
import { ThemeContext } from '../../Theme/ThemeContext'
import { CodeSquareIcon, Moon, Sun } from 'lucide-react';

const Navbar:React.FC<{name:string}> = ({name}) => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className=' w-full px-5 flex justify-between items-center dark:bg-secondry bg-primary h-20 border text-text border-border'>
            <NavFunction />
            <h1 className='text-3xl'>
                {name}
            </h1>
            <div className='flex gap-2 p-2 border flex-row-reverse border-border rounded-2xl'>
                <button
                    className='boder p-2 bg-tile-shadow rounded-xl '
                    onClick={toggleTheme}>
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                    className='boder p-2 bg-tile-shadow rounded-xl '>
                    <CodeSquareIcon size={18} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar