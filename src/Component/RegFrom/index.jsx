import { useFormik } from 'formik'
import React, { useState } from 'react'
import { signUp } from '../../Validation/Validation'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import { SyncLoader } from 'react-spinners';
import { Link, useNavigate } from 'react-router-dom';
import { Google } from '../Google';

export const RegFrom = ({toast}) => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth();
    const initialValues ={
      fullName:"",
      email:"",
      password: "",
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values,{resetForm})=>{
        createNewUser()
        resetForm({values:''})
        },
        validationSchema:signUp,
    })

    const createNewUser =()=>{
      setLoading(true)
      createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
  .then(() => {
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      toast.success('Email sent for verification', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(()=>{
          navigate ('/SignIn')
        },2500)
        setLoading(false)
    })
    .catch((error)=>{
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  })
  .catch((error) => {
    if(error.message.includes("auth/email-already-in-use")){
      toast.error('your email already in use', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setLoading(false)
    }

  });
    }

    // console.log(formik);
  return (
    <>
    <div className='text-black'>
        <h1 className='text-white py-3 font-fontBold '>Registration for your new journey</h1>
        <form onSubmit={formik.handleSubmit}>
        <input 
         name='fullName'
         value={formik.values.fullName}
         onChange={formik.handleChange} 
         type="text" placeholder='Enter your Full name'
         className='w-full px-3 py-2 border border-slate-400 outline-none mb-3 rounded-md'/>
         {
          formik.errors.fullName&&formik.touched.fullName&&( <p className='font-fontRegular text-red-500 text-sm mb-5'>{formik.errors.fullName} </p>
          )
         }

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

        <button  disabled={loading} type='submit' className='bg-slate-900 text-white text-base font-fontBold rounded-md w-full py-2'>  
          {
            loading ? <SyncLoader color='#fff' size={5}/> : "sign up"
          }
          </button>

        </form>
        <p className='text-gray-200 text-base font-fontRegular pt-2'>Al ready have a account? <Link className='text-blue-500 hover:underline' to={'/SignIn'}> sign in</Link> </p>

        <Google/>
    </div>
    </>
  )
}
