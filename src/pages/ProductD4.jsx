import React from 'react'

import { Link } from 'react-router-dom'




import D4 from '../assets/images/product4/Pro4.webp'
import D5 from '../assets/images/product4/Pro4.1.webp'
import D6 from '../assets/images/product4/Pro4.2.webp'
import D7 from '../assets/images/product4/Pro4.3.webp'
import D8 from '../assets/images/product4/Pro4.4.webp'
// import D9 from '../assets/images/product4/Pro4.5.webp'

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

export const ProductD4 = () => {
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
                <h4 className='text-4xl font-extrabold font-fontRegular py-4'>One-Pot Chicken and Rice</h4>

                <p className='font-fontRegular text-2xl text-justify tracking-normal'>I recently found this recipe, and altered it to my liking! Its a great post-workout meal, or an easy week night dinner. It is really easy to make, and also really flavorful!</p> 
                </div>

                <img className='img-fluid' src={D4} alt="" />


                <div className='py-8'>
                <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide'>
                Ingredients:</h3>
        
                  <li className='text-xl font-fontRegular tracking-wider py-1' >2 lbs bone-in chicken thighs</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >7 cloves minced garlic</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >2 tablespoons grated ginger</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >2 tablespoons garam masala</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1 teaspoon salt</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >1/2 teaspoon turmeric</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >2 teaspoons red chili pepper</li>


                  <li className='text-xl font-fontRegular tracking-wider py-1'>1 lemon, juiced</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>1/4 Cup avocado oil, or any other neutral oil with a high smoke point</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>1/4 - 1/2 Cup sun dried tomatoes, roughly chopped</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>3 tablespoons tomato paste</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'>1 teaspoon chili flakes</li>

                  <li className='text-xl font-fontRegular tracking-wider py-1'>1 shallot, minced</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1'> 2-3 Cups Basmati Rice</li>

                  <li className='text-xl font-fontRegular tracking-wider py-1' >One box chicken broth</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Asiago Cheese</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Cream</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Cilantro</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1' >Basil</li>
          
                  <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide py-2'>
                  Instructions:</h3>               
               
                  <span className='text-xl font-fontRegular py-2 d-inline-block'> 1.
                  Mix the ginger, garam masala, salt, turmeric, half of the minced garlic, chili pepper, and lemon juice in a large bowl. Toss the chicken in the spice mixture until the chicken is evenly coated.</span> <br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>2. Heat oil in a cast-iron skillet over medium high heat. Once the oil begins to shimmer, sear the chicken until golden brown on both sides, about 3 minutes per side. Set aside.   </span>
                </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={D5} alt="" />
               </div>

               <div>
                <span  className='text-xl font-fontRegular tracking-wider py-1'>3. Add the tomato paste and sun dried tomatoes to the skillet. Cook for about 1 minute over medium heat until they begin to smell strongly. Then, add the rest of the minced garlic, the minced shallot, chili flakes, and the rice. Mix this together and toast it for another 1-2 minutes over medium heat.</span> <br/>

               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={D6} alt="" />
               </div>

               <div>
                <span className='text-xl font-fontRegular tracking-wider py-1'>4. Then, add enough the chicken back into the pot, and cover with chicken broth until the rice and chicken are submerged. Cover, and wait until rice is cooked. </span> <br/>

               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={D7} alt="" />
               </div>

               <div>
                <span className='text-xl font-fontRegular tracking-wider py-1'>5. Coat with a bit of grated asiago cheese, a drizzle of cream, and a sprinkle of chopped cilantro and basil. Enjoy!</span>
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={D8} alt="" />
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
