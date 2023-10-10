import React from 'react'

export const FormAgregarProducto = ({values,handleChange}) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-10 mb-5'>
        {/* <h2 className='font-light text-sm mb-10 bg-color-principal text-white text-center w-fit p-2 px-5 rounded-lg'>1. Ingresa los datos del producto</h2> */}
        <div className=' w-1/2 flex flex-col gap-5 mx-auto  rounded-lg'>
            <input value={values.marca} onChange={handleChange} className='border p-4 rounded-lg placeholder: focus:outline-none  text-sm bg-color_bg' id='marca' name='marca' type="text" placeholder='Ingresa la marca del prodcuto'/>
            {/* <h2 className='font-black text-lg  mb-3'>Información General</h2> */}

            {/* <label className=' text-sm text-color-principal font-semibold' htmlFor="nombre">Nombre del producto</label> */}
            <input value={values.nombre} onChange={handleChange} className='border p-4 rounded-lg placeholder: focus:outline-none  text-sm bg-color_bg' id='nombre' name='nombre' type="text" placeholder='Ingresa el nombre del producto'/>

            {/* <label  className=' text-sm text-color-principal font-semibold' htmlFor="descripcion">Descripción</label> */}
            <textarea value={values.descripcion} onChange={handleChange} className='border p-4 rounded-lg resize-none focus:outline-none text-sm bg-color_bg' id="descripcion" name='descripcion' cols="30" rows="5" placeholder='Ingresa la descripción del producto'></textarea>
            
            <div className='flex gap-5'>
                <div className='w-1/3 space-y-2'>
                    {/* <label className='block  text-sm text-color-principal font-semibold' htmlFor="precio">Precio S/</label> */}
                    <input value={values.precio} onChange={handleChange} className='border w-full p-4 rounded-lg placeholder: focus:outline-none text-sm bg-color_bg' id='precio' name='precio' type="text" placeholder='Ingresa el precio'/>
                </div>

                <div className='w-1/3 space-y-2'>
                    {/* <label className='block  text-sm text-color-principal font-semibold' htmlFor="sku">SKU</label> */}
                    <input value={values.sku} onChange={handleChange} className='border w-full p-4 rounded-lg placeholder: focus:outline-none text-sm bg-color_bg' id='sku' name='sku' type="text" placeholder='Ingresa el SKU'/>
                </div>

                <div className='w-1/3 space-y-2'>
                    {/* <label className='block  text-sm text-color-principal font-semibold' htmlFor="stock">Stock</label> */}
                    <input value={values.stock} onChange={handleChange} className='border w-full p-4 rounded-lg placeholder: focus:outline-none text-sm bg-color_bg' id='stock' name='stock' type="text" placeholder='Ingresa el stock'/>
                </div>
            </div>

            {/* <button onClick={hadnleSubmit} className='w-fit my-3 py-4 px-7 rounded-lg placeholder: duration-300  bg-color-principal text-white text-[13px] font-semibold hover:bg-color-hover '>Start hiring today</button> */}
        </div>
    </div>
  )
}
