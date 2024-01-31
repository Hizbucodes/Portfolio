import React from 'react';
import gitHub from '../assets/github-svgrepo-com (2).svg';
import linnkedIn from '../assets/linkedin-svgrepo-com.svg';

const Footer = () => {
    const currentYear = new Date();
  return (
    <footer className='w-full h-[20vh] bg-white/15 flex flex-col items-center justify-around text-secondary lg:flex-row text-center px-20'>
            <div className='text-sm font-bold lg:text-xl'>
                <p>
                {currentYear.getFullYear()} portfolio - designed & developed by Hizbullah
                </p>
            </div>

            <div className='flex items-center gap-12 font-bold'>
               <a href='https://github.com/Hizbucodes' target='_blank'>
               <div className=' flex items-center gap-4'>
                    <span className='text-md lg:text-xl'>Github</span>
                    <span><img src={gitHub} alt="github" className='w-6 lg:w-8'/></span>
                </div>
               </a>

              <a href='https://www.linkedin.com/in/hizbullah-razik/' target='_blank'>
              <div className=' flex items-center gap-4'>
                    <span className='text-md lg:text-xl'>LinkedIn</span>
                    <span><img src={linnkedIn} alt="linkedIn" className='w-6 lg:w-8'/></span>
                </div>
              </a>
            </div>
    </footer>
  )
}

export default Footer