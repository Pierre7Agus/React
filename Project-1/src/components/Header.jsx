import React from 'react'


function Header({titulo,descripcion}){

    return(
        <header className='header'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </header>
    )
}
export default Header