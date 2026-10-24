import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1>Workout Buddy</h1>
            </Link>
            <nav>
                <Link to='/login'><h4>Login</h4></Link>
                <Link to='/signup'><h4>Signup</h4></Link>
            </nav>
        </div>
    </header>
  )
}

export default Navbar