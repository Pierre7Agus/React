import React,{useState} from 'react'
import ListOfGifs from './ListOfGifs'
import ShowGifs from './ShowGifs'

export default function searchGifs(){
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
    <div>
      <ShowGifs onClick={actionUser} />
      <ListOfGifs keyword={keyword}/>
    </div>
  )
}
