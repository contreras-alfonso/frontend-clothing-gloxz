import React from 'react'
import { CardClothes } from '../components/CardClothes'
import { Filter } from '../components/Filter'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
    <div className=''>
        <div className='mt-20 h-96 relative flex flex-col justify-center'>

            <div className='z-30 relative flex flex-col justify-center w-11/12 mx-auto'>
                <h1 className='font-black text-4xl'>Shop</h1>
                <div className='flex flex-row gap-3 py-5'>
                        <button className='text-sm'>Home</button>
                        <span><i className="fa-light fa-angle-right text-slate-500 text-sm"></i></span>
                        <button className='text-sm'>Shop</button>

                </div>
            </div>

            <div className='absolute top-0 bottom-0 right-0 left-0'>
                <img src="/images/shop_banner.png" className='object-center object-cover h-full w-full relative' alt="" />
            </div>

        </div>

        <div className='w-11/12 flex mx-auto'>

        

      <Filter/>

        <div className='py-10'>

            <h2 className='text-gray-700 text-sm text-end'>Mostrando 9 de 18 products</h2>

            <div className='w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-w-[250px] py-10'>
            
                <CardClothes/>
                <CardClothes/>
                <CardClothes/>
                <CardClothes/>
                <CardClothes/>
                <CardClothes/>
                <CardClothes/>
                <CardClothes/>
            
            </div>

            <div className='w-fit mx-auto flex items-center gap-4 mt-20'>
                <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'><i className="fa-solid fa-arrow-left"></i></Link>
                <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>1</Link>
                <Link className='bg-black p-5 rounded-full w-1 h-1 flex items-center justify-center text-white'>2</Link>
                <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>3</Link>
                <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>...</Link>
                <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'>10</Link>
                <Link className='p-5 rounded-full w-1 h-1 flex items-center justify-center hover:bg-black hover:text-white'><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
            </div>

        </div>

        </div>

        
    </div>
  )
}
