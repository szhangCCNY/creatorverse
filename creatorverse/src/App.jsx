import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreator from './pages/ShowCreator'
import ViewCreator from './pages/ViewCreator'


function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowCreator />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/view/:id" element={<ViewCreator />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
