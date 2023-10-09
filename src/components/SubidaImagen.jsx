import React from 'react'

export const SubidaImagen = ({title,selectedImages,setSelectedImages,onSelectFile}) => {
  return (
    <section className='bg-white p-10 shadow rounded-lg border-[1px] border-slate-100 mb-5'>
        <h2 className='font-light  mb-10 bg-color-principal text-white text-center w-fit p-2 px-5 text-sm rounded-lg'>{title}</h2>
        <div className='w-1/2 mx-auto'>
            
            {/* <p className='w-fit mx-auto text-color-principal text-sm rounded-full py-3 px-5 bg-color-amarillo-fuerte text-center mb-5'>{title}</p> */}
            <label className='mx-auto flex flex-col gap-2 justify-center items-center border-[2px] border-dotted border-slate-200 rounded cursor-pointer w-fit p-20 px-40 duration-300 hover:bg-color_principal_hover'>
                <p className='font-bold text-black'><i className="fa-solid fa-cloud-arrow-up text-color-principal text-5xl"></i></p>
                {/* <span className='text-black text-sm'>Selecciona las imagenes</span> */}
                <input className='hidden' type="file" name="images" id="images" onChange={onSelectFile} multiple accept='image/png , image/jpeg, image/webp'/>
            </label>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-3 mt-10'>
            {selectedImages && selectedImages.map((image,index)=>{
                return (
                    <div className='relative w-fit' key={image}>
                        <img className='rounded-md' src={image} width="300" alt="imagen" />
                        {/* <span className='text-gray-500 absolute top-2 left-2 font-bold w-1 h-1 p-3 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-xl text-sm'>{index+1}</span> */}
                        <button className='absolute top-3 right-3 w-1 h-1 p-3 bg-color-principal/80 rounded-full flex items-center justify-center  duration-300 text-white' onClick={()=>setSelectedImages(selectedImages.filter(e=>e!==image))}><i className="fa-sharp fa-solid fa-xmark"></i></button>
                    </div>
                )
            })}
        </div>

    </section>
  )
}
