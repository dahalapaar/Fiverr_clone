import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
              {/* <Link to="/"> */}
                <span className='text'>Apaarr</span>
              {/* </Link> */}
                <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Apaarr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In </span>
                <span>Become a seller</span>
                <button>Join</button>
            </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Text</span>
          <span>Text2</span>

        </div>
    </div>
  )
}

export default Navbar