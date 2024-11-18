import React from 'react'

import { Link } from 'react-router-dom'

import pro3 from '../assets/images/Product3/Pro3.webp'
import pro4 from '../assets/images/Product3/Pro3.2.webp'
import pro5 from '../assets/images/Product3/Pro3.3.webp'
import pro6 from '../assets/images/Product3/Pro3.4.webp'
// import pro7 from '../assets/images/Product3/Pro3.5.webp'





import card1 from '../assets/images/productDimg/card1.webp'
import card2 from '../assets/images/productDimg/card2.webp'
import card3 from '../assets/images/productDimg/card3.webp'

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CgLink } from "react-icons/cg";

import { IoEyeOutline } from "react-icons/io5";

export const ProductD3 = () => {
  return (
    <>

<section className='pt-14'>
        <div className="container">
       

        <div className='  d-none navLog'>
           <Link to={'/SignIn'}> 
            <h4 className='text-md font-fontRegular  cursor-pointer text-center'>Log in / Sign up</h4>
             
            </Link>
         </div>

        <div className='pt-4 d-flex justify-between'>

          <div>
          <Link to={'/blogs'}> <a className='font-fontRegular text-xl py-2 px-3' href=""> All Posts</a></Link>
          <Link to={'/cheaper'}><a className='font-fontRegular text-xl py-2 px-3' href="">Cheaper Than a Big Mac</a></Link>
          <Link to={'/kid'}> <a className='font-fontRegular text-xl py-2 px-3' href="">Kids Can Cook</a></Link>
          <a className='font-fontRegular text-xl py-2 px-3' href="">Archives</a>
          </div>


          <div className='w-[12%] logRes'>
          <Link to={'/SignIn'}> 
            <h4 className='text-lg font-fontRegular border border-black p-2 cursor-pointer log'>Log in / Sign up</h4>
          </Link>
          </div>
          </div>


            <div className="row border  border-black-200 mt-6">

    

                <div className="col-lg-2"></div>
                <div className="col-lg-8">

                <div className='py-5'>
                <span className='text-xl font-fontRegular '>1 min read</span>
                <h4 className='text-4xl font-extrabold font-fontRegular py-4'>Spicy Chicken Tacos</h4>
                </div>

                <img className='img-fluid' src={pro3} alt="" />


                <div className='py-8'>
                <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide'>
                Ingredients (15 tacos):</h3>
                  <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide pt-3'>Chicken Fajitas:</h3>
        
                  <li className='text-xl font-fontRegular tracking-wider py-1' >3 lbs boneless skinless chicken breast, cut into small pieces</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >2 sweet red bell peppers, sliced into strips</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 sweet yellow bell pepper, sliced into strips</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >2 and 1/2 tablespoons chili powder</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 tablespoon paprika</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 and 1/2 teaspoons paprika</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >3 teaspoons ground cumin</li>


                  <h3 className='text-xl font-fontRegular tracking-wider py-1'> 3tablespoons dried oregano</h3>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>1 tablespoon onion powder</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>1 and 1/2 tablespoons salt</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>2 and 1/2 tablespoons ground black pepper</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>3/4 cups lime juice</li>

                    <li className='text-xl font-fontRegular tracking-wider py-1'>Olive oil (for the pan)</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'> 16 corn tortillas</li>
          
                  <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide py-2'>
                  Spicy Red Salsa:</h3>

                  <li className='text-xl font-fontRegular tracking-wider py-1'>3 roma tomatoes, halved</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>2 jalapenos</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>1 can diced, fire roasted tomatoes</li>

                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 tablespoon cumin</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1/2 cup fresh cilantro</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1/4 cup lime juice</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 small red onion, quartered</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Salt and Pepper to tast</li>

                  <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide py-2'>
                  Guacamole:</h3>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >5 ripe avocados</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1/4 cup fresh cilantro</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Salt and Pepper to taste</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Lime Juice to taste (about 3 limes)</li>
                
                <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide py-2'>Instructions:</h3>
               
                  <span className='text-xl font-fontRegular py-2 d-inline-block'> 1.
                    Marinate the chicken in the chili powder, paprika, garlic powder, ground cumin, dried oregano, onion powder, salt, and pepper for 30 minutes or up to overnight.</span> <br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>2. Heat olive oil over medium high in a cast iron skillet until shimmering. Add the marinated chicken, and cook for about 5 minutes. Add the sliced bell pepper (both red and yellow) to the pan and continue cooking. </span>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>3. Once the chicken is cooked all the way through add the lime juice, and mix to combine. </span>
                </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={pro4} alt="" />
               </div>

               <div>
                <span  className='text-xl font-fontRegular tracking-wider py-1'>1.In a blender or food processor, combine the roma tomatoes, jalapenos, canned tomatoes, cumin, salt, black pepper, fresh cilantro, lime juice, and red onion.</span> <br/>

                <span className='text-xl font-fontRegular tracking-wider py-1'> 2. Pulse until it has reached your desired consistency and set aside.</span>
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={pro5} alt="" />
               </div>

               <div>
                <span className='text-xl font-fontRegular tracking-wider py-1'> 1. Mash the avocados in a bowl, and add the lime juice, cilantro, salt, and pepper. Mix and set aside. </span> <br/>

                <span className='text-xl font-fontRegular tracking-wider py-1'>2. Heat tortillas in a dry pan over medium heat for about 30 seconds per side. </span> <br/>

                <span className='text-xl font-fontRegular tracking-wider py-1'>3. Serve the tortillas topped with chicken, salsa, and a small spoonful of guacamole. Enjoy!</span>
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={pro6} alt="" />
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
          <div> <Link  to={'/blogs'} > <span className='text-xl font-fontRegular'>See All</span></Link> </div>
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
