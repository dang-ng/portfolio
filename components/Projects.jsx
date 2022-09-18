import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UrlShortener from "../public/assets/projects/url-shortener.png";
import Portfolio from '../public/assets/projects/portfolio.png'
import Calculator from '../public/assets/projects/calculator.png'
import Todoapp from '../public/assets/projects/todoapp.png'
import Weather from "../public/assets/projects/weather-app.png";
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Personal Portfolio"
            backgroundImg={Portfolio}
            projectUrl="/portfolio"
            technologies="ReactJs, NextJs, Tailwind CSS"
          />
            <ProjectItems
              title="Mini Project: Calculator"
              backgroundImg={Calculator}
              projectUrl="/calculator"
              technologies="HTML, CSS, JavaScript"
            />
          <ProjectItems
            title="URL shortener and File Sharing"
            backgroundImg={UrlShortener}
            projectUrl="/urlShortener"
            technologies="Python, Flask, HTML, Bootstrap"
          />
          <ProjectItems
            title="Mini Project: To Do App"
            backgroundImg={Todoapp}
            projectUrl="/todoapp"
            technologies="VueJs, ViteJs, CSS"
          />
          <ProjectItems
            title="Mini Project: Weather Forecast"
            backgroundImg={Weather}
            projectUrl="/weather"
            technologies="React JS, Tailwind and OpenWeatherMap API"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects