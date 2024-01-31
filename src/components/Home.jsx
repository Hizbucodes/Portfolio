import React, { useEffect, useRef, useState } from 'react'
import image from '../assets/Portfolio-Image.png';
import { IoCloudDownloadOutline } from "react-icons/io5";
import gitHub from '../assets/github-svgrepo-com (2).svg';
import linnkedIn from '../assets/linkedin-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook-svgrepo-com.svg';
import arrowDown from '../assets/arrow-down-circle-svgrepo-com.svg'
import { Link as Down} from 'react-scroll';


const Home = () => {    
   

  return (
    <main className='max-w-screen-xl mx-auto flex items-center justify-evenly xl:justify-between h-screen p-5 flex-col-reverse xl:flex-row' name="Home">
        {/* Details - Side */}
        <div className='text-primary flex flex-col gap-10 xl:gap-12 items-center xl:items-start'>
                <div>
                    <h1 className='text-3xl text-center xl:text-7xl xl:text-start'>
                        Aspiring Full - Stack<br/> Developer.<span className='text-3xl'>💻</span>
                        
                    </h1>
                    
                    
                    
                </div>

                <div>
                    <p className='text-md xl:text-2xl text-white/85 text-center xl:text-start'>
                    Hi, I'm Hizbullah. A passionate Full-Stack Developer<br/> based in Sri Lanka, Kandy. 📍
                    </p>
                </div>

                <div className='w-fit'>
                    <a href="Hizbullah - CV.pdf"  download="Hizbullah - CV.pdf"
        target="_blank"
        rel="noreferrer">
                        
                    <button className='bg-secondary rounded-2xl border-none outline-none px-3 py-3 xl:p-5 text-black font-bold animate-pulse flex items-center gap-5 mx-auto xl:mx-0'>
                    <IoCloudDownloadOutline size={25}/>
                        Download CV
                    </button>
                    
                    </a>
                 
                </div>
                <div className='flex gap-4'>
                 
                 <Link to='https://github.com/Hizbucodes' target='_blank'>
                 <img src={gitHub} alt="GitHub" className='w-10'/>
                 </Link>
                 <Link to='https://www.linkedin.com/in/hizbullah-razik/' target='_blank'>
                 <img src={linnkedIn} alt="linnkedIn" className='w-10'/>
                 </Link>
                 <Link to='https://web.facebook.com/profile.php?id=100074844443707' target='_blank'>
                 <img src={facebook} alt="facebook" className='w-10'/>
                 </Link>
                </div>

                <Down to="About" className='w-10 animate-bounce mx-auto hover:cursor-pointer' smooth duration={800} title='Scroll Down'>
                    <img src={arrowDown} alt="downArrow" className='animate-pulse'/>
                </Down>
              
        </div>


        {/* Image - Side */}
        <div>
            <img src={image} alt="Image" title='Hizbullah' className='w-[250px] rounded-2xl xl:w-[300px]'/>
        </div>
    </main>
  ) 
}

export default Home