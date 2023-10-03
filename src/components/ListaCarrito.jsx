import React from 'react'
import { ElementoCarrito } from './ElementoCarrito'
import { Link } from 'react-router-dom';

const ListaCarrito = ({ listCart,setListCart }) => {

    const cambiarEstadoState = () => {
        setListCart(!listCart);
    }


  return (
    <div>
        <div onClick={cambiarEstadoState} className={`h-screen bg-black/80 cursor-pointer fixed bottom-0 top-0 z-40 ${listCart ? 'w-full' : 'w-0'}`}>

        </div>
        <div className={`overflow-y-auto bg-white transition-all duration-75 h-screen fixed z-40 bottom-0 top-0 right-0 cursor-default ${listCart ? 'px-5 w-[500px]' : 'w-0'}`}>
            <div className={`transition-all duration-1000 ${listCart ? 'contents' : 'hidden'}`}>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-semibold my-5'>Your Cart (2)</h1>
                    <button onClick={cambiarEstadoState}><i class="fa-solid fa-circle-xmark text-2xl"></i></button>
                </div>
                <p className='my-3'>Free Shippingon orders over $200.00</p>
                <ElementoCarrito/>
                <ElementoCarrito/>

                <div className='bg-red-600 py-2 text-white text-center'>
                    <p><i class="fa-duotone fa-fire"></i> Checkout now 09:14 before they’reGONE!</p>
                </div>
                <div className='flex justify-between py-7'>
                    <p className=''>Subtotal</p>
                    <span className='font-bold text-black text-lg'>$84.00</span>
                </div>
                <div className='flex justify-between gap-3'>
                    <Link onClick={cambiarEstadoState} to={'/carrito'} className='text-center w-1/2 rounded border-[1px] border-black bg-transparent py-3 px-10 transition-all duration-300 hover:bg-black hover:text-white'>View cart</Link>
                    <button className='w-1/2 rounded border-black border-[1px] py-3 px-10 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black '>Check Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListaCarrito