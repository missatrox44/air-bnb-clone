import React from 'react'

import star from '../images/star.png'
import '../style.css'

export default function Card(props){
  return (
    <div className='card'>
      <img alt='life lessons' src={props.img} className='card--image' />
      <div className='stats'>
      <img alt='star' src={star} className='card--star' /> 
      <span>{props.rating} </span>
      <span className='gray-text'>({props.reviewCount}) • </span>
      <span className='gray-text'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold-text'>From ${props.price}</span> / person</p>
      

    </div>
  )
}