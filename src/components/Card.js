import React from 'react'
import lifeLessons from '../images/life-lessons.png'
import star from '../images/star.png'

export default function Card(){
  return (
    <div className='card'>
      <img alt='life lessons' src={lifeLessons} className='card--image' />
      <div className='stats'>
      <img alt='star' src={star} className='card--star' /> 
      <span>5.0 </span>
      <span className='gray-text'> (6) • </span>
      <span className='gray-text'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className='bold-text'>From $136</span> / person</p>
      

    </div>
  )
}