import React from 'react'

function ListOfIngredients({ingredients, onClick,prepared}){

    const ingredientes = ingredients.map((item,index)=>{
        return(
            <li key={index} onClick={()=>onClick(index)} className={(item.prepared) ? 'prepared':''}>{item.name}</li>
        )
    })

    return(
        <section>
            <h2>Lista de Ingredientes</h2>
            <p>Marca los ingredientes que tengas listos.</p>
            <ul>
                {ingredientes}
            </ul>
            {prepared ? <h3>Ya tienes todos los ingredientes necesarios. ¡Comencemos!</h3> : <h3>Aún no tienes todos los ingredientes</h3> }
        </section>
    )
}
export default ListOfIngredients