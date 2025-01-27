import React from 'react'
import { FaGoogle } from 'react-icons/fa6'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { LoggedInUser } from '../fueature/slice/LoginSlice';
import { useNavigate } from 'react-router-dom';
export const Google = () => {
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();
     auth.languageCode = 'it';
    const handleLoginGoogle =(e)=>{
          e.preventDefault()
        signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    dispatch(LoggedInUser(result?.user))
        localStorage.setItem("user",JSON.stringify(result?.user))
    
        navigate('/')
  }).catch((error) => {
    console.log(error);
    
  });

    }
  return (
   <>
      <div className="flex flex-col items-center text-black py-4">
      <h2 className="font-serif text-2xl mb-4 text-white">Or</h2>
      <button 
        onClick={handleLoginGoogle}
        className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        <span className="mr-3 text-lg">
          <FaGoogle />
        </span>
        Login with Google
      </button>
    </div>
   </>
  )
}
