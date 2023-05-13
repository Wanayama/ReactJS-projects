import React from 'react'
import Routers from '../../routers/Routers'
import Navbar from '../NavBar/Navbar'
import Header from '../header/Header'
import Footer from '../footer/footer'

const Layout = () => {
  return (
   <>
   <Header />
   <div>
   <Navbar />
   </div>
   <div>
    <Routers />
   </div>
   <Footer />
   </>
  )
}

export default Layout