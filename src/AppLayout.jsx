import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './ui/Header'
import Footer from './ui/Footer'

export default function AppLayout() {
  return (
    <div className='h-screen'>
      <Header />
      <section className='flex flex-col'>
        <Outlet />
        <Footer />
      </section>
    </div>
  )
}
