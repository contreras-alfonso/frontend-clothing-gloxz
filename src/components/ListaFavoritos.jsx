import React from 'react'
import { Link } from 'react-router-dom';
import { ElementoFavorito } from './ElementoFavorito';

const ListaFavoritos = ({ listFavorites,setListFavorites }) => {

    const cambiarEstadoState = () => {
        setListFavorites(!listFavorites);
    }


  return (
    <div>
        <div onClick={cambiarEstadoState} className={`h-screen bg-black/80 cursor-pointer fixed bottom-0 top-0 z-40 ${listFavorites ? 'w-full' : 'w-0'}`}>

        </div>
        <div className={`overflow-y-auto bg-white transition-all duration-300 h-screen fixed z-40 bottom-0 top-0 right-0 cursor-default ${listFavorites ? 'px-5 w-[500px]' : 'w-0'}`}>
            <div className={`transition-all duration-500 ${listFavorites ? '' : 'hidden'}`}>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-semibold my-5'>Your Wishlist (2)</h1>
                    <button onClick={cambiarEstadoState}><i className="fa-solid fa-circle-xmark text-2xl"></i></button>
                </div>
                <ElementoFavorito/>
                <ElementoFavorito/>

            </div>
        </div>
    </div>
  )
}

export default ListaFavoritos