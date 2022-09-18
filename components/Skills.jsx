import React from 'react'
import Image from 'next/image'
import HTMLCSSJS from '../public/assets/skills/html-css-js.png'
import Java from "../public/assets/skills/java.png"
import Csharp from "../public/assets/skills/csharp.png"
import ReactImg from "../public/assets/skills/react.png"
import Tailwind from "../public/assets/skills/tailwind.png"
import Nodejs from "../public/assets/skills/node.png"
import Github from "../public/assets/skills/github.png"
import Mongodb from "../public/assets/skills/mongo.png"
import Nextjs from "../public/assets/skills/nextjs.png";
import Python from "../public/assets/skills/python.png";
import Vite from "../public/assets/skills/vitejs.png";
import Vue from "../public/assets/skills/vue.png";
import Bootstrap from "../public/assets/skills/tailwind.png";
import Flask from "../public/assets/skills/flask.png";


const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Technologies I've been working on</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTMLCSSJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML/CSS</h3>
                <h3>/JavaScipt</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Java} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Csharp} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>C#</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nextjs} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Vite} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Vite JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Vue} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Vue JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Bootstrap} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Flask} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Flask</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills