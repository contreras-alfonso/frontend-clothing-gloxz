import React from 'react'

export const Filter = () => {
  return (
    <div className='w-72 py-10'>
            
        <h2 className='py-3 text-2xl  font-bold'>Filter</h2>
        <hr className='w-full border-slate-200'/>
        <div className='space-y-4 py-5 px-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium'>Marca</h2>
                <i class="fa-sharp fa-solid fa-chevron-down text-sm"></i>
            </div>
            <ul className='flex flex-col gap-2 text-gray-700'>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>Adidas</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>Chloe</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>Kendo</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>Nike</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>Adidas</span></li>
            </ul>
        </div>

        <hr className='w-full border-slate-200'/>

        <div className='space-y-4 py-5 px-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium'>Price</h2>
                <i class="fa-sharp fa-solid fa-chevron-down text-sm"></i>
            </div>
            <ul className='flex flex-col gap-2 text-gray-700'>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>S/ 10.00 - S/49.00</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>S/ 10.00 - S/49.00</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>S/ 10.00 - S/49.00</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>S/ 10.00 - S/49.00</span></li>
                <li className='flex gap-2'><input type="checkbox"  className='border-gray-100 '/><span>S/ 10.00 - S/49.00</span></li>
            </ul>
        </div>

        <hr className='w-full border-slate-200'/>

        <div className='space-y-4 py-5 px-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium'>Size</h2>
                <i class="fa-sharp fa-solid fa-chevron-down text-sm"></i>
            </div>

            <div className='flex gap-2 text-sm'>
                    <button className='py-1 px-1 border-[1px] border-gray-600 rounded w-10'>XS</button>
                    <button className='py-1 px-1 border-[1px] border-gray-600 rounded w-10'>S</button>
                    <button className='py-1 px-1 border-[1px] border-gray-600 rounded w-10'>M</button>
                    <button className='py-1 px-1 border-[1px] border-gray-600 rounded w-10'>L</button>
                    <button className='py-1 px-1 border-[1px] border-gray-600 rounded w-10'>XL</button>
                </div>
        
        </div>

    </div>
  )
}
