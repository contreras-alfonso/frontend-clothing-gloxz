import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalLogin from './ModalLogin';
import ListaCarrito from './ListaCarrito';
import ListaFavoritos from './ListaFavoritos';

export const Header = () => {

    const [modalLogin,setModalLogin] = useState(false);
    const [shadow,setShadow] = useState(false);
    const [listCart,setListCart] = useState(false);
    const [listFavorites,setListFavorites] = useState(false);

    const estadoModalLogin = () => {
        setModalLogin(!modalLogin);
    }

    window.addEventListener('scroll',()=>{
        if(scrollY>20){
            setShadow(true);
            return;
        }
        setShadow(false);
    })

  return (
    <>
        <header className={`bg-white fixed top-0 w-full z-40 ${shadow && 'shadow-lg'} transition-all duration-300 `}>
            <div className='w-11/12 mx-auto py-5 flex flex-row justify-between items-center '>
                <ul className='flex gap-5 flex-grow basis-0'>
                    <li><Link>Inicio</Link></li>
                    <li><Link>Tienda</Link></li>
                    <li><Link>Productos</Link></li>
                </ul>
                <div>
                    <h1 className='font-bold text-4xl'>Gloxz</h1>
                </div>

                <div className='flex gap-7 flex-grow justify-end basis-0'>

                    <button onClick={estadoModalLogin}><i className="fa-regular fa-user text-2xl"></i></button>

                    <div className='relative'>
                        <button onClick={()=>{setListFavorites(!listFavorites)}}><i className="fa-regular fa-heart text-2xl"></i></button>
                        <p className='text-sm h-6 w-6 rounded-full border-[1px] bg-black text-white flex justify-center items-center absolute -top-1 right-0 left-5'>5</p>
                    </div>

                    <div className='relative'>
                        <button onClick={()=>{setListCart(!listCart)}}><i className="far fa-shopping-bag text-2xl"></i></button>
                        <p className='text-sm h-6 w-6 rounded-full border-[1px] bg-black text-white flex justify-center items-center absolute -top-1 right-0 left-5'>2</p>
                    </div>

    
                </div>
            </div>

        </header>
        <ModalLogin modalLogin={modalLogin} setModalLogin={setModalLogin}/>
        <ListaCarrito listCart={listCart} setListCart={setListCart}/>
        <ListaFavoritos listFavorites={listFavorites} setListFavorites={setListFavorites}/>
    </>
  )
}
