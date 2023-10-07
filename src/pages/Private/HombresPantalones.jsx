import React from 'react'
import { Link } from 'react-router-dom'

export const HombresPantalones = () => {
  return (
    <div className='p-10 bg-white w-full'>
      <div className='flex items-center mb-10 gap-3'>
        <h1 className='text-3xl font-black mb-3'>Hombres</h1>
        <h2 className='font-medium'><i className="fa-regular fa-tags"></i> Pantalones</h2>
      </div>


      <div className='mb-10 flex justify-between'>
        <button className='rounded py-2 px-5 border duration-300 border-blue-500/90 hover:bg-blue-500/90 hover:text-white text-sm'>Nuevo Producto</button>
        <div className='border border-black px-2 rounded flex gap-3 items-center text-black'>
          <input className='p-2 text-sm focus:outline-none bg-transparent' type="text" placeholder='Ingresa tu busqueda'/>
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>


      <div className='bg-white pr-3 pl-3 pb-3 rounded-lg border-[1px] border-blue-100'>
          <table className="w-full">

            <thead className='border-b-[1px] border-blue-100 '>
              <tr className=''>
                <td className='font-medium py-3 text-sm'>Product</td>
                <td className='font-medium py-3 text-sm'>Views</td>
                <td className='font-medium py-3 text-sm'>Estado</td>
                <td className='font-medium py-3 text-sm'>Price</td>
                <td className='font-medium py-3 text-sm'>Accion</td>
              </tr>
            </thead>

            <tbody className=''>

              <tr className='hover:bg-slate-100 duration-300 border-b-[1px] border-blue-100 py-2'>
                <td className='py-1'>
                  <div className='flex items-center gap-3'>
                    <img className='w-20 pl-1 rounded' src="/images/product1.png" alt="w" />
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm font-medium'>Gaming Console</p>
                      <p className='text-sm text-gray-500'>52SD5F3</p>
                    </div>
                  </div>
                </td>
                <td className='text-gray-600 text-sm'>36</td>
                <td className=''><div className='bg-red-50 py-1 px-3 rounded-md w-fit text-red-400 text-sm'>Sin Stock</div></td>
                <td className='text-gray-600 text-sm'>$3.9k</td>
                <td>
                  <div className='flex flex-col w-fit gap-2'>
                    <Link to={'/producto/1'} className='rounded px-5 py-1 border border-black text-sm duration-300 hover:bg-black hover:text-white'><i className="fa-regular fa-eye"></i> Ver Producto</Link>
                    <Link to={'/editar/1'} className='rounded px-5 py-1 border border-black text-sm duration-300 hover:bg-black hover:text-white'><i className="fa-light fa-pen"></i> Editar Producto</Link>
                  </div>
                </td>
              </tr>

              <tr className='hover:bg-slate-100 duration-300'>
                <td className='py-1'>
                  <div className='flex items-center gap-3'>
                    <img className='w-20 pl-1 rounded' src="/images/sp2.png" alt="w" />
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm font-medium'>Gaming Console</p>
                      <p className='text-sm text-gray-500'>52SD5F3</p>
                    </div>
                  </div>
                </td>
                <td className='text-gray-600 text-sm'>25</td>
                <td className=''><div className='bg-red-50 py-1 px-3 rounded-md w-fit text-red-400 text-sm'>Sin Stock</div></td>
                <td className='text-gray-600 text-sm'>$3.9k</td>
                <td>
                  <div className='flex flex-col w-fit gap-2'>
                    <Link to={'/producto/1'} className='rounded px-5 py-1 border border-black text-sm duration-300 hover:bg-black hover:text-white'><i className="fa-regular fa-eye"></i> Ver Producto</Link>
                    <Link to={'/editar/1'} className='rounded px-5 py-1 border border-black text-sm duration-300 hover:bg-black hover:text-white'><i className="fa-light fa-pen"></i> Editar Producto</Link>
                  </div>
                </td>
              </tr>

            </tbody>

          </table>
      </div>

      <div className='w-fit mx-auto flex items-center gap-4 mt-20'>
        <Link className='bg-blue-500/90 p-5 rounded-full w-1 h-1 flex items-center justify-center text-white'><i className="fa-solid fa-arrow-left"></i></Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-blue-500/90 hover:text-white'>1</Link>
        <Link className='bg-blue-500/90 p-5 rounded-full w-1 h-1 flex items-center justify-center text-white'>2</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-blue-500/90 hover:text-white'>3</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-blue-500/90 hover:text-white'>...</Link>
        <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-blue-500/90 hover:text-white'>10</Link>
        <Link className='bg-blue-500/90 p-5 rounded-full w-1 h-1 flex items-center justify-center text-white'><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}
