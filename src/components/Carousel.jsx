import React, { useEffect, useState } from 'react'

export const Carousel = ({slides}) => {

    const [curr,setCurr] = useState(0)

    const prev = () => {
        setCurr(curr=>curr === 0 ? slides.length-1 : curr-1);
    }

    const next = () => {
        setCurr(curr=>curr === slides.length-1 ? 0 : curr+1);
    }


  return (
    <div className='max-w-lg mx-auto overflow-hidden relative'>
        <div className='h-full flex transition-transform ease-out duration-500 ' style={{transform: `translateX(-${curr*100}%)`}}>
            {slides.map(e=>{
               return <img className='' src={e} alt={e} />
            })}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='flex items-center justify-center h-1 w-1 p-5  bg-slate-100 rounded-full'><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={next} className='flex items-center justify-center h-1 w-1 p-5  bg-slate-100 rounded-full'><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_,i)=>(
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr===i ? 'p-2' : "bg-opacity-50"}`}>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
