import React from 'react'

export default function App(){

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
  getGifis()


  return(
    <section>
      <h1>Hello World</h1>
    </section>
  )
}
