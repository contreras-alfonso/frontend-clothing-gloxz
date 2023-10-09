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

    <div className='flex justify-between mb-4 bg-white py-5 px-5 rounded-xl shadow-lg'>
        <div className='flex items-center gap-3'>
          <h1 className='text-3xl font-black text-color-principal'>Hombres</h1>
          <h2 className='font-medium text-color-principal'><i className="fa-regular fa-tags "></i> Nuevo Producto - Pantalón</h2>
        </div>

          <div className='flex items-center gap-3'>
            <div className={`${!open && 'scale-0'}`}>
                <h2 className='text-xs text-gray-500 uppercase'>ADMINISTRADOR</h2>
                <p className=' text-sm text-color-principal font-bold'>Alfonso Contreras</p>
            </div>
            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="qwewq" />
          </div>

      </div>

        <form onSubmit={hadnleSubmit} action="">
          <FormAgregarProducto values={values} handleChange={handleChange}/>
          
          <SubidaImagen title={'2. Selecciona las imagenes que solo contienen el producto.'} selectedImages={selectedImagesProducto} setSelectedImages={setSelectedImagesProducto} onSelectFile={onSelectFileProducto}/>

           <SubidaImagen title={'3. Selecciona las imagenes que solo contienen el modelo del producto.'} selectedImages={selectedImagesModelo} setSelectedImages={setSelectedImagesModelo} onSelectFile={onSelectFileModelo}/>

          <button type='submit' className='w-fit rounded-xl py-3 px-5 border border-dashed border-color-principal text-color-principal duration-300 text-sm bg-color-principal text-white'>Agregar Producto</button>
        </form>

    </div>
  )
}
