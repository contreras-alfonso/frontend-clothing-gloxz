import React from 'react'
import { Link } from 'react-router-dom'
import { CardClothes } from '../components/CardClothes'

export const Index = () => {
  return (

    <>
      <div className="bg-black h-screen  text-center overflow-hidden relative flex flex-col items-center justify-center">

          <div className='z-30 relative flex flex-col items-center justify-center gap-10'>
              <div className='space-y-2'>
                  <h1 className='text-white  text-9xl font-black'><span className=''>30%</span> OFF</h1>
                  <p className='text-xl text-white'>For wherever summer takes you.</p>
              </div>
              <Link to={'/shop'} className='w-fit rounded border-white bg-white py-3 px-10 transition-all duration-300 hover:bg-black hover:text-white'>Comprar ahora</Link>
              
          </div>

          <div className='absolute top-0 bottom-0 right-0 left-0 w-screen z-10 h-full'>
              {/* <img className='object-center absolute z-10 h-full' src="/images/banner.png" alt="banner"/> */}
              <video className='object-center object-cover h-full w-full relative' src="/videos/banner3.mp4" autoPlay={true} muted loop={true}></video>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/60"></div>
          </div>


      </div>

      <div className='py-14 flex flex-col items-center'>
        <h1 className='text-center font-bold text-3xl'>Best sellers</h1>
        <div className='mx-auto flex flex-row gap-10 w-fit pt-7'>
          <button className='text-base font-semibold text-gray-500 hover:text-amber-700/70'>Hombres</button>
          <button className='text-base font-semibold text-amber-700/70 hover:text-amber-700/70'>Mujeres</button>
          <button className='text-base font-semibold text-gray-500 hover:text-amber-700/70'>Niños</button>
        </div>
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
        <button className='w-fit rounded border-[1px] border-black bg-transparent py-3 px-10 transition-all duration-300 hover:bg-black hover:text-white my-10'>Explorar más</button>
      </div>

      <div className='bg-black h-screen overflow-hidden relative flex flex-col justify-center'>

        <div className='px-72 z-30 relative flex flex-col gap-10'>
              <div className='space-y-2'>
                  <p className='text-lg text-black uppercase'>Summer on sale</p>
                  <h1 className='text-black  text-6xl font-semibold'><span className=''>30%</span> OFF</h1>
                  <h2 className='text-black  text-6xl font-semibold uppercase'>New Arrival</h2>
              </div>
              <button className='w-fit rounded border-black border-[1px] py-3 px-10 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black '>Comprar ahora</button>
              
        </div>

        <div className='absolute top-0 bottom-0 right-0 left-0 w-screen z-10 h-full'>
            <img className='object-center object-cover absolute z-10 h-full w-ful' src="/images/banner-2.png" alt="banner"/>
        </div>
      </div>
    </>
    
  )
}
