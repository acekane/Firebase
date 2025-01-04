import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Component/Home'
import Product from '../Component/Products'
import Login from '../Component/Login'
import Private from '../Component/Private'
import AddProduct from '../Component/AddProduct'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        
        <Route path='/Products' element={
           <Private>
            <Product/>
           </Private>
          }></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/AddProduct' element={<AddProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
