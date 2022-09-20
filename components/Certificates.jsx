import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CS50 from "../public/assets/certificates/CS50x.png";
import Funix from "../public/assets/certificates/funix.png";


import ProjectItems from './ProjectItems'

const Certificates = () => {
  return (
    <div id="certificates" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Certificates
        </p>
        <h2 className="py-4">What I Have Achieved</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Harvard's Introduction to Computer Science"
            backgroundImg={CS50}
            projectUrl="/cs50"
            technologies="10-week intensive course from Harvard's University"
          />
          <ProjectItems
            title="FUNIX entrepreneurship program"
            backgroundImg={Funix}
            projectUrl="/funix"
            technologies="6-month job-ready course"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificates