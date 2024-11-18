import React from 'react'

import { Link } from 'react-router-dom'


import LastPro1 from '../assets/images/Product5/Pro5.webp'
import LastPro2 from '../assets/images/Product5/Pro5.1.webp'
import LastPro3 from '../assets/images/Product5/Pro5.2.webp'
import LastPro4 from '../assets/images/Product5/Pro5.3.webp'
// import LastPro5 from '../assets/images/Product5/Pro5.4.webp'




import card1 from '../assets/images/productDimg/card1.webp'
import card2 from '../assets/images/productDimg/card2.webp'
import card3 from '../assets/images/productDimg/card3.webp'

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CgLink } from "react-icons/cg";

import { IoEyeOutline } from "react-icons/io5";

export const Product5 = () => {
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
                <h4 className='text-4xl font-extrabold font-fontRegular py-4'>Fresh Summer Salad</h4>
                </div>

                <img className='img-fluid' src={LastPro1} alt="" />


                <div className='py-8'>
                <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide'>
                Ingredients:</h3>

                <h3  className='text-xl font-fontRegular font-extrabold tracking-wide pt-4' > Salad:</h3>
        
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none' >- 5 oz fresh baby arugula, washed</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none ' >- 5 oz fresh baby spinach, washed</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none ' >- 3 ripe white peaches</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none ' >- 3 ripe yellow peaches</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none ' >-  12 ripe figs, quartered</li>
                  <li className='text-xl font-fontRegular tracking-wider py- list-none ' >- 5 oz creamy goat cheese</li>
                  <li className='text-xl font-fontRegular tracking-wider py- list-none ' >- 3/4 cup pine nuts</li>


                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>- 1 1/3 cup basil leaves</li>

                  <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide pt-3'>
                  Dressing:</h3>

                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>-1/2 cup olive oil</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>- 6 tablespoons balsamic reduction</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>- Half of a lemon, juiced</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>- 1 clove garlic, minced</li>

                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>- 1 1/2 tablespoons maple syru</li>
                  <li className='text-xl font-fontRegular tracking-wider py-1 list-none '>- Pinch of salt</li>
          
                  <h3 className='text-2xl font-fontRegular font-extrabold tracking-wide py-2'>
                  Instructions:</h3>               
               
                  <span className='text-xl font-fontRegular py-2 d-inline-block'> 1.
                  Toast the pine nuts for about 2 minutes in a small pan until lightly browned. Remove from heat and set aside in a small bowl.</span> <br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>2. Cut the peaches and figs, and place in separate Tupperware containers. Set aside.</span> <br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>3. For the basil leaves, I like to julienne them. To do this, you can grab a few leaves, and stack them on top of each other. Then, roll the stack of basil leaves into a cylindrical shape. From here, you can cut the cross section of the cylindrical shape to form neat strips of basil leaves. Set aside in a small bowl.</span><br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>4. Whisk the olive oil, balsamic reduction, juice of half a lemon, minced garlic, maple syrup, and salt together until well combined. Set aside.</span> <br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>5. Place the arugula and spinach in a large salad bowl, and top with the toasted pine nuts. Place spoonfuls of goat cheese on top of this. <span className='font-bold'>If you are making this for a party, skip to Step 7 and ignore Step 6.</span> </span> <br/>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>6. Layer the peaches, figs, and basil leaves on top of the spinach and arugula. Dress to your liking, and toss to coat. Serve as soon as possible.</span>

                  <span className='text-xl font-fontRegular py-2 d-inline-block'>7. If you plan on making this for a party, I would recommend not adding the fruits or dressing until you are about to eat. I would place a damp rag over the top of the salad bowl, and bring it along with Tupperware containers of the fruit and dressing to the party. Once you are about to eat, you can then refer to Step 6.</span>
                </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={LastPro2} alt="" />
               </div>

               <div className='d-flex justify-center'>
               <img className='py-10' src={LastPro3} alt="" />
               </div>


               <div className='d-flex justify-center'>
               <img className='py-10' src={LastPro4} alt="" />
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
