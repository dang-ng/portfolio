import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UrlShortener from "../public/assets/projects/url-shortener.png"
import Portfolio from '../public/assets/projects/portfolio.png'
import Calculator from '../public/assets/projects/calculator.png'
import Todoapp from '../public/assets/projects/todoapp.png'
import Weather from "../public/assets/projects/weather-app.png"
import Bootcamp from '../public/assets/projects/frontend-bootcamp.png'
import Guessnumber from "../public/assets/projects/guessnumber.png"
import Dicegame from "../public/assets/projects/dicegame.png"

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
            title="Mini Project: Calculator"
            backgroundImg={Calculator}
            projectUrl="/calculator"
            technologies="HTML, CSS, JavaScript"
          />
          <ProjectItems
            title="Mini Game: Guess My Number!"
            backgroundImg={Guessnumber}
            projectUrl="/guessnumber"
            technologies="HTML, CSS, JavaScript"
          />
          <ProjectItems
            title="Mini Game: Dice Roller"
            backgroundImg={Dicegame}
            projectUrl="/dicegame"
            technologies="HTML, CSS, JavaScript"
          />
          <ProjectItems
            title="Mini Project: To Do App"
            backgroundImg={Todoapp}
            projectUrl="/todoapp"
            technologies="VueJS, ViteJS, CSS"
          />
          <ProjectItems
            title="Personal Portfolio"
            backgroundImg={Portfolio}
            projectUrl="/portfolio"
            technologies="ReactJS, NextJS, Tailwind CSS"
          />
          <ProjectItems
            title="URL shortener and File Sharing"
            backgroundImg={UrlShortener}
            projectUrl="/urlShortener"
            technologies="Python, Flask, HTML, Bootstrap"
          />
          <ProjectItems
            title="Mini Project: Weather Forecast"
            backgroundImg={Weather}
            projectUrl="/weather"
            technologies="ReactJS, Tailwind and OpenWeatherMap API"
          />
          <ProjectItems
            title="Mini Frontend Page: Frontend Bootcamp"
            backgroundImg={Bootcamp}
            projectUrl="/bootcamp"
            technologies="HTML, Bootstrap, Custom CSS"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects