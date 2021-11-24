import React,{useState} from 'react'
import './style/style.css'
import SearchGifs from './components/SearchGifs'

export default function App(){

  return(
    <div className='container'>
      <SearchGifs />
    </div>
  )
}
