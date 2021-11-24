import React,{useState,useEffect} from 'react'
import getGifis from '../services/getGifis'
import Gifs from './Gifs'

export default function ListOfGifs({keyword}){

  const [gif , setGif]=useState([])

  useEffect(()=>{
    getGifis({keyword}).then(res=>setGif(res))
  },[keyword])

  return(
    <div>
      {gif.map(({id,title,url}) => <Gifs title={title} url={url}  id={id} key={id}/> )}
    </div>
  )
}
