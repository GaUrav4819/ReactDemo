import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddProduct from './product/AddProduct'
import ViewProduct from './product/ViewProduct'
import Errorr from './component/Errorr'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import EditProduct from './product/EditProduct'
function App() {
  

  return (
    <>
    {/* React Routing */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='add' element={<AddProduct/>}/>
        <Route path='view' element={<ViewProduct/>}/>
        {/* fall back is used to map url which is not map */}
        <Route path='*' element={<Errorr/>}/>
        {/* //default request mapping */}
        <Route path='/' element={<ViewProduct/>}/>
        {/* <Route path='edit/:id' element={<EditProduct/>}/> */}
        <Route path='edit/:id' element={<EditProduct/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
