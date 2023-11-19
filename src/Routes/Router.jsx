import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'
import Learning from '../Pages/Learning/Learning'

export default function RouterApp() {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Learning' element={<Learning/>} />

        </Routes>

    </BrowserRouter>

  )
}
