import React from 'react'

export default function Gifs({title,url,id}){
  return(
    <article>
      <h2>{title}</h2>
      <figure>
        <img src={url} alt={title}  />
      </figure>
    </article>
  )
}
