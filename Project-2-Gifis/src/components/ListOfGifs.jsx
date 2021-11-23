import React,{useState,useEffect} from 'react'
import getGifis from '../services/getGifis'
import Gifs from './Gifs'

export default function ListOfGifs(){

  const [gif , setGif]=useState([])

  useEffect(()=>{
    getGifis().then(res=>setGif(res))
  },[])

  return(
    <div>
      {gif.map(({id,title,url}) => <Gifs title={title} url={url}  id={id} key={id}/> )}
    </div>
  )
}
