import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Navbar from './ui/Navbar'
import { useSidebar } from './context/SidebarContext'

export default function AppLayout() {
  const location = useLocation();
  const {setIsSidebar} = useSidebar()

  useEffect(()=>{
    setIsSidebar(false)
  }, [location])
  return (
    <div className='h-screen'>
      <Header />
      <section className='flex flex-col'>
        <Outlet />
        <Footer />
      </section>
      <Navbar />

    </div>
  )
}
