import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {

    const [open,setOpen] = useState(true);
    const [submenuOpen,setSubmenuOpen] = useState(false);
    const [submenuOpen2,setSubmenuOpen2] = useState(false);
    const [submenuOpen3,setSubmenuOpen3] = useState(false);

    const {pathname} = useLocation();

    console.log(pathname.split('/')[2])
    console.log(pathname.split('/')[3])

    const menus = [
        {
            id:crypto.randomUUID(),
            title:'Hombres',
            submenuState: submenuOpen,
            setSubmenuState: setSubmenuOpen,
            submenuItems:['Pantalones','Shorts','Shoes','Camisas'],
            icnonoImg: <i className="fa-solid fa-mars text-lg"></i>,
        },
        {
            id:crypto.randomUUID(),
            title:'Mujeres',
            submenuState: submenuOpen2,
            setSubmenuState: setSubmenuOpen2,
            submenuItems:['Faldas','Botas','Shoes','Pants'],
            icnonoImg: <i className="fa-solid fa-venus text-lg"></i>,
        },
        {
            id:crypto.randomUUID(),
            title:'Niños',
            submenuState: submenuOpen3,
            setSubmenuState: setSubmenuOpen3,
            submenuItems:['Juguetes','Zapatos','Shoes','Pants'],
            icnonoImg: <i className="fa-duotone fa-child text-lg"></i>,
        },
        {
            id:crypto.randomUUID(),
            title:'Accesorios',
            icnonoImg: <i className="fa-solid fa-gem text-lg"></i>,
        },
        
    ]

  return (

    <div className={`bg-color-principal h-screen text-white p-4 pt-8 relative duration-300 ${open ? 'w-80 ' : 'w-20'}`}>

        <button onClick={()=>{setOpen(!open)}} className='text-color-principal rounded-full bg-white text-black/80 p-4 w-1 h-1 flex items-center justify-center absolute -right-3 top-9 border border-gray-300'>{open ? <i className="fa-solid fa-chevron-left"></i> : <i className="fa-solid fa-chevron-right"></i>}</button>

        {/* <div className='flex items-center gap-3'>
            <i className={`fa-solid fa-shop block float-left duration-500 text-3xl mr-5 ${open && "rotate-[360deg]"}`}></i>
            <h1 className={`text-3xl font-bold ${!open && 'scale-0'}`}>Gloxz</h1>
            <img className='w-10 rounded-full' src="/images/logo.png" alt="" />
            <div className={`${!open && 'scale-0'}`}>
                <h2 className='text-xs text-gray-500 uppercase'>ADMINISTRADOR</h2>
                <p className='text-sm'>Alfonso Contreras</p>
            </div>
        </div> */}

        <ul className='pt-10'>

            {menus.map((menu)=>{return(
                <div key={menu.id}>
                    
                    {!menu?.submenuItems 
                    
                    ? 
                        <Link to={'/'} className='text-white text-sm flex items-center justify-center gap-4 cursor-pointer p-2 px-4 hover:bg-color_principal_hover hover:text-white rounded-lg mt-2'>
                            {menu.icnonoImg}
                            <span className={`text-sm flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                        </Link>
                    :
                    <>
                        <li onClick={menu?.submenuItems ? ()=>{menu.setSubmenuState(!menu.submenuState)} : ()=>{}} className={`text-white text-sm flex items-center justify-center gap-4 cursor-pointer p-2 px-6 hover:bg-color_principal_hover hover:text-white rounded-lg mt-2 ${pathname.split('/')[2]===menu.title.toLowerCase() && 'bg-color_principal_hover text-white'}`}>
                            {menu.icnonoImg}
                            <span className={`text-sm flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                            {menu?.submenuItems && (
                                <button className={`${!open && 'hidden'}`} onClick={()=>{menu.setSubmenuState(!menu.submenuState )}}>
                                    {menu.submenuState 
                                    ? <i className="fa-solid fa-chevron-up"></i> 
                                    : <i className="fa-sharp fa-solid fa-chevron-down"></i>
                                    }
                                </button>
                            )}

                        </li>

                        {menu.submenuItems && menu.submenuState && open && (
                            <ul className='mt-2'>
                                {menu.submenuItems.map((e,index)=>{return (
                                    <li key={index} className={`mt-1 text-white text-sm flex items-center gap-4 cursor-pointer p-2 px-5 hover:bg-gray-200/60 rounded ${pathname.split('/')[3]===e.toLowerCase() && 'bg-gray-200/60'}`}>{e}</li>
                                )})}

                            </ul>
                        )}
                    </> 
                    
                    }

                </div>
            )})
            }
        </ul>

    </div>
  )
}
