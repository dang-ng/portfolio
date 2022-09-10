import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
      <div id="skills" className='w-full lg:h-screen p-2'>
          <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
              <h2 className='py-4'>What I Can Do</h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                  
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/html-css-js.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>HTML/CSS</h3>
                              <h3>/JavaScipt</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/java.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>Java</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/csharp.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>C#</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/react.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>React</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/tailwind.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>Tailwind</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/node.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>NodeJs</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/github.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>Github</h3>
                          </div>
                      </div>
                  </div>
                  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/mongo.png" width='64px' height='64px' alt='/'/>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <h3>MongoDB</h3>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Skills