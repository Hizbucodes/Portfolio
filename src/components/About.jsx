import React from 'react'
import aboutImage from '../assets/About-Image.jpg'

const About = () => {
  return (
    <section className='max-w-screen-xl mx-auto flex items-center justify-center lg:justify-between h-auto p-5 flex-col lg:flex-row gap-8' name="About">
        {/* About - Image */}
        <div className="about-image ">
            <img src={aboutImage} alt="Image" className='w-[250px] rounded-2xl lg:w-[400px]'/>
        </div>

        {/* About - Description */}
        <div className='flex flex-col gap-8 lg:w-[50%] text-center lg:text-start'>
            <div>
            <h2 className='font-bold text-xl lg:text-2xl text-secondary underline underline-offset-8'>About me</h2>
            </div>
            <div>
            <h1 className='font-medium text-2xl text-primary lg:text-4xl'>
            A dedicated Full - Stack Developer <br/>
based in Sri Lanka, Kandy 📍
            </h1></div>
            <div>
            <p className='text-secondary'>
            I'm currently in the third year of my degree, pursuing my passion for web development and design.
            My skill set includes proficiency in HTML, CSS, JavaScript, and I'm well-versed in popular web development frameworks like TailwindCSS and ReactJS. Additionally, I have experience working with Java. I'm a creative enthusiast who finds joy in crafting websites that are not only visually appealing but also user-friendly and functional.
            </p>
            </div>
        </div>
    </section>
  )
}

export default About