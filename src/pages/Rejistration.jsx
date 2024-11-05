import React from 'react'
import { RegFrom } from '../Component/RegFrom'
import side from '../assets/images/side.jpg'
import Lottie from "lottie-react";
import regAni from '../Animation/regAni.json'
import { ToastContainer, toast } from 'react-toastify';

export const Rejistration = () => {
  return (
    <>
    <ToastContainer/>
   <div className='w-full h-screen flex items-center justify-center text-white back-img'>
    <div className='w-2/4 bg-slate-600 shadow-md rounded-md p-2 flex items-center gap-x-2 justify-between'>


    <div className="row RegisRes">
    <div className='w-[48%] col-lg-6 Registra '>
      <Lottie animationData={regAni} loop={true} />
      </div>

    <div className='w-[48%] col-lg-6 Registra '>
        <RegFrom toast={toast} />
    </div>
    </div>

    </div>

   </div>
    </>
  )
}
