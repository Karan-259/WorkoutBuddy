import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App