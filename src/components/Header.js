import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
        <ul>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/blog'>Blog</a>
            </li>
            <li>
                <a href='/contact'>Contact</a>
            </li>
        </ul>
    </header>
  )
}

export default Header