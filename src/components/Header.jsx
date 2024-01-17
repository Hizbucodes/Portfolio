import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
const Header = () => {

    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Projects",
        },
        {
            id: 4,
            link: "Contact",
        },
    ]

    const[menu, setMenu] = useState(false);

  return (
    <header className='max-w-[1640px] h-[80px] bg-white/30 backdrop-blur-sm md:bg-transparent mx-auto flex justify-between p-5 items-center text-primary'>

        {/* Title */}
        <div>
            <h1 className='text-2xl md:text-4xl font-bold'>Hizbullah</h1>
        </div>

        {/* desktop-menu-list */}
        
          <div className='md:flex hidden'>
          <ul className='flex gap-12'>
                {links.map((link)=>(
                    <li key={link.id} className='cursor-pointer font-medium text-2xl hover:scale-110 duration-300'>
                        {link.link}
                    </li>
                ))}
            </ul>
          </div>
            <CiMenuFries size={30} className='md:hidden' onClick={()=> setMenu(!menu)}/>
    
            {/* mobile-overlay */}
            {menu && <div className='bg-white/30 backdrop-blur-sm fixed top-0 left-0 h-screen w-full z-10'>

</div>}

            {/* Mobile - Nav */}
       {menu && <div className='fixed top-0 right-0 h-screen w-[60%] bg-primary z-20 duration-300 transition-all'>
           <VscClose size={40} color='black' className='absolute left-5 top-5' onClick={()=> setMenu(!menu)}/>
           <ul className='flex flex-col items-center justify-center gap-12 h-full'>
                {links.map((link)=>(
                    <li key={link.id} className='cursor-pointer font-bold text-4xl text-black'>
                        {link.link}
                    </li>
                ))}
            </ul>
           </div>}

    </header>
  )
}

export default Header