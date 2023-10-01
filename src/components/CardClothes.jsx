import React from 'react'

export const CardClothes = () => {
  return (
    <div className='flex flex-col gap-5 py-10'>
        <img src="/images/product1.png" alt="ropa" />
        <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Lace Shirt Cut ll</h2>
            <p className='text-slate-500'>$16.00</p>
            <div className='flex gap-2'>
                <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-blue-700'></button>
                <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-gray-500'></button>
                <button className='h-5 w-5 rounded-full border-[1px] border-slate-300 bg-amber-700'></button>
            </div>
        </div>

    </div>
  )
}
