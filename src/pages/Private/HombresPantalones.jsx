import React from 'react'
import { Link } from 'react-router-dom'

export const HombresPantalones = () => {
  return (
    <div className=''>
      <div className='flex items-center mb-10 gap-3'>
        <h1 className='text-3xl font-black mb-3 text-color-principal'>Hombres</h1>
        <h2 className='font-medium'><i className="fa-regular fa-tags text-color-principal"></i> Pantalones</h2>
      </div>


      <div className='mb-10 flex justify-between items-center bg-white py-4 px-5 rounded-xl'>
        <Link to={'/administration/hombres/nuevo-pantalon'} className='rounded-xl py-3 px-5 border duration-300 bg-color-principal text-white text-sm hover:bg-white hover:text-black'><i class="fa-solid fa-cloud-plus"></i> Nuevo Producto</Link>
        <div className='bg-color_bg px-4 py-1 rounded-xl flex gap-2 items-center text-black'>
          <button><i class="fa-solid fa-magnifying-glass text-color-principal"></i></button>
          <input className='p-2 text-sm focus:outline-none bg-transparent' type="text" placeholder='Search'/>
        </div>
      </div>


      <div className='bg-white pr-3 rounded-xl py-10 px-5'>
          <table className="w-full">

            <thead className='bg-color-principal'>
              <tr className=''>
                <td className='font-medium p-4 text-base text-white'>Product</td>
                <td className='font-medium p-4 text-base text-white'>Views</td>
                <td className='font-medium p-4 text-base text-white'>Estado</td>
                <td className='font-medium p-4 text-base text-white'>Price</td>
                <td className='font-medium p-4 text-base text-white text-center'></td>
              </tr>
            </thead>

            <tbody className=''>

              <tr className='duration-300'>
                <td className=''>
                  <div className='flex items-center gap-3'>
                    <img className='w-20 pl-1 rounded' src="/images/product1.png" alt="w" />
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm font-medium'>Gaming Console</p>
                      <p className='text-sm text-gray-500'>52SD5F3</p>
                    </div>
                  </div>
                </td>
                <td className='text-gray-600 text-base'>36</td>
                <td className=''><div className='bg-red-50 py-1 px-3 rounded-md w-fit text-red-400 text-sm'>Sin Stock</div></td>
                <td className='text-gray-600 text-base'>$3.9k</td>
                <td>
                  <div className='flex flex-col w-fit gap-2 mx-auto'>
                    <Link to={'/producto/1'} className='rounded px-5 py-1 border border-black text-sm duration-300 bg-black text-white hover:bg-white hover:text-black'><i className="fa-regular fa-eye"></i> Ver Producto</Link>
                    <Link to={'/editar/1'} className='rounded px-5 py-1 border border-amber-700/70 text-sm duration-300 text-white bg-amber-700/70 hover:bg-white hover:text-black hover:border-black'><i className="fa-light fa-pen"></i> Editar Producto</Link>
                  </div>
                </td>
              </tr>

            </tbody>

          </table>
      </div>

      <div className='w-fit mx-auto flex items-center gap-4 mt-20'>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'><i className="fa-solid fa-arrow-left"></i></Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>1</Link>
        <Link className='bg-black p-5 rounded-full w-1 h-1 flex items-center justify-center text-white'>2</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>3</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>...</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>10</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}
