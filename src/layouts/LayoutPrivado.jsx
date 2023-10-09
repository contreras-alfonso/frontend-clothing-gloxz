import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

export const LayoutPrivado = () => {
  return (
    <main className='flex'>
        <Sidebar/>
        <div className='p-10 bg-color_bg  w-full h-screen overflow-y-scroll'>
          <Outlet/>
        </div>
    </main>
  )
}
