import React from 'react'
import FoodieApp from '../assets/Foodie-app.png';
import eCommerceApp from '../assets/e-commerce.png';
import NoteFlow from '../assets/noteflow.png';
import gitHub from '../assets/github-svgrepo-com (2).svg';
import link from '../assets/link-svgrepo-com.svg';

const Projects = () => {

    const projects = [
        {
            id: 1,

            projectImage: `${FoodieApp}`,

            projectTitle: 'Foodie',

            description: 'This Food App built on top of React and TailwindCSS, Pulling all of the data/images to simulate an API response. Filter through data/images using the javascript array methods.',
            
            demo: 'https://foodie-eats-app.netlify.app/',

            code: 'https://github.com/Hizbucodes/Foodie',

            techStack: ['React', 'TailwindCSS'],

        },

        {
            id:2,

            projectImage: `${eCommerceApp}`,

            projectTitle: 'E-COMMERCE',

            description: 'With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.',

            demo: 'https://hizbu-shoppingcart.netlify.app/',

            code: 'https://github.com/Hizbucodes/E-Commerce-Site',

            techStack: ['React', 'TailwindCSS'],
        },
        {
            id: 3,

            projectImage: `${NoteFlow}`,

            projectTitle: 'NOTE-FLOW',

            description: 'Allowing users to easily create, edit, and delete notes. The app provides a user-friendly interface for managing personal notes efficiently.',
      
            demo: 'https://note-flow.netlify.app/',

            code: 'https://github.com/Hizbucodes/NoteFlow',

            techStack: ['React', 'CSS'],
        },

    ]

  return (
    <section className='max-w-[1640px] min-h-screen p-5 mx-auto' name="Projects">
        {/* Heading & Sub Heading */}
        <div className='mt-20 flex flex-col gap-8 mb-20'>
            <h2 className='font-bold text-xl lg:text-2xl text-secondary underline underline-offset-8 '>Portfolio</h2>

            <p className='text-secondary text-xl'>
                Check out some of my work right here 🧩
            </p>
        </div>

        {/* Portfolio */}
        <div className='flex flex-col items-center gap-12'>
        {projects.map(({id, projectImage, projectTitle, description, demo, code, techStack})=>(
            <div className='bg-white/15 p-5 rounded-3xl shadow-2xl flex gap-12 flex-col xl:flex-row' key={id}>
                    <div className='rounded-2xl'>
                    <img src={projectImage} alt="Foodie-App" className='rounded-2xl lg:max-w-screen-md'/>
                    </div>
                    <div className='flex justify-around items-center flex-col gap-12 xl:gap-0'>
                        <div className='text-secondary font-bold text-2xl'>
                            <h2>{projectTitle}</h2>
                        </div>
                        <div className='text-primary text-center'>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className='flex gap-4 font-bold'>
                            <div className='bg-secondary px-8 py-4 rounded-xl'>
                                <p>{techStack[0]}</p>
                            </div>

                            <div className='bg-secondary px-8 py-4 rounded-xl'>
                                <p>{techStack[1]}</p>
                            </div>
                        </div>
                    <div className='flex gap-12 font-bold'>
                    <a href={demo} target='_blank' className='text-secondary border rounded-lg py-4 px-8 flex items-center gap-4 hover:scale-110 duration-300'>Demo <img className='w-5' src={link} alt="github" /></a>
                    <a href={code} target='_blank' className='text-secondary border rounded-lg py-4 px-8 flex items-center gap-4 hover:scale-110 duration-300'>Code <img className='w-5' src={gitHub} alt="link" /></a>
                    </div>
                    </div>
            </div>
                        
                    ))}
            
        </div>
    </section>
  )
}

export default Projects