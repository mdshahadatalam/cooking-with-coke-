
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { SyncLoader } from 'react-spinners';
import { SignIn } from '../../../Validation/Validation';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const SingInForm = () => {
  const [loading,setLoading] = useState(false)
  const auth = getAuth();

    const initialValues ={
      email:" ",
      password: "",
    }

    const formik = useFormik({
      initialValues,
      onSubmit: ()=>{
      SignInNewUser()
      },
      validationSchema:SignIn,
  })

  const SignInNewUser =()=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
  .then(() => {
    console.log("sign in");
    
  })
  .catch((error) => {
    console.log(error.message);
    
  });

  }
   
    
  return (
    <>
     <div className='text-black'>
        <h1 className='text-white py-3 font-fontBold '>Sign In your account</h1>
        <form onSubmit={formik.handleSubmit}>
        <input  
        name='email' 
        value={formik.values.email} 
        onChange={formik.handleChange}
        type="email" placeholder='Enter your Email address'  
        className='w-full px-3 py-2 border border-slate-400 outline-none mb-3 rounded-md'/>
        {
          formik.errors.email&&formik.touched.email&&( <p className='font-fontRegular text-red-500 text-sm mb-5'>{formik.errors.email} </p>
          )
         }

        <input 
        name='password' 
        value={formik.values.password}
        onChange={formik.handleChange} 
        type="password" placeholder='Enter your password'  
        className='w-full px-3 py-2 border border-slate-400 outline-none mb-3 rounded-md'/>
        {
          formik.errors.password&&formik.touched.password&&( <p className='font-fontRegular text-red-500 text-sm mb-5'>{formik.errors.password} </p>
          )
         }

        <button  disabled={loading} type='button' className='bg-slate-900 text-white text-base font-fontBold rounded-md w-full py-2'>  
          {
            loading ? <SyncLoader color='#fff' size={5}/> : "sign In"
          }
          </button>

        </form>
        <p className='text-gray-200 text-base font-fontRegular pt-2'>Don't have a account? sign Up </p>
    </div>
    </>
  )
}
