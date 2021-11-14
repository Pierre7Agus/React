import React,{useEffect, useState} from 'react';
import './style/style.css'
import recipe from './services/Data'
import Header from './components/Header'
import ListOfIngredients from './components/ListOfIngredients';
import Preparation from './components/Preparation'


export default function App(){

    const [initial, setInitial] = useState(recipe);
    const [prepared , setPrepared] = useState(false);

    function ingredientClick(index){
        const update = {... initial}

        update.ingredients[index].prepared = !update.ingredients[index].prepared

        setInitial(update)
    }

    useEffect(()=>{
        setPrepared(recipe.ingredients.every(i => i.prepared))
    },[initial]);

    return(
        <div className='sub-container'>
        <Header titulo={recipe.title} descripcion={recipe.description}/>
        <ListOfIngredients ingredients={recipe.ingredients} onClick={ingredientClick} prepared={prepared}/>
        <Preparation preparation={recipe.preparation} prepared={prepared} />
        </div>
    )
}