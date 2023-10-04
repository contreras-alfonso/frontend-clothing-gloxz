import React from 'react'

export const ElementoFavorito = () => {
  return (
    <div className='border-t-[1px] border-slate-200'>
        <div className='flex justify-between py-3 px-5'>

            <div className='flex flex-row items-center gap-10'>
                <img className='w-32' src="/images/sp2.png" alt="q" />
                <div className='flex flex-col gap-4'>
                    <a href='/producto/1' className='font-semibold hover:text-amber-700/70 transition-all duration-300 '>Ball Crew Shirt</a>
                    <div className='flex gap-5'>
                        <p className='text-sm'>Color: <span className='font-semibold'>Navy</span> </p>
                        <p className='text-sm'>Talla: <span className='font-semibold'>L</span> </p>
                    </div>
                    <button className='w-fit rounded border-black border-[1px] py-2 px-5 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black text-xs'>Add to cart</button>
                </div>
            </div>

            <div className='flex flex-col justify-between items-end pb-5'>
                <button><i className="fa-solid fa-xmark"></i></button>
                <span className='text-base font-base text-black'>$24.00</span>
            </div>
            

        </div>
    </div>
  )
}
