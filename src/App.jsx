import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import './App.css'

import Nav from './components/Nav'
import Home from './pages/Home'
import PetList from './pages/PetList'
import PetDetails from './pages/PetDetails'
import PetForm from './pages/PetForm'

const App = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getAllPets = async () => {
      const response = await axios.get(`${BASE_URL}/pets`)
      setPets(response.data)
    }
    getAllPets()

    
  }, [])

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petlist" element={<PetList pets={pets} />} />
          <Route path="/petlist/:id" element={ <PetDetails pets={pets} /> } />
          <Route path="/new" element={ <PetForm pets={pets} setPets={setPets} /> } />
        </Routes>
      </main>
    </>
  )
}

export default App