import React from 'react'

export default function Preparation({preparation,prepared}){

    const items = preparation.map((item,index)=>{
        return (
            <li key={index} >{item.paso}</li>
        )
    })

    return(
        <section className={(prepared) ? 'mostrar':'ocultar'}>
            <h2>Preparación</h2>
            {items}
        </section>
    )
}