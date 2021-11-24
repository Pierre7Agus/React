import React,{useState} from 'react'
import ListOfGifs from './components/ListOfGifs'
import ShowGifs from './components/ShowGifs'

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
      <ShowGifs onClick={actionUser} />
      <ListOfGifs keyword={keyword}/>
    </div>
  )
}
