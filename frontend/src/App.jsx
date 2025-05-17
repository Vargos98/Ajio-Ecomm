import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import bannermen from './assets/bannermens.png'
import bannerwomen from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'

const App = () => {
  return (
    <div className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category category="men" banner={bannermen} />} />
          <Route path="/womens" element={<Category category="women" banner={bannerwomen} />} />
          <Route
            path='/kids'
            element={<Category category="kid" banner={bannerkids} />}
          />

          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
