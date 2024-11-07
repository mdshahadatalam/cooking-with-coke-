import React from 'react'
import cheaper1 from '../assets/images/cheaperIme/Cheaper1.webp'
import cheaper2 from '../assets/images/cheaperIme/cheaper2.webp'
import { Link } from 'react-router-dom'

export const Kid = () => {
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

      <div className="row">
      <div className="row mt-4 border border-red-400 shadow-md m-0 p-0">
          <div className="col-lg-6 p-0 ">
          <img   src={cheaper1} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6 postImg '>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jun 10, 2022
               . 2 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>20 Minute Cheap & Healthy Halloumi with Vegetables</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>Hi Everyone! This is sort of a special post for me, because my grandfather is Lebanese, and this is my first time making a Lebanese dish....</p>
                </div>
                </div>

              </div>
          </div>
      </div>


      <div className="row mt-4 border border-red-400 shadow-md">
          <div className="col-lg-6 p-0">
          <img src={cheaper2} className='img-fluid' alt="" />

          </div>


              <div className='col-lg-6'>
                <div className='pt-3 ps-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Apr 24, 2022
               . 3 min read</span>

                <div className='hover:text-red-500'>
                <h4 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>4 Dollar Easy Spaghetti & Meatballs</h4>
                <p className='font-fontRegular text-xl pt-3 tracking-normal pb-2'>INGREDIENTS: Meatballs: ¼ lb (123g) finely chopped mortadella / ham ~ $1.50+ (you won't use the whole box) 1 lb (454g) ground beef ~ $4+...</p>
                </div>
                </div>

              </div>
          </div>
    </div>
   </section>

    </>
  )
}
