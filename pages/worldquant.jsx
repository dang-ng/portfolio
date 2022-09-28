import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import WorldquantImg from "../public/assets/certificates/worldquant.png";
import { RiRadioButtonFill } from 'react-icons/ri'

const Worldquant = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={WorldquantImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Master of Science in Financial Engineering</h2>
          <h3>Two-year Master Degree from WorldQuant University</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Master of Science in Financial Engineering</p>
          <h2>Class Overview</h2>
          <br></br>
          <p>
            Financial Engineering is a multidisciplinary field that combines
            financial theory, mathematics applications, engineering methods, and
            programming practices. Financial engineers apply mathematical and
            quantitative methods to financial problems.
          </p>
          <br />
          <p>
            Our fully accredited, two-year online program offers nine
            instructor-guided courses and a Capstone project with a unique
            emphasis on applied learning and collaboration. Students are also
            given instruction to help them develop the presentation skills
            needed to succeed in professional business settings. By working
            together to address real-world problems, our students not only
            master essential skills but also learn to work effectively and to
            meet the growing "soft skills" expectation of global employers.
          </p>
          <br />
          <p>
            From Python and machine learning to econometric modeling, our
            students master the skills that modern employers demand.
          </p>
          <br></br>

          <button className="px-8 py-2 mt-4 mr-8">
            <a rel="noreferrer" target="_blank" href="#">
              Certificate ID
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Learned</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Machine Learning
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Econometric Modeling
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

export default Worldquant;