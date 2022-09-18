import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Certificates from '../components/Certificates'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Derek - Full Stack Developer</title>
        <meta name="Portfolio" content="My Portfolio" />
        <link rel="icon" href="/../public/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Certificates/>
      <Projects />
      <Contact />
    </div>
  )
}
