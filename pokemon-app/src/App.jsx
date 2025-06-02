import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { RouteNotFound } from './components/RouteNotFound'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <>
        </>
        <Routes>
          <Route path='*' element={RouteNotFound} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
