import React from 'react';
import phone from '../assets/phone-svgrepo-com.svg';
import mail from '../assets/email-svgrepo-com.svg';
import address from '../assets/address-svgrepo-com.svg';
import send from '../assets/send-svgrepo-com.svg';

const Contact = () => {

    const myContact = [
        {
            id: 1,
            image: `${phone}`,
            heading: "Call me",
            subHeading: "+94 77 923 4667",
        },
        {
            id: 2,
            image: `${mail}`,
            heading: "Email Me",
            subHeading: "hizbusoftware@gmail.com",
        },
        {
            id: 3,
            image: `${address}`,
            heading: "Address",
            subHeading: "70/1A, Kahawaththa, Ambathenna",
        },
    ]



  return (
    <section className='max-w-[1640px] min-h-screen p-5 mx-auto' name="Contact">
        {/* Heading & Sub Heading */}
        <div className='mt-20 flex flex-col gap-8 mb-20'>
            <h2 className='font-bold text-xl lg:text-2xl text-secondary underline underline-offset-8 '>Contact</h2>

            <p className='text-secondary text-xl'>
            Let's Get In Touch 👇
            </p>
        </div>

        {/* Contact Section */}

    <div className='w-full flex-col flex md:flex-row items-center md:items-start justify-around gap-12 md:gap-0'>
        <div className="left-side ">
                    <div className="phone text-primary flex flex-col justify-center gap-8 ">
                         {myContact.map(({id, image, heading, subHeading})=>(
                              <div key={id} className='flex gap-8'>

                                <div className='w-8 md:w-12'>
                                    <img src={image} alt="phone"/>
                                </div>
        
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-md md:text-xl font-bold'>{heading}</h2>
                                    <p className='text-secondary'>{subHeading}</p>
                                </div>

                              </div>
                         ))}
                    </div>

        
        </div>

        <div className="right-side md:w-1/2 w-full">
                    <form action='https://getform.io/f/2bce0c21-ac92-4249-9de5-86e9085cfaab' method='POST' className='flex flex-col items-start gap-8 text-secondary font-medium'>
                        <input 
                        type="text"
                        placeholder='Your Name'
                        className='w-full p-6 bg-transparent rounded-2xl border-2 focus:outline-none'
                        name='name'
                        required
                        />

                        <input 
                        type="email"
                        placeholder='Your Email'
                        className='w-full p-6 bg-transparent rounded-2xl border-2 focus:outline-none'
                        name='email'
                        required
                        />

                        <textarea
                        rows={10}
                            placeholder='Your Message'
                            className='w-full p-6 bg-transparent rounded-2xl border-2 focus:outline-none resize-none'
                            name='message'
                            required
                            
                        />

                        <button className='bg-white/15 md:py-5 md:px-16 py-3 px-5 rounded-lg flex items-center gap-4 text-xl hover:scale-105 duration-300'>
                            <span>Send</span> <img src={send} alt="send" className='w-6'/>
                        </button>
                    </form>
        </div>  
    </div>

    </section>


  )
}

export default Contact