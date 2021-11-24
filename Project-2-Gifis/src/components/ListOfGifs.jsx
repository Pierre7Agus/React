import React,{useState,useEffect} from 'react'
import getGifis from '../services/getGifis'
import Gifs from './Gifs'

export default function ListOfGifs({keyword}){

  const [gif , setGif]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    getGifis({keyword}).then(res=>{
      setGif(res)
      setLoading(false)
    })
  },[keyword])

  if(loading) return(
    <section className='load-container'>
		  <div className="loader"></div>
	  </section>
  )


  return(
    <div>
      {gif.map(({id,title,url}) => <Gifs title={title} url={url}  id={id} key={id}/> )}
    </div>
  )
}
