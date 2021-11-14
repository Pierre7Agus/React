import React from 'react';
import recipe from './services/Data'
import Header from './components/Header'

export default function App(){
    return(
        <Header titulo={recipe.title} descripcion={recipe.description}/>
    )
}