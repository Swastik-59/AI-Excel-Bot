import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayGround from './pages/PlayGround';
import Home from './pages/Home'
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playGround" element={<PlayGround />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App