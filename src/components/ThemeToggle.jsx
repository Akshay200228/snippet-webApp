import React,{useContext} from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../constants/ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div className='p-2'>
            {theme === 'dark' ? (
                <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><HiSun className='mr-2 text-2xl text-white' />Light Mode</div>
            ) : <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><HiMoon className='mr-2 text-2xl text-primary' />Dark Mood</div>}
        </div>
    )
}

export default ThemeToggle