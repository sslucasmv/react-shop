import { useState, useEffect } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Contacto from './components/common/Contacto'
import ContainerBody from './components/layouts/ContainerBody'
import ItemListContainer from './components/common/ItemListContainer'
import fetchData from '../fetchData'
import NotFound from './components/layouts/NotFound'
import ItemDetail from './components/common/ItemDetail'


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
   
   <BrowserRouter basename='react-shop/'>
   <Navbar />
    <Routes>
      <Route path="/" element={<ContainerBody><ItemListContainer productos={productos} /></ContainerBody> }/>
      <Route path="/detalle/:id" element={<ItemDetail productos={productos} />}/>
      <Route path="/productos"  element={<ContainerBody><ItemListContainer productos={productos} /></ContainerBody> }/>
      <Route path='contacto' element={<ContainerBody><Contacto /></ContainerBody>  }/>
      <Route path="/category/:category" element={<ContainerBody><ItemListContainer  productos={productos}/></ContainerBody>} />
      <Route path="*" element={<NotFound />} />
    </Routes>

   </BrowserRouter>

   <Footer />
  
    </>

  
  )
}

export default App
