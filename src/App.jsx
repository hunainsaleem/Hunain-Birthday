import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './Components/Countdown'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BirthdayWish from './Components/BirthdayWish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/birthday-wish" element={<BirthdayWish />} />
      </Routes>
    </BrowserRouter>
         </>
  )
}

export default App
