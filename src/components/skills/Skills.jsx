import React from 'react'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import web from '../../assets/web.png' 
import css from '../../assets/css.png'
import html from '../../assets/html.jpeg'
import tailwind from '../../assets/tailwind.png'
import git from '../../assets/git.png'



export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className=' container flex flex-wrap px-4 py-24 mx-auto items-center'>
          <div 
          data-aos='fade-up'
            data-aos-delay='250'
           className='md:w-1/2 md:pr-8 md:border-r md:border-b-0 mb-10 pd-10 border-b border-orange-400'>
            <h1 data-aos='fade-right'
            data-aos-delay='500' 
            className='sm:text-4xl text-2xl font-medium title-font  mb-2 text-white'>Skills</h1>
            <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
             I have strong skills in HTML, CSS, and JavaScript, which I use to build responsive and interactive websites. I work with React to create dynamic user interfaces and use Tailwind CSS for efficient, clean styling. I'm also proficient in Git for version control and smooth team collaboration.
            </p>
            </div>

            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w 1/2 md:pl-12 '>
             <nav className='flex flex-wrap list-none mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className=' rounded-full w-20 h-20 object-cover' />
                </li>
                 <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={css} alt="" className=' rounded-full w-20 h-20 object-cover' />
                </li>
                 <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={js} alt="" className=' rounded-full w-20 h-20 object-cover' />
                </li>
                 <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className=' rounded-full w-20 h-20 object-cover' />
                </li>
                  <li className='lg:w-1/3 mb-4 w-1/2'>
                      <img src={tailwind} alt="" className=' rounded-full w-20 h-20 object-cover' />
                    </li>
                  <li className='lg:w-1/3 mb-4 w-1/2'>
                      <img src={git} alt="" className=' rounded-full w-20 h-20 object-cover' />
                  </li>
             </nav>
</div>
        </div>
    </section>
      

  )
}
