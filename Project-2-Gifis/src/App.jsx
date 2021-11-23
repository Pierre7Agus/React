import React,{useState,useEffect} from 'react'
import getGifis from './services/getGifis'

export default function App(){

  const [gif , setGif]=useState([])

  useEffect(()=>{
    getGifis().then(res=>setGif(res))
  },[])

  return(
    <section>
      {
        gif.map(({title,id,url})=>{
          return <article key={id}>
            <h2>{title}</h2>
            <figure>
              <img src={url} alt={title}  />
            </figure>
          </article>
        })
      }
    </section>
  )
}
