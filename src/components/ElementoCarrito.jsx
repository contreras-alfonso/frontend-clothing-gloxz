import React from 'react'

export const ElementoCarrito = () => {
  return (
    <div className='border-t-[1px] border-slate-200'>
        <div className='flex justify-between py-3 px-5'>

            <div className='flex flex-row items-center gap-10'>
                <img className='w-32' src="/images/product1-hover.png" alt="q" />
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold'>Ball Crew Shirt</h2>
                    <div className='flex gap-5'>
                        <p>Color: <span className='font-semibold'>Navy</span> </p>
                        <p>Talla: <span className='font-semibold'>L</span> </p>
                    </div>
                    <div className='flex gap-4 border-[1px] border-slate-200 w-fit px-3 py-1'>
                            <button><i className="fa-light fa-minus"></i></button>
                            <span>4</span>
                            <button><i className="fa-light fa-plus"></i></button>
                    </div>
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
