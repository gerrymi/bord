import React from 'react';
import { directive } from '@babel/types';

function Button() {
    return (
        <div>
            <button className="Bord-link">Log in<a href="#"></a></button>
            <button className='createAccount'>Create account<a href='#'></a></button>
        </div>
    )
}

export default Button