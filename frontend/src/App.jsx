import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
const App = () => {
  return (
    <div className='bg-primary text-tertiary'>
      <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Category/>} />
        <Route path='/' element={<Category/>} />
        <Route path='/' element={<Category/>} />
        <Route path='/' element={<Product/>} >
          <Route path='productId' element={<Product/>} />
        </Route>
        <Route path='/' element={<Cart/>} />
        <Route path='/' element={<Login/>} />
       </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App