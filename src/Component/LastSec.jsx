import React from 'react'

export const LastSec = () => {
  return (
    <>
    <section className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h3 className='text-center text-3xl font-fontRegular font-bold py-2'>SUBSCRIBE VIA EMAIL</h3>
                </div>
                <div className="col-lg-6">

                <h3 className='text-xl font-fontRegular ms-5'>Enter your email here*</h3>
                    <form className='text-center' action="">
                        <input className='emailIn'  type="email" />

                        <div className='pt-2'>
                        <button className='Subscribe'>Subscribe Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div className="container">
            <footer className='text-center'>
                <p className='font-fontRegular text-slate-400'>2021 by Cole</p>
            </footer>
        </div>
    </section>
    </>
  )
}
