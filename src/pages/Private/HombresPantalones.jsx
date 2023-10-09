import React from 'react'
import { Link } from 'react-router-dom'

export const HombresPantalones = () => {
  return (
    <div className=''>
      <div className='flex justify-between mb-4 bg-white py-5 px-5 rounded-xl shadow-lg'>
        <div className='flex items-center gap-3'>
          <h1 className='text-3xl font-black text-color-principal'>Hombres</h1>
          <h2 className='font-medium text-color-principal'><i className="fa-regular fa-tags "></i> Pantalones</h2>
        </div>

          <div className='flex items-center gap-3'>
            <div className={`${!open && 'scale-0'}`}>
                <h2 className='text-xs text-gray-500 uppercase'>ADMINISTRADOR</h2>
                <p className=' text-sm text-color-principal font-bold'>Alfonso Contreras</p>
            </div>
            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="qwewq" />
          </div>

      </div>


      <div className='mb-4 flex justify-between items-center bg-white py-4 px-5 rounded-xl shadow-lg'>
        <Link to={'/administration/hombres/nuevo-pantalon'} className='rounded-xl py-3 px-5 border border-dashed border-color-principal text-color-principal duration-300 text-sm hover:bg-color-principal hover:text-white'><i class="fa-solid fa-cloud-plus"></i> Nuevo Producto</Link>
        <div className='bg-color_bg px-4 py-1 rounded-xl flex gap-2 items-center text-black'>
          <button><i class="fa-solid fa-magnifying-glass text-color-principal"></i></button>
          <input className='p-2 text-sm focus:outline-none bg-transparent' type="text" placeholder='Search'/>
        </div>
      </div>


      <div className='bg-white rounded-xl py-10 px-5 shadow-lg'>
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

              <tr className='duration-300 hover:bg-color_principal_hover'>
                <td className='pl-4 py-2'>
                  <div className='flex items-center gap-3'>
                    <img className='w-20 pl-1 rounded' src="/images/product1.png" alt="w" />
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm font-medium'>Gaming Console</p>
                      <p className='text-sm text-gray-500'>52SD5F3</p>
                    </div>
                  </div>
                </td>
                <td className='text-gray-600 text-base pl-4'>36</td>
                <td className='pl-4'><div className='bg-red-50 py-1 px-3 rounded-md w-fit text-red-400 text-sm'>Sin Stock</div></td>
                <td className='text-gray-600 text-base pl-4'>$3.9k</td>
                <td className='pl-4'>
                  <div className='flex flex-col w-fit gap-2 mx-auto'>
                    <Link to={'/producto/1'} className='rounded-xl py-2 px-5 border border-dashed border-color-principal text-color-principal duration-300 text-sm hover:bg-color-principal hover:text-white text-center'><i className="fa-regular fa-eye"></i> Ver Producto</Link>
                    <Link to={'/editar/1'} className='rounded-xl py-2 px-5 border border-dashed border-color-principal text-color-principal duration-300 text-sm hover:bg-color-principal hover:text-white text-center'><i className="fa-light fa-pen"></i> Editar Producto</Link>
                  </div>
                </td>
              </tr>

              <tr className='duration-300 hover:bg-color_principal_hover'>
                <td className='pl-4 py-2'>
                  <div className='flex items-center gap-3'>
                    <img className='w-20 pl-1 rounded' src="/images/sp2.png" alt="w" />
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm font-medium'>Gaming Console</p>
                      <p className='text-sm text-gray-500'>52SD5F3</p>
                    </div>
                  </div>
                </td>
                <td className='text-gray-600 text-base pl-4'>36</td>
                <td className='pl-4'><div className='bg-red-50 py-1 px-3 rounded-md w-fit text-red-400 text-sm'>Sin Stock</div></td>
                <td className='text-gray-600 text-base pl-4'>$3.9k</td>
                <td className='pl-4'>
                  <div className='flex flex-col w-fit gap-2 mx-auto'>
                    <Link to={'/producto/1'} className='rounded-xl py-2 px-5 border border-dashed border-color-principal text-color-principal duration-300 text-sm hover:bg-color-principal hover:text-white text-center'><i className="fa-regular fa-eye"></i> Ver Producto</Link>
                    <Link to={'/editar/1'} className='rounded-xl py-2 px-5 border border-dashed border-color-principal text-color-principal duration-300 text-sm hover:bg-color-principal hover:text-white text-center'><i className="fa-light fa-pen"></i> Editar Producto</Link>
                  </div>
                </td>
              </tr>

              

            </tbody>

          </table>
      </div>

      <div className='shadow-lg mx-auto flex items-center justify-center gap-4 mt-20 bg-white rounded-xl py-5'>
        <Link className='p-5 text-gray-500 rounded-full w-1 h-1 flex items-center justify-center hover:bg-color-principal hover:text-white'><i className="fa-solid fa-arrow-left"></i></Link>
        <Link className='p-5 text-gray-500 rounded-full w-1 h-1 flex items-center justify-center hover:bg-color-principal hover:text-white'>1</Link>
        <Link className='bg-color-principal p-5  rounded-full w-1 h-1 flex items-center justify-center text-white'>2</Link>
        <Link className='p-5 text-gray-500  rounded-full w-1 h-1 flex items-center justify-center hover:bg-color-principal hover:text-white'>3</Link>
        <Link className='p-5 text-gray-500  rounded-full w-1 h-1 flex items-center justify-center hover:bg-color-principal hover:text-white'>...</Link>
        <Link className='p-5 text-gray-500  rounded-full w-1 h-1 flex items-center justify-center hover:bg-color-principal hover:text-white'>10</Link>
        <Link className='p-5 text-gray-500  rounded-full w-1 h-1 flex items-center justify-center hover:bg-color-principal hover:text-white'><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}
