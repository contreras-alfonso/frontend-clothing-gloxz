import React from 'react'

export const TitleSeccion = ({seccion,subseccion}) => {
  return (
    
    <div className='flex justify-between mb-4 bg-white py-5 px-5 rounded-xl shadow-lg'>
        <div className='flex items-center gap-3'>
          <h1 className='text-3xl font-black text-color-principal'>{seccion}</h1>
          <h2 className='font-medium text-color-principal'><i className="fa-regular fa-tags "></i>{subseccion}</h2>
        </div>

          <div className='flex items-center gap-3'>
            <div className={`${!open && 'scale-0'}`}>
                <h2 className='text-xs text-gray-500 uppercase'>ADMINISTRADOR</h2>
                <p className=' text-sm text-color-principal font-bold'>Alfonso Contreras</p>
            </div>
            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="qwewq" />
          </div>

    </div>
  )
}
