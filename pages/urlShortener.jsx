import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import UrlShortener from "../public/assets/projects/url-shortener.png";
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
          src={UrlShortener}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">File Sharing and URL Shortener</h2>
          <h3>Python, Flask, HTML, Bootstrap</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            There maybe many File sharing &amp; URL shortener projects out
            there, but i found it quite great to start with because the project
            require to include many technologies learned in the lecture like
            python, flask, bootstrap, storing database and user cookies ...
            which is really help me to dive in and understand more about apply
            these technologies to real life.
          </p>
          <br></br>
          <p>
            This app includes 2 parts: URL shortener and file upload into short
            URL. Both are great for sharing with friends.{" "}
          </p>
          <br></br>
          <p>
            The first part is URL shortener, just need to input your desired URL
            you want to save for sharing/later uses, click Shorten and voilà,
            new URL has been created Later when needed to share with your
            friends or public elsewhere.{" "}
          </p>
          <br></br>
          <p>
            The second part is file sharing, which also under the form of new
            URL. Click Choose File to select any file that you want to share.
            Then you will have the new URL generated for sharing too, so they
            can see your file, or new photos when click your link!
          </p>
          <br></br>

          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://url-shortener-njtb5iyc2a-as.a.run.app/"
            >
              Link
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://youtu.be/n9oz_E9DIsM"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/derek089/url-shortener"
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
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flask
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
            </div>
          </div>
        </div>
        <Link href="/portfolio/cs50">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default urlShortener;