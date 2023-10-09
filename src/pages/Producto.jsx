import React from 'react'
import { useState } from 'react'
import ModalProductoAgregado from '../components/ModalProductoAgregado';

export const Producto = () => {

    const [modalProductoAgregado,setModalProductoAgregado] = useState(false);

  return (
      <>
        <div className='w-10/12 mx-auto'>
            <div className=' mt-24 flex flex-row gap-3 py-5'>
                <button className='text-sm'>Home</button>
                <span><i className="fa-light fa-angle-right text-slate-500 text-sm"></i></span>
                <button className='text-sm'>Shop</button>
                <span><i className="fa-light fa-angle-right text-slate-500 text-sm"></i></span>
                <button className='text-sm'>Women</button>
                <span><i className="fa-light fa-angle-right text-slate-500 text-sm"></i></span>
                <button className='text-sm text-slate-500'>Summer Stripes Shorts</button>
            </div>

            <div className='flex gap-10 py-5'>
                <div className='w-1/2 '>
                    <img className='w-4/5 h-4/5 mx-auto' src="https://falabella.scene7.com/is/image/FalabellaPE/882845642_2?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70" alt="image" />
                </div>
                <div className='w-1/2 space-y-3'>
                    <h2 className='text-sm font-medium'><span className='text-red-500'><i className="fa-regular fa-eye"></i> 24 guests</span> viewing this product</h2>
                    <h1 className='font-semibold text-3xl '>Summer Stripes Shorts</h1>
                    <p className='text-2xl font-medium'>$15.00 <span className='line-through text-gray-500'>$25.00</span></p>
                    <p className='text-gray-600'>The shorts are made from soft organic cotton. They have an elasticated waistband with an internal drawstring and side pockets.</p>
                    <p>Color: <span>Navy</span></p>
                    <div className='flex gap-2 '>
                        <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-blue-700'></button>
                        <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-gray-500'></button>
                        <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-amber-700'></button>
                    </div>
                    <p>Size</p>
                    <div className='flex gap-2'>
                        <button className='py-2 px-2 border-[1px] border-gray-600 rounded w-10'>XS</button>
                        <button className='py-2 px-2 border-[1px] border-gray-600 rounded w-10'>S</button>
                        <button className='py-2 px-2 border-[1px] border-gray-600 rounded w-10'>M</button>
                        <button className='py-2 px-2 border-[1px] border-gray-600 rounded w-10'>L</button>
                        <button className='py-2 px-2 border-[1px] border-gray-600 rounded w-10'>XL</button>
                    </div>
                    <p>Quantity</p>
                    <div className='flex gap-2'>
                        <div className='flex items-center gap-4 border-[1px] border-slate-200 w-fit'>
                                <button className='px-5'><i className="fa-solid fa-minus"></i></button>
                                <span className=''>4</span>
                                <button className='px-5'><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <button onClick={()=>{setModalProductoAgregado(!modalProductoAgregado)}} className='w-fit rounded border-black border-[1px] py-3 px-10 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black text-sm'>Add to cart</button>
                        <button className='w-fit rounded hover:border-black border-amber-700/70 border-[1px] py-3 px-10 transition-all duration-300 bg-amber-700/70 text-white hover:bg-white hover:text-black text-sm'>Buy Now</button>
                        <button className='ml-3'><i className="fa-regular fa-heart text-2xl"></i></button>
                    </div>
                    <hr className='border-t-[1px] border-slate-200 py-2'/>
                    <p className='text-gray-600'>SKU: <span className='text-black'>C66R8B47MP</span></p>
                    <p className='text-gray-600'>Categories: <span className='text-black'>Dress,Pants</span></p>
                    <p className='text-gray-600'>Tags: <span className='text-black'>fashion,shoes,women</span></p>
                </div>
            </div>
        </div>
        <ModalProductoAgregado modalProductoAgregado={modalProductoAgregado} setModalProductoAgregado={setModalProductoAgregado}/>
    </>
  )
}
