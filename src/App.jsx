import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layoutscreen from './screen/Layoutscreen'
import Home from './component/Home'
import Product from './component/Product'
import Category from './component/Category'
import Cart from './component/Cart'
import Contact from './component/Contact'
import Policy from './component/Policy'
import Check_out from './component/Check_out'
import Order from './component/Order'
import About from './component/About'
import Products from './component/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layoutscreen></Layoutscreen>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product/:id' element={<Product></Product>}></Route>
            <Route path='/product' element={<Products></Products>}></Route>
            <Route path='/category' element={<Category></Category>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/policy' element={<Policy></Policy>}></Route>
            <Route path='/checkout' element={<Check_out></Check_out>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/order' element={<Order></Order>}></Route>
          </Route>
          
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
