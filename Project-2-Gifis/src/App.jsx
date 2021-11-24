import React,{useState} from 'react'
import './style/style.css'
import ListOfGifs from './components/ListOfGifs'
import ShowGifs from './components/ShowGifs'

export default function App(){

  const [keyword , setKeyword]=useState('panda')

  const actionUser=()=>{
    const form=document.getElementById('form')
    let inputValue=document.getElementById('inputValue').value
    form.onsubmit=(e)=>{
      (inputValue) ? setKeyword(inputValue) : setKeyword('error')
      e.preventDefault()
    }
    form.reset()
  }

  return(
    <div className='container'>
      <ShowGifs onClick={actionUser} />
      <ListOfGifs keyword={keyword}/>
    </div>
  )
}
