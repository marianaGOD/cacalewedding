import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './assets/HomePage'
import TopBar from './assets/TopBar'

function App() {


  return (
    <>
    <TopBar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </>
  )
}

export default App
