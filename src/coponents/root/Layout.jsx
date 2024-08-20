import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Banner from '../banner/Banner'

const Layout = () => {
  return (
 <>
 <Header />
 <Banner />
 <Outlet />
 <Footer />
 </>
    
  )
}

export default Layout