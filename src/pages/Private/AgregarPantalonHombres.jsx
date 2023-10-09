import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { useImage } from '../../hooks/useImage';
import { SubidaImagen } from '../../components/SubidaImagen';
import { FormAgregarProducto } from '../../components/FormAgregarProducto';

export const AgregarPantalonHombres = () => {

    const hadnleSubmit = async (e) => {
        e.preventDefault();
        // if(Object.values(values).some(e=>e === '')){
        //    //mostrar un error
        // }
        //hacer el fetch hacia algo :D
        const url = `http://localhost:4000/api/productos/nuevo-producto`;
        const formData = new FormData();

        fileListProducto.map(e=>{
          formData.append('producto',e);
        })

        fileListModelo.map(e=>{
          formData.append('modelo',e);
        })
    
        const response = await fetch(url,{
          method:'POST',
          body: formData,
        })
        
    }

    const {values, handleChange} = useForm({nombre:'',descripcion:'',precio:'',sku:'',stock:''});

    const {selectedImages:selectedImagesProducto,setSelectedImages:setSelectedImagesProducto,onSelectFile:onSelectFileProducto,fileList:fileListProducto} = useImage([]);
    const {selectedImages:selectedImagesModelo,setSelectedImages:setSelectedImagesModelo,onSelectFile:onSelectFileModelo,fileList:fileListModelo} = useImage([]);
    

  return (
    <div className='overflow-y-auto'>

        <div className='flex items-center mb-10 gap-3'>
            <h1 className='text-3xl font-black mb-3'>Hombres</h1>
            <h2 className='font-medium'><i className="fa-regular fa-tags"></i> Nuevo Producto - Pantalones</h2>
        </div>

        <form onSubmit={hadnleSubmit} action="">
          <FormAgregarProducto values={values} handleChange={handleChange}/>
          
          <SubidaImagen title={'Selecciona las imagenes que solo contienen el producto.'} selectedImages={selectedImagesProducto} setSelectedImages={setSelectedImagesProducto} onSelectFile={onSelectFileProducto}/>

           <SubidaImagen title={'Selecciona las imagenes que solo contienen el modelo del producto.'} selectedImages={selectedImagesModelo} setSelectedImages={setSelectedImagesModelo} onSelectFile={onSelectFileModelo}/>

          <button type='submit' className='w-fit my-3 py-4 px-7 rounded-full duration-300  bg-color-principal text-white text-[13px] font-semibold hover:bg-color-hover '>Start hiring today</button>
        </form>

    </div>
  )
}
