import React from 'react'
import html from '../assets/html-svgrepo-com.svg';
import css from '../assets/css-svgrepo-com.svg';
import javascript from '../assets/javascript-svgrepo-com.svg';
import tailwindcss from '../assets/tailwind-css-svgrepo-com.svg';
import materialui from '../assets/material-ui-svgrepo-com.svg';
import java from '../assets/java-svgrepo-com.svg';
import reactjs from '../assets/reactjs-svgrepo-com.svg';
import springboot from '../assets/spring-boot-svgrepo-com.svg';

const Experience = () => {

    const technologies = [
        {
            id: 1,
            technology: "HTML",
            technologyImage: `${html}`
        },
        {
            id: 2,
            technology: "CSS",
            technologyImage: `${css}`
        },
        {
            id: 3,
            technology: "JavaScript",
            technologyImage: `${javascript}`
        },
        {
            id: 4,
            technology: "ReactJS",
            technologyImage: `${reactjs}`
        },
        {
            id: 5,
            technology: "TailwindCSS",
            technologyImage: `${tailwindcss}`
        },
        {
            id: 6,
            technology: "Material UI",
            technologyImage: `${materialui}`
        },
        {
            id: 7,
            technology: "JAVA",
            technologyImage: `${java}`
        },
        {
            id: 8,
            technology: "Spring Boot",
            technologyImage: `${springboot}`
        },

    ]

  return (
   <section className='max-w-screen-xl p-5 mx-auto min-h-screen' name="Experience">
     {/* Heading & Sub Heading */}
     <div className='mt-20 flex flex-col gap-8 mb-20'>
            <h2 className='font-bold text-xl lg:text-2xl text-secondary underline underline-offset-8 '>Experience</h2>

            <p className='text-secondary text-xl'>
                These are the technologies I've worked with <span className='text-2xl'>💻</span>
            </p>
        </div>

        {/* Technologies */}
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 lg:gap-8'>

            {technologies.map(({id, technology,technologyImage})=>(
                <div className=' bg-white/15 shadow-2xl rounded-lg flex flex-col items-center gap-5 p-5 md:gap-8' key={id}>
                        <div className='w-[35%] animate-pulse duration-75'>
                            <img src={technologyImage} alt="Image"/>
                        </div>

                        <div className='text-meduim md:font-bold text-secondary tracking-widest text-sm lg:text-lg'>
                            <h2>{technology}</h2>
                        </div>
                </div>
            ))}

        </div>
   </section>
  )
}

export default Experience