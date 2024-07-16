import { useState, useEffect } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandinPage from './components/common/LandinPage'
import Nosotros from './components/common/Nosotros'
import Contacto from './components/common/Contacto'
import ContainerBody from './components/layouts/ContainerBody'
import FetchData from '../fetchData'
import ItemListContainer from './components/common/ItemListContainer'
import fetchData from '../fetchData'


function App() {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetchData()
    .then((response) => {
      setProductos(response);
    })
  },[])

 

  return (
    <>
   <BrowserRouter >
   <Navbar />
    <Routes>
      <Route path="react-shop" element={<ContainerBody><ItemListContainer productos={productos} /></ContainerBody> }/>
      <Route path="/react-shop/nosotros"  element={<ContainerBody><Nosotros /></ContainerBody> }/>
      <Route path='/react-shop/contacto' element={<ContainerBody><Contacto /></ContainerBody>  }/>
    </Routes>
   </BrowserRouter>

   <Footer />
  
    </>

  
  )
}

export default App
