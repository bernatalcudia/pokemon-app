import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { RouteNotFound } from './components/RouteNotFound'
import { PokemonList } from './components/Organisms/PokemonList/PokemonList'
import { DragonBallList } from './components/Organisms/DragonBallList/DragonBallList'
import { MainLayout } from './Templates/MainLayout/MainLayout'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout leftContent={<DragonBallList />} rightContent={<PokemonList />} />} />
          <Route path='*' element={<RouteNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
