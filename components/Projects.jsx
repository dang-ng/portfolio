import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UrlShortener from "../public/assets/projects/url-shortener.png";
import CryptoImg from '../public/assets/projects/crypto.jpg'
import NetflixIgm from '../public/assets/projects/netflix.jpg'
import TwitchIgm from '../public/assets/projects/twitch.jpg'
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
            title="URL shortener and File Sharing"
            backgroundImg={UrlShortener}
            projectUrl="/urlShortener"
            technologies="Python, Flask, HTML, Bootstrap"
          />
          <ProjectItems
            title="Crypto App"
            backgroundImg={CryptoImg}
            projectUrl="/property"
            technologies="Python, Flask, HTML, Bootstrap"
          />
          <ProjectItems
            title="Property Finder"
            backgroundImg={NetflixIgm}
            projectUrl="/property"
            technologies="Python, Flask, HTML, Bootstrap"
          />
          <ProjectItems
            title="Property Finder"
            backgroundImg={TwitchIgm}
            projectUrl="/property"
            technologies="Python, Flask, HTML, Bootstrap"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects