import React from 'react'
import { ElementoCarrito } from '../components/ElementoCarrito'

export const Carrito = () => {
  return (
    <div className='w-10/12 mx-auto'>
        <div className='mt-40 flex flex-row gap-3'>
            <button>Home</button>
            <span><i class="fa-light fa-angle-right text-slate-500 text-sm"></i></span>
            <button className='text-slate-500'>Tu carrito</button>
        </div>
{/* aplicar flex a carrito y resumen */}
        <div className='flex gap-10'>
            <div className='w-2/3'>
                <div className='flex justify-between py-5'>
                    <h1 className='text-2xl font-bold'>Tu carrito</h1>
                    <p className='font-semibold text-xl'>2 items</p>
                </div>
                
                <div className=''>
                    <ElementoCarrito/>
                    <ElementoCarrito/>
                </div>
            </div>

            <div className='w-1/3'>
                <div className='flex flex-col py-5 gap-5'>
                    <h1 className='text-2xl font-bold'>Resumen de Pedido</h1>
                    <div className='border-[1px] border-slate-200'>
                        <div className='flex justify-between border-b-[1px] border-slate-200 p-5'>
                            <p className='text-xl text-slate-600 font-medium'>Subtotal</p>
                            <span className='text-xl font-medium'>$59.00</span>
                        </div>
                        <div className='border-b-[1px] border-slate-200 p-5 flex flex-col gap-2'>
                            <p className='text-lg font-medium uppercase'>Shipping</p>
                            <p>Flat rate: $50.00</p>
                            <p>Local pickup: $60.00</p>
                            <p className='text-slate-500'>Shipping options will be updated during checkout.</p>
                            <button className='hover:text-rose-600'>Calculate shipping <i class="fa-regular fa-location-dot"></i></button>
                        </div>

                        <div className='flex flex-col p-5 gap-5'>
                            <div className='flex justify-between'>
                                <p className='text-xl text-slate-600 font-medium'>Total</p>
                                <span className='text-xl font-medium'>$109.00</span>
                            </div>
                            
                            <button className='w-full rounded border-black border-[1px] py-3 px-10 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black '>Comprar ahora</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
