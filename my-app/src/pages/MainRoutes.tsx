import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import ProductPage from './ProductPage'
import PrivateRoute from '../components/PrivateRoute'


const MainRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login/>} />
            <Route path={`/product/:productId`} element={<PrivateRoute><ProductPage/></PrivateRoute>} />
        </Routes>
  )
}

export default MainRoutes