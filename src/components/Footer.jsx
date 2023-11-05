import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className='w-3/4 mx-auto flex flex-row justify-between gap-5 py-10 text-sm'>
            <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>About shop</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>contrerasalfonso.lino@gmail.com</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>Company</h2>
                <a href="#">About us</a>
                <a href="#">Careers</a>
                <a href="#">Store Locator</a>
                <a href="#">Contact Us</a>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>Customer Care</h2>
                <a href="#">Size Guide</a>
                <a href="#">Help & FAQs</a>
                <a href="#">Return My Order</a>
                <a href="#">Refer a Friend</a>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>Newsletter</h2>
                <p>Sign up now to get first update about our new collection.</p>
                <div className='border-b-[1px] border-black flex flex-row gap-3 w-fit p-3'>
                    <input type="text" placeholder='Enter your email' className='focus:outline-none focus:border-transparent' />
                    <button className='font-semibold py-2 px-5 transition-all duration-300 hover:bg-black rounded hover:text-white '>Subscribe</button>
                </div>
                
            </div>
        

        </div>
        <hr className="border-t border-gray-200 my-4"/>
        <div className='w-3/4 mx-auto flex flex-row justify-between py-10'>
            <p className='text-gray-500'>© 2023 Lino All rights reserved.</p>
            <div className='flex flex-row gap-5'>
                <a href="#"><i className="fa-brands fa-facebook text-black text-xl"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter text-black text-xl"></i></a>
                <a href="#"><i className="fa-brands fa-square-instagram text-black text-xl"></i></a>
            </div>
        </div>
    </footer>
  )
}
