import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Bootcamp from "../public/assets/projects/frontend-bootcamp.png";
import { RiRadioButtonFill } from 'react-icons/ri'

const bootcamp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Bootcamp}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mini Frontend Page: Frontend Bootcamp</h2>
          <h3>HTML, Bootstrap, Custom CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>A simple, responsive Frontend Bootcamp website with MapBox API.</p>
          <br></br>

          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://dang-ng.github.io/frontend-bootcamp/"
            >
              Link
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/dang-ng/frontend-bootcamp"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Custom CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MapBox API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default bootcamp;