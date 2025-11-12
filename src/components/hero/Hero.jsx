import React from 'react'
import Navbar from '../navbar/Navbar'
import Contact2 from '../Contact2.jsx'
import hi from '../../assets/hi.png'
import port from '../../assets/port.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
      <div className='md:h-[720px] h-[900px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r 
      from-orange-600 via-yellow-500 to-red-400 absolute  rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255,165,0)]'>

      </div>
        <Navbar />   
         

        <section data-aos='fade-up' 
        data-aos-delay='250'
        className='text-white body-font z-10 '>
            <div className='container mx-auto flex flex-col md:flex-row items-center px-5 py-12 md:py-24'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
                md:text-left mb-16 md:mb-0 items-center text-center relative mt-20 '>
                    <img src={hi} data-aos='fade-up' data-aos-delay='500' className='absolute top-[-550px] left-44 md:top-[-30px] md:left-[450px] lg:top-[-100px] lg:left-[500px] transform translate-x-1/2 translate-y-1/2 w-20 h-20' />
                    <h1 className='title-font sm:text-3xl text-4xl mb-4 font-bold text-white'>
                        Hello, I'm Alison
                        <br />
                        A Front-end Developer
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        I'm a frontend developer with a passion for creating visually engaging <br/>and functional websites that deliver great user experiences.
                    </p>
                    <div className='flex justify-center'>
                        {/* <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
                            Get Started
                        </button> */}
                        <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full'>
  Hire Me
</button>

                    </div>
                </div>

                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:w-3/4 relative mt-[-20px] md:mt-0'>
                  <img src={port} className='object-cover object-center rounded-full w-full h-auto max-w-xs mx-auto' />
                </div>
            </div>
        </section>
    </div>

  

  )
}
