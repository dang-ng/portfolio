import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Portfolio from "../public/assets/projects/portfolio.png";
import { RiRadioButtonFill } from 'react-icons/ri'

const urlShortener = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Portfolio}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Personal Portfolio</h2>
          <h3>ReactJs, NextJs, Tailwind CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Just want to talk more about this website that you're currently in because i'm really proud of it! :)
          </p>
          <br />
          <p>
            This is made by 2 really hot web frameworks ReactJs and NextJs so i decided to dive in to make new refresh online CV and learn these great technologies at the same time. So, welcome to my home! :)
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a target="_blank" href="https://youtu.be/n9oz_E9DIsM">
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a target="_blank" href="https://github.com/derek089/url-shortener">
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
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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

export default urlShortener