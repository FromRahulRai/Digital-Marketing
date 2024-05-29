import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }




    return (

        <nav className='fixed top-0 left-0 w-full z-10 bg-transparent'>

<div className='flex p-3 justify-between items-center '>

<a className='flex items-center gap-2'>

<img className='object-cover max-w-16 max-h-16' src={Logo} alt='logo' />

</a>

<ul className='hidden md:flex gap-12'>

<li><a href='#' className='font-medium text-lg hover:text-[#51b174] transition ease-in-out delay-150'>Home 

</a></li>
<li><a href='#' className='font-medium text-lg hover:text-[#51b174] transition ease-in-out delay-150'>About Us</a></li>
<li><a href='#' className='font-medium text-lg hover:text-[#51b174] transition ease-in-out delay-150'>Services</a></li>
<li><a href='#' className='font-medium text-lg hover:text-[#51b174] transition ease-in-out delay-150'>Contact US</a></li>

</ul>

<button className='hidden md:flex gap-2 items-center border border-gray-200 px-8 py-2 rounded-lg hover:border-gray-300 text-lg font-medium md:hover:text-white md:hover:bg-[#51b174] transition ease-in-out delay-150 md:hover:scale-95'>
Get Quote

<FontAwesomeIcon icon={faArrowRight} />

</button>


<button className='p-2 md:hidden z-10' onClick={handleClick}>

{nav ? <FontAwesomeIcon icon={faXmark} className='text-white' /> : <FontAwesomeIcon icon={faBars} />}


</button>



<ul className={`${nav ? ' opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full'}
transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-lg text-white gap-9 `}>

<li><a href='#' className='font-medium text-lg'>Home</a></li>
<li><a href='#' className='font-medium text-lg'>About Us</a></li>
<li><a href='#' className='font-medium text-lg'>Services</a></li>
<li><a href='#' className='font-medium text-lg'>Contact US</a></li>

<button className='flex gap-2 items-center border border-gray-200 px-8 py-2 rounded-lg hover:border-transparent text-lg font-medium hover:bg-[#51b174] transition ease-in-out delay-150 hover:scale-95'>

    Get Quote

    <FontAwesomeIcon icon={faArrowRight} />

</button>

</ul>

</div>

          

        </nav>
    )
}

export default NavBar