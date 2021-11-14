import React from 'react'

function ListOfIngredients({ingredients}){

    const ingredientes = ingredients.map((item,index)=>{
        return(
            <li key={index}>{item.name}</li>
        )
    })

    return(
        <section>
            <h2>Lista de Ingredientes</h2>
            <ul>
                {ingredientes}
            </ul>
        </section>
    )
}
export default ListOfIngredients