import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalLogin({modalLogin, setModalLogin}) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setModalLogin(false)
  }

  function openModal() {
    setModalLogin(true)
  }

  return (
    <>

      <Transition appear show={modalLogin} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-80" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white px-8  py-10 text-left align-middle shadow-xl transition-all">
                    <div className='flex flex-col gap-10'>
                        <Dialog.Title
                            as="h3"
                            className="text-xl font-bold leading-6 text-gray-900"
                        >
                            Login
                        </Dialog.Title>
                        <div className='flex flex-col gap-5'>
                            <input className='p-3 border-[1px] border-slate-200 focus:outline-none' type="text" placeholder='Email'/>
                            <input className='p-3 border-[1px] border-slate-200 focus:outline-none' type="password" placeholder='Password'/>
                        </div>

                        <div className=''>
                            <button className='w-full rounded border-black border-[1px] py-3 px-10 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black '>Iniciar sesión</button>
                        </div>
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
