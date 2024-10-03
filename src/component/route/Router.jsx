import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFound from '../pages/NotFound'
import MianProduct from '../pages/product/MianProduct'
import AllProduct from '../pages/product/AllProduct'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-detais/:id' element={<MianProduct />} />
            <Route path='/allproduct' element={<AllProduct/>} />

            {/* page Not Found page Route */}
            <Route path='*' element={<NotFound />} />


        </Routes>
    )
}

export default Router
