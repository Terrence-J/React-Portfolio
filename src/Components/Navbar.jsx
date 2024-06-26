import React, { useState }  from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

   const [nav, setNav] = useState(true)
  

   const handleNav = () =>{
       setNav(!nav)
   }

  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Madon.ST</h1>
        <ul className='hidden md:flex'>
            <li className='p-4' ><a href='#home'>Home</a></li>
            <li className='p-4'><a href='#about'>About</a></li>
            <li className='p-4' ><a href='#project'>Projects</a></li>
            <li className='p-4 bg-slate-100 text-black rounded'><a href='#contact'>Contact</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />  }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]' }>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Madon.ST</h1>
        
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'><a href='#home'>Home</a></li>
            <li className='p-4 border-b border-gray-600'><a href='#about'>About</a></li>
            <li className='p-4 border-b border-gray-600'><a href='#project'>Projects</a></li>
            <li className='p-4'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar