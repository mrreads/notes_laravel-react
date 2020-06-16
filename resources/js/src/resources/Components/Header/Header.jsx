import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.module.css';

function Header (props)
{
    return (
        <header className='header'>
            <div className="container">
                <NavLink to="/" className='header__item'> Главная </NavLink>
                <NavLink to="/notes" className='header__item'> Список заметок </NavLink>
                <NavLink to="/about" className='header__item'> О нас </NavLink>
            </div>
        </header>
    );
}

export default Header;
