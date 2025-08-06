import React from 'react';
import js from '../../assets/js.png';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      {/* Background gradient circles */}
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl opacity-40 rounded-full">
          <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full"></div>
        </div>
      </div>

      {/* Experience Content */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Side: Image with gradient background */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className=" sm:h-[200px] md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-30 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0" />
          <img
            src={js}
            alt="JavaScript Logo"
            className="object-cover sm:w-[200px] md:w-[300px] md:h-[450px]  object-center rounded relative z-10"
          />
        </div>

        {/* Right Side: Text Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
            Experience
          </h1>

          <h2 className="title-font font-bold text-white sm:text-2xl">2023 :</h2>
          <p className="mb-8 text-white leading-relaxed">
           I have hands-on experience building modern, responsive web interfaces from scratch. I’ve developed fully functional front-end projects using React and Tailwind, focusing on clean UI/UX and mobile responsiveness. My workflow includes version control with Git and GitHub, allowing me to manage code efficiently and collaborate on team projects. I’ve also deployed web apps and understand the development lifecycle from design to production.
          </p>

          <h2 className="title-font font-bold text-white sm:text-2xl">2024 :</h2>
          <p className="mb-8 text-white leading-relaxed">
            I have continued to enhance my skills in web development, taking on more complex projects and exploring new technologies. My focus has been on improving performance and accessibility in my applications, ensuring a seamless experience for all users. I have also been involved in mentoring beginners, sharing my knowledge and best practices to help them grow.
      
    
          </p>
        </div>
      </div>
    </section>
  );
}
