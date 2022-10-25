import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { useRouter } from 'next/router';
import NavLogo from "../public/assets/navLogo.png";
import NavLogo2 from "../public/assets/navLogo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  // useEffect(() => {
  //   const linkInside = () => {
  //     if ((
  //     router.asPath === '/urlShortener' ||
  //     router.asPath === '/portfolio' ||
  //     router.asPath === '/calculator' ||
  //     router.asPath === '/todoapp' ||
  //     router.asPath === '/cs50' ||
  //     router.asPath === '/funix' ||
  //     router.asPath === '/bootcamp' ||
  //     router.asPath === '/weather' ||
  //     router.asPath === '/guessnumber' ||
  //     router.asPath === '/dicegame' ||
  //     router.asPath === '/worldquant'
  //     ) && window.scrollY >= 200) {
  //       setNavBg("#ecf0f3");
  //       setLinkColor("#1f2937");
  //     } else if ((
  //         router.asPath === "/urlShortener" ||
  //         router.asPath === "/portfolio" ||
  //         router.asPath === "/calculator" ||
  //         router.asPath === "/todoapp" ||
  //         router.asPath === "/cs50" ||
  //         router.asPath === "/funix" ||
  //         router.asPath === "/bootcamp" ||
  //         router.asPath === "/weather" ||
  //         router.asPath === "/guessnumber" ||
  //         router.asPath === "/dicegame" ||
  //       router.asPath === "/worldquant"
  //     ) && window.scrollY < 200) {
  //       setNavBg("transparent");
  //       setLinkColor("#ecf0f3");
  //     }
  //   };
  //   window.addEventListener("scroll", linkInside);
  // }, [router]);

  useEffect(() => {
    if (router.asPath === '/urlShortener' ||
      router.asPath === '/portfolio' ||
      router.asPath === '/calculator' ||
      router.asPath === '/todoapp' ||
      router.asPath === '/cs50' ||
      router.asPath === '/funix' ||
      router.asPath === '/bootcamp' ||
      router.asPath === '/weather' ||
      router.asPath === '/guessnumber' ||
      router.asPath === '/dicegame' ||
      router.asPath === '/worldquant'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
},[router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
    }
    }
    window.addEventListener('scroll', handleShadow)
},[])

    return (
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src={NavLogo}
              alt="/"
              height="100"
              width="100"
            />
          </Link>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#certificates">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Certificates
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div
              onClick={handleNav}
              style={{ color: `${linkColor}` }}
              className="md:hidden cursor-pointer"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    className="cursor-pointer"
                    src={NavLogo}
                    width="87"
                    height="87"
                    alt="/"
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build something great together.
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#certificates">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Certificates
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/h-dang/"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/dang-ng"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://t.me/nhdang"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsTelegram />
                    </div>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://zalo.me/0933203310"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <SiZalo />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar