import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { useImage } from '../../hooks/useImage';
import { SubidaImagen } from '../../components/SubidaImagen';
import { FormAgregarProducto } from '../../components/FormAgregarProducto';
import { TitleSeccion } from '../../components/TitleSeccion';

export const AgregarPantalonHombres = () => {


    const hadnleSubmit = async (e) => {
        e.preventDefault();
        // if(Object.values(values).some(e=>e === '')){
        //    //mostrar un error
        // }
        //hacer el fetch hacia algo :D
        const url = `http://localhost:4000/api/productos/nuevo-producto`;
        const formData = new FormData();

        colors.map(color=>{
          colorProps[color].fileList.map(e=>{
            formData.append(`images${color}`,e);
          })
        })

        formData.append('marca',values.marca);
        formData.append('nombre',values.nombre);
        formData.append('descripcion',values.descripcion);
        formData.append('precio',values.precio);
        formData.append('sku',values.sku);
        formData.append('stock',values.stock);
        formData.append('genero','Hombre');
        formData.append('tipo','Casaca');

        const response = await fetch(url,{
          method:'POST',
          body: formData,
        })

        const data = await response.json();

        console.log(data);
        
    }

    const {values, handleChange} = useForm({marca:'',nombre:'',descripcion:'',precio:'',sku:'',stock:''});

    

    const colors = ["Verde", "Marron", "Azul", "Beige", "Gris", "Blanco", "Rojo", "Amarillo"];

    const colorProps = {};

    colors.forEach((color) => {
      const {
        selectedImages,
        setSelectedImages,
        onSelectFile,
        fileList,
      } = useImage([]);

      colorProps[color] = {
        selectedImages,
        setSelectedImages,
        onSelectFile,
        fileList,
      };
    });


  return (
    <div className='overflow-y-auto'>

        <TitleSeccion seccion={'Hombres'} subseccion={'Nuevo Producto - Pantalón'}/>
        <form onSubmit={hadnleSubmit} action="">

          <FormAgregarProducto values={values} handleChange={handleChange}/>

          {colors.map((color,index) => (
            <SubidaImagen
              key={color}
              title={`${index+2}. Selecciona las imágenes del color ${color}`}
              selectedImages={colorProps[color].selectedImages}
              setSelectedImages={colorProps[color].setSelectedImages}
              onSelectFile={colorProps[color].onSelectFile}
            />
          ))}
          
          <div className='flex justify-end'>
            <button type='submit' className='w-full rounded-full py-4 px-10   duration-300 text-sm bg-color-principal hover:bg-color-principal/80 text-white'>Agregar Producto</button>
          </div>

        </form>

    </div>
  )
}
