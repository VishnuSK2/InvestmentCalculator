import React from 'react'
import logo from '../assets/investment-calculator-logo.png'

function Header() {
  return (
    <header id='header' className='mt-2'>
        <img src={logo} alt="logo"/>
        <h1 className='fw-bold text-uppercase fs-2'>Investment calculator</h1>
    </header>
  )
}

export default Header