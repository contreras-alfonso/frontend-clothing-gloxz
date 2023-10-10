import React from 'react'
import { Link } from 'react-router-dom'

export const CardClothes = () => {
  return (
    <div className='flex flex-col'>


      <div className=" relative group">
        
        <img src="https://falabella.scene7.com/is/image/FalabellaPE/882845642_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70" alt="Producto 1" className="w-full"/>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="https://falabella.scene7.com/is/image/FalabellaPE/882845642_2?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70" alt="Producto 1" className="w-full "/>
          <button className='absolute top-4 right-4 bg-amber-700/70 p-5 w-4 h-4 flex items-center justify-center rounded-full text-white hover:bg-black transition-all duration-300'><i className="fa-regular fa-heart"></i></button>
          <a href={'/producto/1'} className="text-center absolute bottom-0 w-full text-white bg-black  py-3  transition-all duration-300 hover:bg-amber-700/70 ">
            Ver Producto
          </a>
        </div>
      </div>


        <div className='flex flex-col gap-1 p-4 py-5'>
            <h2 className='font-medium text-gray-500 uppercase text-sm'>NEWPORT</h2>
            <p className='font-medium text-gray-700'>Lace Shirt Cut ll</p>
            <p className='text-gray-500 text-base'>$16.00</p>
            <div className='flex gap-2'>
                <li className='p-[2px] flex items-center justify-center rounded-full'>
                  <button className='h-[13px] w-[13px] rounded-full bg-black'></button>
                </li>

                <li className='p-[2px] flex items-center justify-center border border-gray-400 rounded-full'>
                  <button className='h-[13px] w-[13px] rounded-full bg-gray-500'></button>
                </li>

                <li className='p-[2px] flex items-center justify-center rounded-full'>
                  <button button className='h-[13px] w-[13px] rounded-full bg-amber-700'></button>
                </li>
            </div>
        </div>

    </div>
  )
}
