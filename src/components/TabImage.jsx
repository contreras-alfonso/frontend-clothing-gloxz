import React, { useState } from 'react'
import { SubidaImagen } from './SubidaImagen';

export const TabImage = ({colors,colorProps}) => {

    console.log(colorProps)
  
    const [toggle,setToggle] = useState("Verde");
    // const colors = ["Verde", "Marron", "Azul", "Beige", "Gris", "Blanco", "Rojo", "Amarillo"];
    const colores = [
        {
            color:"Verde",
            colorBG: ""
        }
    ]
  return (
    <div className=''>
       
        <ul className='flex justify-center rounded-full bg-color-principal p-1 mb-5'>
        {
            colors.map(color=>{
                return (
                    <li key={crypto.randomUUID()} className={`w-1/3 flex items-center justify-center gap-2 rounded-full text-center cursor-pointer py-3 px-5 ${toggle==color ? 'bg-white text-black  shadow-xl' : 'bg-color-principal text-white hover:bg-color_principal_hover duration-500'}`} onClick={()=>{setToggle(color)}}>{color} <span className={`${Number(colorProps[color].selectedImages.length)>0 ? 'flex items-center justify-center rounded-full bg-red-500 text-white w-1 h-1 p-3 text-xs font-semibold' : 'hidden'}`}>{Number(colorProps[color].selectedImages.length)>0 ? colorProps[color].selectedImages.length : ''}</span></li>
                )
            })

        }
        </ul>

        {colors.map((color, index) => (
            <div key={crypto.randomUUID()} className={`w-full ${toggle===color ? 'inline-block' : 'hidden'}`}>

            <SubidaImagen
                        key={color}
                        selectedImages={colorProps[color]?.selectedImages}
                        setSelectedImages={colorProps[color]?.setSelectedImages}
                        onSelectFile={colorProps[color]?.onSelectFile}
            />

            </div>
        ))}
    </div>
  )
}
