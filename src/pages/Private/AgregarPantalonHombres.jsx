import React, { useState } from 'react'

export const AgregarPantalonHombres = () => {

    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const seelctedFilesArray = Array.from(selectedFiles)
        const imagesArray = seelctedFilesArray.map(file=>{
            return URL.createObjectURL(file)
        })

        const previousImages = [...selectedImages].concat(imagesArray);

        setSelectedImages(previousImages);
    }

  return (
    <div>
        <div className='flex items-center mb-10 gap-3'>
            <h1 className='text-3xl font-black mb-3'>Hombres</h1>
            <h2 className='font-medium'><i className="fa-regular fa-tags"></i> Nuevo Producto - Pantalones</h2>
        </div>

        <div className='w-1/2 flex flex-col mb-10 gap-3 mx-auto'>
            <h2 className='font-black text-lg mb-3'>Información General</h2>
            <label className=' text-sm text-black' htmlFor="nombre">Nombre del producto</label>
            <input className='border p-2 rounded' id='nombre' type="text"/>
            <label  className=' text-sm text-black' htmlFor="descripcion">Descripción</label>
            <textarea className='border p-2 rounded resize-none' id="descripcion" cols="30" rows="5"></textarea>
            
            <div className='flex gap-5'>
                <div className='w-1/3 space-y-2'>
                    <label className='block  text-sm text-black' htmlFor="precio">Precio S/</label>
                    <input className='border w-full p-2 rounded' id='precio' type="text"/>
                </div>

                <div className='w-1/3 space-y-2'>
                    <label className='block  text-sm text-black' htmlFor="sku">SKU</label>
                    <input className='border w-full p-2 rounded' id='sku' type="text"/>
                </div>

                <div className='w-1/3 space-y-2'>
                    <label className='block  text-sm text-black' htmlFor="stock">Stock</label>
                    <input className='border w-full p-2 rounded' id='stock' type="text"/>
                </div>
            </div>

            <button className='my-3 border-[1px]  py-3 px-7 rounded duration-300 border-black  bg-black text-white text-sm hover:bg-white hover:text-black'>Agregar producto</button>
        </div>

        <section>
            <div className='w-1/2 mx-auto'>
                <h2 className='font-black text-lg mb-5'>Imagenes (Solo producto)</h2>
                <label className='mx-auto flex flex-col gap-2 justify-center items-center border-[2px] border-dotted border-slate-200 rounded cursor-pointer w-fit p-20 px-40 duration-300 hover:bg-slate-100'>
                    <p className='font-bold text-black'><i className="fa-solid fa-cloud-arrow-up text-blue-500 text-5xl"></i></p>
                    <span className='text-black text-sm'>Selecciona las imagenes</span>
                    <input className='hidden' type="file" name="images" onChange={onSelectFile} multiple accept='image/png , image/jpeg, image/webp'/>
                </label>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-3 mt-10'>
                {selectedImages && selectedImages.map((image,index)=>{
                    return (
                        <div className='relative w-fit' key={image}>
                            <img className='rounded-md' src={image} width="300" alt="imagen" />
                            {/* <span className='text-gray-500 absolute top-2 left-2 font-bold w-1 h-1 p-3 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-xl text-sm'>{index+1}</span> */}
                            <button className='absolute top-3 right-3 w-1 h-1 p-3 bg-black rounded-full flex items-center justify-center backdrop-blur-xl  duration-300 text-white' onClick={()=>setSelectedImages(selectedImages.filter(e=>e!==image))}><i className="fa-sharp fa-solid fa-xmark"></i></button>
                        </div>
                    )
                })}
            </div>

        </section>

        

    </div>
  )
}
