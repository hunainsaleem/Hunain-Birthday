import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './Components/Countdown'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BirthdayWishPage from './Components/BirthdayWishPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/birthday-wish" element={<BirthdayWishPage />} />
      </Routes>
    </BrowserRouter>
         </>
  )
}

export default App
