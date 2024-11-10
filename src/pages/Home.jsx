import React, { useEffect } from 'react'
import home1 from '../assets/images/HomeBlogImg/HomeB1.webp'
import home2 from '../assets/images/HomeBlogImg/HomeB2.webp'
import home3 from '../assets/images/HomeBlogImg/HomeB3.webp'
import home4 from '../assets/images/HomeBlogImg/HomeB4.webp'
import home5 from '../assets/images/HomeBlogImg/HomeB5.webp'
import { Link, useNavigate } from 'react-router-dom'

// aos animation 
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoggedInUserRoute from '../PrivateRoute/LoggedInUserRoute'

export const Home = () => {

  useEffect( ()=>{
    Aos.init();
  })


  const navigate = useNavigate()
  return (
    <>
    <section className='py-10'>
      <div className="container">

      <h3 className='text-center text-3xl font-bold food'>FOOD BLOG</h3>

        <div  data-aos="zoom-in"  data-aos-duration="3000" className="row mt-4 border border-red-400 PostRes shadow-md">
          <div className="col-lg-6 p-0 postImg">
          <img   src={home1} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6 postImg '>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jun 6 . 1 min read</span>

                <Link to={'/productD'} > 
                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify'>Simple Arrabbiata Sauce</h4>
                <p className='font-fontRegular text-xl pt-3'>Ingredients: 1 28.2 oz can whole peeled tomatoes 4 cloves <br/> garlic 1/4 cup olive oil Chopped Calabrian chiles Handful <br/>  chopped parsley Basil...</p>
                </div>
                </Link>

                </div>

              </div>
          </div>

          <div data-aos="zoom-in"  data-aos-duration="3000" className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={home2} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jun 2 . 2 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify'>Steak Frites with Red Wine Pan Sauce</h4>
                <p className='font-fontRegular text-xl pt-3'>Servings: 2 Ingredients: French Fries 3 Russet potatoes Ice <br/> water Vegetable (or any neutral) oil Dried parsley (to <br/> garnish) Salt Freshly...</p>
                </div>
                </div>

              </div>
          </div>


          <div data-aos="zoom-in"  data-aos-duration="3000" className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={home3} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
               
               <div className='pt-3 ps-2'>
               <span className='text-lg font-fontRegular pt-3 d-block'>Dec 30, 2023 . 
                1 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify'>Spicy Chicken Tacos</h4>
                <p className='font-fontRegular text-xl pt-3'>Ingredients (15 tacos): Chicken Fajitas: 3 lbs boneless <br/> skinless chicken breast, cut into small pieces 2 sweet red <br/> bell peppers, sliced...  </p>
                </div>
               </div>

              </div>
          </div>

          <div data-aos="zoom-in"  data-aos-duration="3000" className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={home4} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Oct 28, 2023 . 
                1 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify'>One-Pot Chicken and Rice</h4>
                <p className='font-fontRegular text-xl pt-3'>I recently found this recipe, and altered it to my liking! Its a <br /> great post-workout meal, or an easy week night dinner. It is <br /> really easy.. </p>
                </div>
                </div>
                
              </div>
          </div>

          <div data-aos="zoom-in"  data-aos-duration="3000" className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={home5} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>

                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jul 10, 2023 . 
                2 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify'>Fresh Summer Salad</h4>
                <p className='font-fontRegular text-xl pt-3'>I was recently asked to bring a salad to a party, and I didn't <br/> know what to do. I wanted a seasonal summer salad, but I <br /> couldn't find a... </p>
                </div>
                </div>

              </div>
          </div>

          <div className='text-center pt-8'>
            <button onClick={ ()=>{
              navigate('/blogs')
            }} className='w-[250px] h-[55px] bg-black text-white AllPostBtn font-fontRegular text-xl ' >

              All posts

              </button>
          </div>

          
        </div>
    </section>

    <LoggedInUserRoute/>
    </>
  )
}
