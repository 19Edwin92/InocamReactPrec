// import React, { useState, useRef } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TestChart from './pages/TestChart'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/testchart' element={<TestChart/>}/>
      </Routes>
    </div>
  )
}

export default App

