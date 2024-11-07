import React, { useEffect } from 'react'

// aos animation 
import Aos from 'aos'
import 'aos/dist/aos.css'

export const About = () => {

  useEffect( ()=>{
    Aos.init();
  })
  return (
    <>
    <section className='pt-24'>
      <div className="container">
        <h4 className='text-3xl font-fontRegular font-extrabold text-center tracking-widest'>ABOUT</h4>

        <div className='pt-5'>
          <h3 className='text-2xl font-fontRegular font-extrabold tracking-normal'>ABOUT ME</h3>

          <div data-aos="zoom-in" data-aos-duration="3000"  className='w-[30%] pt-6 PeragrapSec'>
          <p className='text-xl text-justify'>Hi, I'm Cole. I love cooking, especially grilling. I have two brothers, one is 16 and the other is 11. We have 3 dogs, a Havanese and 2 Golden Retrievers. I am a high school freshman, and I love to swim. I really got into cooking during COVID, and my passion just bloomed from there. I plan on posting something here about once every two weeks.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
