import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import bg1 from '../assets/images/bg1.png'
import { FiSearch } from "react-icons/fi";
export const Cooking = () => {
  return (
    <>
     <div className="container CookingWith">
     <div className='position-relative'>
     <Link to={'/'}> <a className="nav-link text-center  text-4xl font-fontRegular font-extrabold cooking " href="#">Cooking with Cole</a></Link>
     </div>
     </div>


     <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 ">
                    <img className='img-fluid' src={bg1} alt="images" />

                    <div className='text-center position-relative '>
                    <form className='btn-group SearchPosi position-absolute' action="">
                    <input type="text" className='w-[520px] h-12 headSearc bg-white'   placeholder='Search...'/>
                    <button className='w-12 h-12 d-flex justify-center align-items-center text-xl bg-black text-white '> <span><FiSearch /></span></button>
                    </form>
                    </div>

                </div>

            </div>
        </div>
     </section>
    </>
  )
}
