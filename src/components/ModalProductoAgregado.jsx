import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ElementoCarrito } from './ElementoCarrito'

export default function ModalProductoAgregado({ modalProductoAgregado,setModalProductoAgregado }) {

  function closeModal() {
    setModalProductoAgregado(false)
  }

  function openModal() {
    setModalProductoAgregado(true)
  }

  return (
    <>

      <Transition appear show={modalProductoAgregado} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-1/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-medium leading-6 text-gray-900"
                  >
                      <div className='flex justify-between'>
                        <h1><i className="fa-sharp fa-regular fa-circle-check text-emerald-500"></i> Lo que llevas en tu carro</h1>
                        <button className='focus:outline-none' onClick={closeModal}><i className="fa-solid fa-xmark text-gray-500"></i></button>
                      </div>

                  </Dialog.Title>

                    <div className='flex justify-between items-center border-y-[1px] border-slate-200 py-2 my-4'>


                        <div className=' flex gap-5 items-center'>
                            <img className='w-20' src="/images/sp.png" alt="q" />
                            <div className='flex flex-col gap-2'>
                                <h2 className='font-medium text-sm'>Ball Crew Shirt</h2>
                                <p className='text-xs'>Color: <span className='font-semibold '>Navy</span> </p>
                                <p className='text-xs'>Talla: <span className='font-semibold'>L</span> </p>
                            </div>
                        </div>

                        <div>
                            <span className='text-base font-base text-black'>$24.00</span>
                        </div>

                        <div className='flex gap-4 items-center'>
                                <button className='w-5 h-5 p-[15px] bg-slate-200 border border-none rounded flex items-center justify-center'>-</button>
                                <span>4</span>
                                <button className='w-5 h-5 p-[15px] bg-slate-200 border border-none rounded flex items-center justify-center'>+</button>
                        </div>

                    </div>

                    <div className='flex justify-end'>
                            <button className='w-fit rounded border-black border-[1px] py-3 px-10 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black text-xs'>Ir al carro</button>
                    </div>



                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
