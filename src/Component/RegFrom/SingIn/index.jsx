
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { SyncLoader } from 'react-spinners';
import { SignIn } from '../../../Validation/Validation';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoggedInUser } from '../../../fueature/slice/LoginSlice';


export const SingInForm = ({toast}) => {
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()

    const initialValues ={
      email:" ",
      password: "",
    }

    const formik = useFormik({
      initialValues,
      onSubmit: (values,{resetForm})=>{
      SignInNewUser()
      resetForm({values:''})
      },
      validationSchema:SignIn
  })

  const SignInNewUser =()=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
  .then((user) => {
    setLoading(false)
   if(user.user.emailVerified === true){
    dispatch(LoggedInUser(user))
    localStorage.setItem("user",JSON.stringify(user))

    navigate('/')
    
   } else{
    toast.error('Please verified  your email!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   
  })
  .catch((error) => {
    setLoading(false)
    if(error.message.includes("auth/invalid-credential")){
      toast.error('Email or password is invalid!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      }
    
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
          formik.errors.email && formik.touched.email && ( <p className='font-fontRegular text-red-500 text-sm mb-5'>{formik.errors.email} </p>
          )
         }

        <input 
        name='password' 
        value={formik.values.password}
        onChange={formik.handleChange} 
        type="password" placeholder='Enter your password'  
        className='w-full px-3 py-2 border border-slate-400 outline-none mb-3 rounded-md'/>
        {
          formik.errors.password && formik.touched.password && ( <p className='font-fontRegular text-red-500 text-sm mb-5'>{formik.errors.password} </p>
          )
         }

        <button  disabled={loading} type='submit' className='bg-slate-900 text-white text-base font-fontBold rounded-md w-full py-2'>  
          {
            loading ? <SyncLoader color='#fff' size={5}/> : "sign In"
          }
          </button>

        </form>
        <p className='text-gray-200 text-base font-fontRegular pt-2'>Don't have a account? <Link className='text-blue-500 hover:underline' to={'/rejistration'}> sign up</Link> </p>

        <Link to={'/forget'} className='hover:underline hover:text-blue-500'><p className='text-gray-200 text-base font-fontRegular pt-2'>Forget password?</p></Link>
    </div>
    </>
  )
}
