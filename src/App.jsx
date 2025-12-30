import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Timer from './pages/Timer.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </div>
  )
}

export default App
