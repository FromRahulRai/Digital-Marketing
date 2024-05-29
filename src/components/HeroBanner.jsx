import React from 'react'
import BackgroundImg from '../assets/bg.jpg'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Whatsapp from '../assets/whatsapp.png'
import Youtube from '../assets/youtube.png'


const HeroBanner = () => {
  return (
    <section className='relative w-full h-[100vh] lg:h-[100vh] overflow-hidden bg-cover bg-center' style={{ backgroundImage: `url(${BackgroundImg})` }}>

      <div className='absolute inset-0 flex items-center justify-center' >

        <h2 className="text-black text-[2.875rem] md:text-5xl lg:text-6xl font-bold text-center md:leading-[4.25rem] lg:leading-[5rem] ">Transform Your Online Presence: Discover the Power of <span className='text-[#51b174] font-bold animate-pulse  '>Digital Marketing!</span> </h2>


      </div>
      <div className='  '>
        <img src={Facebook} alt="" className='hidden absolute md:top-16 md:left-10 md:flex animate-bounce' />
        <img src={Instagram} alt="" className='hidden absolute md:top-20 md:right-10 md:flex animate-bounce' />
        <img src={Linkedin} alt="" className='hidden absolute md:top-1/3 md:left-1/3 md:flex animate-bounce' />
        <img src={Twitter} alt="" className='hidden absolute md:top-1/2 md:right-1/4 md:flex animate-bounce' />
        <img src={Whatsapp} alt="" className='hidden absolute md:bottom-1/3 md:left-1/4 md:flex animate-bounce' />
        <img src={Youtube} alt="" className='hidden absolute md:bottom-1/4 md:right-1/3 md:flex animate-bounce' />
        <img src={Instagram} alt="" className='hidden absolute md:bottom-10 md:left-10 md:flex animate-bounce' />
        <img src={Whatsapp} alt="" className='hidden absolute md:bottom-16 md:right-10 md:flex animate-bounce' />
        <img src={Linkedin} alt="" className='hidden absolute md:top-16 md:right-1/4 md:flex animate-bounce' />
      </div>

    </section>
  )
}

export default HeroBanner