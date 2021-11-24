import React from 'react'

export default function ShowGifs({onClick}){
  return(
    <section>
      <h1>Gifs Finder</h1>
      <form id="form">
        <label>
          <input type="text" id="inputValue"/>
        </label>
        <button onClick={()=>onClick()} >Search</button>
      </form>
    </section>
  )
}
