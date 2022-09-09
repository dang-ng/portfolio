import React from 'react'
import Image from "next/image";


const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am?</h2>
          <p className="py-2 text-gray-600">
            10-year experience in various industries. Have diverse knowledge and
            skills. Unique point of view on problem solving, progressive
            thinking and extreme hardworking.
          </p>
          <p className="py-2 text-gray-600">
            10-year experience in various industries. Have diverse knowledge and
            skills. Unique point of view on problem solving, progressive
            thinking and extreme hardworking.
          </p>
          <p className="py-2 text-gray-600">
            10-year experience in various industries. Have diverse knowledge and
            skills. Unique point of view on problem solving, progressive
            thinking and extreme hardworking.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p4 hover:scale-105 ease-in duration-300">
          <Image className='rounded-xl'
            width={200}
            height={200}
            src="/../public/assets/about.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About