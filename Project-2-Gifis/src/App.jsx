import React,{useState} from 'react'
import ListOfGifs from './components/ListOfGifs'

export default function App(){

  const [keyword , setKeyword]=useState('panda')

  const actionUser=()=>{
    const form=document.getElementById('form')
    form.onsubmit=(e)=>{
      const inputValue=document.getElementById('inputValue').value
      setKeyword(inputValue)
      e.preventDefault()
    }
  }

  return(
    <div>
      <h1>Gifs Finder</h1>
      <form id="form">
        <label>
          <input type="text" id="inputValue"/>
          </label>
          <button onClick={actionUser} >Search</button>
      </form>
      <ListOfGifs keyword={keyword}/>
    </div>
  )
}
