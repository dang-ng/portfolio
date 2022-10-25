import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import FunixImg from "../public/assets/certificates/CS50x.png";
import { RiRadioButtonFill } from 'react-icons/ri'

const Funix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={FunixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">FUNIX entrepreneurship program</h2>
          <h3>Six-month job-ready course</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>FUNIX entrepreneurship program</p>
          <h2>Class Overview</h2>
          <br></br>
          <p>
            The course serves as a preparation and also is a prerequisite for
            students to continue the next journey in Professional Software
            development career. The goal of the course is to help students
            understand web programming with HTML/CSS/JavaScript and the core
            Java programming language and object-oriented programming so that
            they can visualize and model real-world problems in the computer
            world.
          </p>
          <br></br>
          <p>The course is divided into 4 main subjects:</p>
          <br />
          <ul>
            <h4>SUBJECT 1: Prepare the foundation</h4>
            <li>Building the first website</li>
            <li>Programming techniques with JavaScript & Bootstrap</li>
          </ul>
          <br />
          <ul>
            <h4>SUBJECT 2: Deep expertise Java programmer</h4>
            <li>Object Oriented Programming foundation</li>
            <li>Data structures and algorithms</li>
          </ul>
          <br />
          <ul>
            <h4>SUBJECT 3: SQL Database systems</h4>
            <li>Database systems</li>
            <li>T-SQL, Microsoft SQL Server and Azure Data Studio</li>
          </ul>
          <br />
          <ul>
            <h4>SUBJECT 4: Java Web & Mobile Developments</h4>
            <li>Web application development with Spring framework</li>
            <li>Mobile programming with Android Studio</li>
          </ul>
          <br />
          <p>
            For each lesson, students have to attentively watch lecture videos,
            carefully read the text and the summary. In addition, students have
            to complete the quizs/labs at the end of each lesson and the project
            at the end of each module. During the learning process, students
            will actively connect directly with Mentors to ask questions and get
            answers about the course&apos;s contents.
          </p>
          <br></br>

          {/* <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://cs50.harvard.edu/certificates/728ac79d-5a23-4598-9e81-e132c0ac25db"
            >
              Certificate ID
            </a>
          </button> */}
          <button className="px-8 py-2 mt-4 mr-8">
            <a rel="noreferrer" target="_blank" href="/portfolio/bootcamp">
              Homework: Frontend Bootcamp
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://dang-ng.github.io/Assignment-03-Stater/"
            >
              Final Assignment Subject 1: Responsive and Interactive CV
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/dang-ng/FUNIX-projects/tree/master/PRO192x_Project_FX18891/vn.funix.fx18891.java"
            >
              Final Assignment Subject 2: Java banking management system
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Learned</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML, CSS, JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Java Object Oriented Programming
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Data structures and algorithms
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Database systems
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

export default Funix;