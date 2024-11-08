import React from 'react'
import { Link } from 'react-router-dom'
import proImg1 from '../assets/images/productDimg/proImg1.webp'
import proImg2 from '../assets/images/productDimg/proImg2.webp'
import proImg3 from '../assets/images/productDimg/proImg3.webp'
import proImg4 from '../assets/images/productDimg/proImg4.webp'
import porImg5 from '../assets/images/productDimg/proImg5.webp'

import card1 from '../assets/images/productDimg/card1.webp'
import card2 from '../assets/images/productDimg/card2.webp'
import card3 from '../assets/images/productDimg/card3.webp'

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CgLink } from "react-icons/cg";

import { IoEyeOutline } from "react-icons/io5";
export const ProductD = () => {
  return (
    <>
    <section className='pt-14'>
        <div className="container">
       
        <div className='  d-none navLog'>
            <h4 className='text-md font-fontRegular  cursor-pointer text-center'>Log in / Sign up</h4>
          </div>

        <div className='pt-4 d-flex justify-between'>

          <div>
          <Link to={'/blogs'}> <a className='font-fontRegular text-xl py-2 px-3' href=""> All Posts</a></Link>
          <Link to={'/cheaper'}><a className='font-fontRegular text-xl py-2 px-3' href="">Cheaper Than a Big Mac</a></Link>
          <Link to={'/kid'}> <a className='font-fontRegular text-xl py-2 px-3' href="">Kids Can Cook</a></Link>
          <a className='font-fontRegular text-xl py-2 px-3' href="">Archives</a>
          </div>

          <div className='w-[12%] logRes'>
            <h4 className='text-lg font-fontRegular border border-black p-2 cursor-pointer log'>Log in / Sign up</h4>
          </div>

          </div>
            <div className="row border  border-black-200 mt-6">

    

                <div className="col-lg-2"></div>
                <div className="col-lg-8">

                <div className='py-5'>
                <span className='text-xl font-fontRegular '>1 min read</span>
                <h4 className='text-4xl font-extrabold font-fontRegular py-4'>Simple Arrabbiata Sauce</h4>
                <span className='text-xl font-fontRegular'>Updated: Jun 13</span>
                </div>

                <img className='img-fluid' src={proImg1} alt="" />


                <div className='py-8'>
                  <h3 className='text-4xl font-fontRegular font-extrabold tracking-wide'>Ingredients:</h3>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 28.2 oz can whole peeled tomatoes</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >4 cloves garlic</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1/4 cup olive oil</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Chopped Calabrian chiles</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Handful chopped parsley</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Basil to garnish</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Salt and pepper to taste</li>
                </div>

                <div>
                <h3 className='text-4xl font-fontRegular font-extrabold tracking-wide'>Instructions:</h3>

                <span className='text-xl font-fontRegular tracking-wider py-1' > 1. Heat olive oil in a large saucepan over medium heat</span> <br />
                <span className='text-xl font-fontRegular tracking-wider py-1' > 2. Add the garlic and chiles, and cook until the garlic is browned and it starts to smell strongly
                </span>
                </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={proImg2} alt="" />
               </div>

               <div>
                <span  className='text-xl font-fontRegular tracking-wider py-1'>3. Add the whole peeled tomatoes to a large bowl, and crush using a fork. Then add to the saucepan.</span>
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={proImg3} alt="" />
               </div>

               <div>
                <span className='text-xl font-fontRegular tracking-wider py-1'> 4. Simmer until desired consistency is reached. Turn off the heat, and add a handful of chopped parsley.</span>
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={proImg4} alt="" />
               </div>

               <div>
                <span className='text-xl font-fontRegular tracking-wider py-1'>
                5. Serve with pasta, basil leaves, and freshly grated parmesan</span>
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={porImg5} alt="" />
               </div>


               <hr />
               <div className='d-flex py-1'>
                  <div> <span className='px-14 text-xl' ><FaFacebookF /></span></div>
                  <div> <span className='px-14 text-xl' ><FaXTwitter /></span></div>
                  <div> <span className='px-14 text-xl' ><FaLinkedinIn /></span></div>
                  <div> <span className='px-14 text-xl' ><CgLink /></span></div>
               </div>
               <hr />
               <span className='text-xl pt-3 d-inline-block'>6,476 views</span>




                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </section>

    <section className='py-9'>
      <div className="container">

        <div className='d-flex justify-between'>
          <div> <span className='text-xl font-fontRegular'>Recent Posts</span></div>
          <div> <span className='text-xl font-fontRegular'>See All</span></div>
        </div>
        <div className="row pt-5">

          <div className="col-lg-4">

            <div className=' border border-black-200 my-3'>
              <div className='d-flex justify-center'>
              <img className='img-fluid' src={card1} alt="" />
              </div>

              <div>
                <h4 className='text-2xl font-fontRegular font-extrabold tracking-wide px-3 py-3 hover:text-red-400 text-center'>Steak Frites with Red Wine Pan Sauce</h4>

                <hr />
                

                <div className='d-flex align-items-center px-3 py-3 justify-center'>
                <span className='text-2xl ' > <IoEyeOutline /></span>
                <span className='font-fontRegular px-1 text-center' >1,054</span>
                </div>

                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='border border-black-200 my-3'>
              <div className='d-flex justify-center'>
              <img className='img-fluid' src={card2} alt="" />
              </div>

              <div>
                <h4 className='text-2xl font-fontRegular font-extrabold tracking-wide px-3 py-[30px] hover:text-red-400 text-center'>Spicy Chicken Tacos</h4>

                <hr />
                

                <div className='d-flex align-items-center px-3 py-3 justify-center'>
                <span className='text-2xl ' > <IoEyeOutline /></span>
                <span className='font-fontRegular  px-1' >903</span>
                </div>

                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='border border-black-200 my-3'>
              <div className='d-flex justify-center'>
              <img className='img-fluid' src={card3} alt="" />
              </div>

              <div>
                <h4 className='text-2xl font-fontRegular font-extrabold tracking-wide px-3 py-[30px] hover:text-red-400 text-center'>One-Pot Chicken and Rice</h4>

                <hr />
                

                <div className='d-flex align-items-center px-3 py-3 justify-center'>
                <span className='text-2xl ' > <IoEyeOutline /></span>
                <span className='font-fontRegular px-1 ' >889</span>
                </div>

                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



    </>
  )
}
