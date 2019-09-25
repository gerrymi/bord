import React from 'react';
import { directive } from '@babel/types';

function Header() {
    return (
        <div className="Bord">
            <header className="Bord-header">
                <h1 className='header'>Hi, are you Børd?</h1>
                <button className="Bord-link">Log in<a href="#"></a></button>
                <button className='createAccount'>Create account<a href='#'></a></button>
            </header>
        </div>
    ) 
}

export default Header