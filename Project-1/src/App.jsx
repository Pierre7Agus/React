import React from 'react';
import recipe from './services/Data'
import Header from './components/Header'
import ListOfIngredients from './components/ListOfIngredients';

export default function App(){
    return(
        <div>
        <Header titulo={recipe.title} descripcion={recipe.description}/>
        <ListOfIngredients ingredients={recipe.ingredients}/>
        </div>
    )
}