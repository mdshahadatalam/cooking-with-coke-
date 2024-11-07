import React from 'react'
import archive1 from '../assets/images/ArchiveImg/Archive1.webp'
import archive2 from '../assets/images/ArchiveImg/Archive2.webp'
import archive3 from '../assets/images/ArchiveImg/Archive3.webp'
import archive4 from '../assets/images/ArchiveImg/Archive4.webp'
import archive5 from '../assets/images/ArchiveImg/Archive5.webp'
import archive6 from '../assets/images/ArchiveImg/Archive6.webp'
import archive7 from '../assets/images/ArchiveImg/Archive7.webp'
import { Link } from 'react-router-dom'


export default function Archive() {
  return (
   <>

<section className='pt-10'>
    <div className="container">

          <h3 className='font-bold text-2xl font-fontRegular text-center pb-8 tracking-widest'>ALL POSTS</h3>

          <div className='pt-4'>
          <Link to={'/blogs'}> <a className='font-fontRegular text-xl py-2 px-3' href=""> All Posts</a></Link>
          <Link to={'/cheaper'}><a className='font-fontRegular text-xl py-2 px-3' href="">Cheaper Than a Big Mac</a></Link>
          <Link to={'/kid'}> <a className='font-fontRegular text-xl py-2 px-3' href="">Kids Can Cook</a></Link>
          <Link to={'/archive'}> <a className='font-fontRegular text-xl py-2 px-3' href="">Archives</a></Link>
          </div>

      <div className="row mt-4 border border-red-400 shadow-md m-0 p-0">
          <div className="col-lg-6 p-0 ">
          <img   src={archive1} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6 postImg '>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Feb 19, 2022
               . 2 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>Jamaican Jerk Meatballs with Sweet Pineapple Glaze</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>Ingredients: MEATBALLS: Neutral oil 1 pound ground chicken or turkey 1 small yellow or red onion, finely diced 1 egg, beaten ¼ cup bread...</p>
                </div>
                </div>

              </div>
          </div>



      <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={archive2} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Dec 30, 2021
               . 1 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>New-York Style Meatball Pizza In A Pizza Oven! (Ooni Koda 16)</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>Today, I am going to be making Ingredients: 6-8 Meatball Halves Pizza Sauce (Blended whole peeled tomatoes works great) Pizza dough,...</p>
                </div>
                </div>

              </div>
          </div>

          <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={archive3} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Dec 24, 2021
               . 1 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>Simple & Delicious Carnitas Tacos</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>Ingredients: 1kg pork shoulder (collar / butt) (cut into chunks) 4 tsp ground cumin 4 tsp smoked paprika 2 tsp chilli powder 2 tsp...</p>
                </div>
                </div>

              </div>
          </div>

          <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={archive4} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Nov 8, 2021
               . 2 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>Juiciest Birria Quesa Tacos</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>A delicious cheesy taco, that is full of juicy and flavorful meat. This is traditionally made on Mexican holidays, so it is quite a bit...</p>
                </div>
                </div>

              </div>
          </div>


          <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={archive5} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Sep 5, 2021
               . 2 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>3-Ingredient BBQ Chicken Breast</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>Total Time: 15 Minutes + Grill Heating Serves: 6-8 Ingredients: 3 lbs boneless skinless chicken breast 2 Cups Frog Sauce Yardbird Rub To...</p>
                </div>
                </div>

              </div>
          </div>

          <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={archive6} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Aug 29, 2021
               . 3 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>Infallible Pan Seared Steak</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>A quick and easy steak recipe, that can work for a $10 New York Steak, to a $100 Wagyu Filet Mignon. I have made this recipe over and...</p>
                </div>
                </div>

              </div>
          </div>

          <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={archive7} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Aug 15, 2021
               . 1 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify '>Easy Barbecue Chicken Wings</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>This was an amazing dish, and it also didn't take me very long. You can store the barbecue sauce, and it is great to heat up later on...</p>
                </div>
                </div>

              </div>
          </div>

    </div>
   </section>

   </>
  )
}
