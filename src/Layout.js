import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <main className='common-padding flex flex-col min-h-screen'>
            <Navbar />
            <div className="flex-grow">
                <Outlet /> {/* Render the nested routes */}
            </div>
            <Footer />
        </main>
    )
}

export default Layout