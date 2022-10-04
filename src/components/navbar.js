import React from 'react'
import logo from '../images/air-bnb-logo.png'
import logoText from '../images/air-bnb-logo-text.png'
import photoGrid from '../images/photo-grid.png'

export default function Navbar(){
  return (
    <nav>
      <img alt='air bnb logo' src={logoText} className='nav--logo' />
    </nav>
  )
}