import { useContext } from 'react'
import NavFunction from '../Routes/NavFuction'
import { ThemeContext } from '../../Theme/ThemeContext'
import { CodeSquareIcon, Moon, Sun } from 'lucide-react';

const Navbar: React.FC<{ name: string }> = ({ name }) => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className=' w-full px-5 flex justify-between items-center dark:bg-secondry bg-primary h-20 border text-text border-border'>
            <NavFunction />
            <kbd className='text-3xl'>
                {name}
            </kbd>
            <div className='flex gap-2 p-2 border border-border rounded-2xl'>
                <button
                    title='code'
                    className='boder p-2 bg-tile-shadow rounded-xl cursor-pointer  active:scale-95'>
                    <CodeSquareIcon size={18} />
                </button>
                <button
                    title='theme'
                    className='boder p-2 bg-tile-shadow rounded-xl cursor-pointer active:scale-95'
                    onClick={toggleTheme}>
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar