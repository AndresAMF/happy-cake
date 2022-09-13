import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import cake from '../../assets/icons/cake.ico'

function Nav() {
  return (
    <nav>
        <div className='link-container'>
        <Link className="nav-item" to={"/"}>Home</Link>
        <Link className="nav-item" to={"contact"}>Contact</Link>
        </div>
        <div className='brand-container'>
          <p className='brand-name'>Happy Cake!</p>
          <img className='brand-img' src={cake} alt="cake.ico" />
        </div>
    </nav>
  )
}

export default Nav