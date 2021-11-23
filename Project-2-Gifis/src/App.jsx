import React,{useState,useEffect} from 'react'

export default function App(){

  const [gif , setGif]=useState([])

  const apiKEY = '3gsGIyDZ1ugFQ8tzmLXKONspga919v28'
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q='panda'&limit=10&offset=0&rating=g&lang=en`;

  const getGifis=()=>{
    return fetch(apiUrl)
    .then(response=>response.json())
    .then(res=>{
      const {data}=res
      const gifs=data.map((item)=>{
        const {title,id,images}=item
        const {url}=images.downsized_medium
        return {title,id,url}
      })
      return gifs
    })
  }

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
