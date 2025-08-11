import React from 'react'

export default function Footer() {
    const listNavbar = [
        { name: "Home", link: "#home" },
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Languages", link: "#languages" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];
  return (
       <footer className='bg-gray-700 rounded-lg shadow'>
         <div className='w-full mx-auto p-4 md:flex md:items-center md:justify-between'>
            <span className='text-sm text-gray-400 block w-full text-center sm:text-center md:text-left '>
                © 2025 Alison James. All Rights Reserved.</span>

                <ul className='flex flex-wrap justify-center text-center items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0'>

                    {listNavbar.map((item) => (
                        <li key={item.name}>
                            <a href={item.link} className='hover:text-orange-400 mx-2 sm:mx-4 md:mx-5'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

         </div>

       </footer>

    // <div>
    //   <footer className="bg-[#0d182e] py-8">
    //     <div className="container mx-auto">
    //       <ul className="flex justify-center space-x-4">
    //         {listNavbar.map((item) => (
    //           <li key={item.name}>
    //             <a
    //               href={item.link}
    //               className="text-white hover:text-orange-500"
    //             >
    //               {item.name}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </footer>
    // </div>
  )
}