import React from 'react'
import { Link } from 'react-router-dom'

export const CardClothes = () => {
  return (
    <div className='flex flex-col gap-5 py-10'>


      <div className="relative group">
        <img src="/images/product1.png" alt="Producto 1" className="w-full h-auto"/>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="/images/product1-hover.png" alt="Producto 1" className="w-full h-auto"/>
          
          <a href={'/producto/1'} className="text-center absolute w-11/12 bottom-2 left-2 rounded text-white bg-black  py-3 px-10 transition-all duration-300 hover:bg-amber-700/70 ">
            Ver Producto
          </a>
        </div>
      </div>


        <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Lace Shirt Cut ll</h2>
            <p className='text-slate-400 text-lg'>$16.00</p>
            <div className='flex gap-2'>
                <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-blue-700'></button>
                <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-gray-500'></button>
                <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-amber-700'></button>
            </div>
        </div>

    </div>
  )
}
