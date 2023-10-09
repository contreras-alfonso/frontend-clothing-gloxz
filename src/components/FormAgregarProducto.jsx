import React from 'react'

export const FormAgregarProducto = ({values,handleChange}) => {
  return (
    <div className=''>
        <div className='w-1/2 flex flex-col mb-10 gap-3 mx-auto shadow-lg p-10 py-14 rounded-lg'>
            {/* <h2 className='font-black text-lg  mb-3'>Información General</h2> */}

            <label className=' text-sm text-color-principal font-semibold' htmlFor="nombre">Nombre del producto</label>
            <input value={values.nombre} onChange={handleChange} className='border p-2 rounded focus:outline-none' id='nombre' name='nombre' type="text"/>

            <label  className=' text-sm text-color-principal font-semibold' htmlFor="descripcion">Descripción</label>
            <textarea value={values.descripcion} onChange={handleChange} className='border p-2 rounded resize-none focus:outline-none' id="descripcion" name='descripcion' cols="30" rows="5"></textarea>
            
            <div className='flex gap-5'>
                <div className='w-1/3 space-y-2'>
                    <label className='block  text-sm text-color-principal font-semibold' htmlFor="precio">Precio S/</label>
                    <input value={values.precio} onChange={handleChange} className='border w-full p-2 rounded focus:outline-none' id='precio' name='precio' type="text"/>
                </div>

                <div className='w-1/3 space-y-2'>
                    <label className='block  text-sm text-color-principal font-semibold' htmlFor="sku">SKU</label>
                    <input value={values.sku} onChange={handleChange} className='border w-full p-2 rounded focus:outline-none' id='sku' name='sku' type="text"/>
                </div>

                <div className='w-1/3 space-y-2'>
                    <label className='block  text-sm text-color-principal font-semibold' htmlFor="stock">Stock</label>
                    <input value={values.stock} onChange={handleChange} className='border w-full p-2 rounded focus:outline-none' id='stock' name='stock' type="text"/>
                </div>
            </div>

            {/* <button onClick={hadnleSubmit} className='w-fit my-3 py-4 px-7 rounded-full duration-300  bg-color-principal text-white text-[13px] font-semibold hover:bg-color-hover '>Start hiring today</button> */}
        </div>
    </div>
  )
}
