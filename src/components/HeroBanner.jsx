import React from 'react'
import BackgroundImg from '../assets/bg.jpg'


const HeroBanner = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
        
        <div className='w-full h-full'>

        <img src={BackgroundImg} className="w-full h-full object-cover" />

        </div>
        
        </section>
  )
}

export default HeroBanner