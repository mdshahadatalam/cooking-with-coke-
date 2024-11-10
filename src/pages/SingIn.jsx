import Lottie from 'lottie-react'
import React from 'react'
import { SingInForm } from '../Component/RegFrom/SingIn'
import { toast, ToastContainer } from 'react-toastify'
import regAni from '../Animation/regAni.json'
import { Link } from 'react-router-dom'

export const SingIn = () => {
  return (
    <>

<ToastContainer/>
   <div className='w-full h-screen flex items-center justify-center text-white back-img'>
    <div className='w-2/4 bg-slate-600 shadow-md rounded-md p-2 flex items-center gap-x-2 justify-between'>


   <div className="row RegisRes">
   <div className='w-[48%] col-lg-6  Registra '>
      <Lottie animationData={regAni} loop={true} />
      </div>
    <div className='w-[48%] col-lg-6 Registra  '>
        <SingInForm toast={toast} />
    </div>
    <p className=' hover:underline text-center font-fontRegular text-xl font-bold tracking-wider back'>
      <Link to={'/'}> Back to Home </Link>
     </p>
   </div>

    </div>

   </div>
    
    </>
  )
}
