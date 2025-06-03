import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { RouteNotFound } from './components/RouteNotFound'
import { PokemonList } from './components/Organisms/PokemonList'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <>
          <Link to='/pokemon'>PokemonList</Link>
        </>
        <Routes>
          <Route path='/pokemon' element={<PokemonList />} />
          <Route path='*' element={<RouteNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
