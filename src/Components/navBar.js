import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/style.css'

const navBar = () => {
  return (
    <div>
        <nav>
        <Link to={'/'} style={{textDecoration: 'none'}} id='logo'><img src='/logo.png' ></img></Link>
        <div className='navContent'>
           <Link to={'/'} id='cont'> Home </Link>
           <Link to={'/buy'} id='cont'> Buy </Link>
           <Link to={'/rent'} id='cont'> Rent </Link>
           <Link to={'/sell'} id='cont'> sell </Link>
        </div>
        <Link to={'/logIn'} id='login'><botton id="loginBtn"> LogIn/SignIn</botton> </Link>
        </nav>
    </div>
  )
}

export default navBar
