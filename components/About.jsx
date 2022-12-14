import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Signature from "../public/assets/my-signature.png";
import AboutImg from "../public/assets/avatar.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Introduction</h2>
          <p className="py-2 text-xl text-gray-600">
            With more than 10 years of experience in various industries, I have
            diverse knowledge and skills, unique point of view on problem
            solving, progressive thinking. I am extremely hard working,
            conscientious, always looking for ways to improve processes.
          </p>
          <p className="py-2 text-xl text-gray-600">
            Accordingly, I would be very interested in speaking to you to
            discuss the value that my experience can deliver by being reached at
            (+84) 9.3320.3310. Please feel free to contact me for any
            information on this portfolio. Looking forward to hearing from you.
          </p>
          <p className="py-2 pb-10 text-xl text-gray-600">Sincerely,</p>
          <Image alt="signature" height="80" width="200" src={Signature} />
          <p className="py-2 text-xl text-gray-600">Nguyễn Hải Đăng</p>
          <p>
            Check out my profile on{" "}
            <Link
              href="https://www.hackerrank.com/nguyen_hai_dang"
              className="py-2 text-xl text-gray-600 cursor-pointer"
            >
              <a rel="noreferrer" target="_blank" className="underline">
                HackerRank
              </a>
            </Link>{" "}
            and{" "}
            <Link
              href="https://leetcode.com/derekn/"
              className="py-2 text-xl text-gray-600 cursor-pointer"
            >
              <a rel="noreferrer" target="_blank" className="underline">
                Leetcode
              </a>
            </Link>
            .
          </p>
        </div>
        <div className="max-w-full p-4 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            width={200}
            height={355}
            src={AboutImg}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About