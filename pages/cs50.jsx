import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CS50 from "../public/assets/certificates/CS50x.png";
import { RiRadioButtonFill } from 'react-icons/ri'

const CS50x = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={CS50}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            Harvard&apos;s Introduction to Computer Science
          </h2>
          <h3>Ten-week intensive course from Harvard University</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Harvard&apos;s CS50x</p>
          <h2>Class Overview</h2>
          <br></br>
          <p>
            Introduction to the intellectual enterprises of computer science and
            the art of programming.
          </p>
          <br></br>
          <p>
            This course including ten problem sets, eight labs, and one final
            project, teaches students how to think algorithmically and solve
            problems efficiently. Topics include abstraction, algorithms, data
            structures, encapsulation, resource management, security, software
            engineering, and web programming.
          </p>
          <br></br>

          <p>
            Languages include C, Python, and SQL plus HTML, CSS, and JavaScript.
            Problem sets inspired by the arts, humanities, social sciences, and
            sciences. Course culminates in a final project.{" "}
          </p>
          <br></br>
          <p>
            Among the overarching goals of this course are to inspire students
            to explore unfamiliar waters, without fear of failure, create an
            intensive, shared experience, accessible to all students, and build
            community among students.
          </p>
          <br></br>

          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://cs50.harvard.edu/certificates/728ac79d-5a23-4598-9e81-e132c0ac25db"
            >
              Certificate ID
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://dang-ng.github.io/portfolio/urlShortener"
            >
              Final Project: File Sharing and URL Shortener
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/dang-ng/cs50"
            >
              All assignments and homeworks
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Learned</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />C
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Algorithms &amp; Data Structures
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python &amp; Flask framework
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML, CSS, JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cybersecurity
              </p>
            </div>
          </div>
        </div>
        <Link href="/#certificates">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default CS50x;