import { useState } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/"/>
    </Routes>
   </BrowserRouter>
    <Navbar />
     <Footer />
    </>
  )
}

export default App
