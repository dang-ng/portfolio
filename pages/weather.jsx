import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Weather from "../public/assets/projects/weather-app.png";
import { RiRadioButtonFill } from 'react-icons/ri'

const weather = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Weather}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mini Project: Weather Forecast</h2>
          <h3>React JS, Tailwind and OpenWeatherMap API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A weather app with React JS and Tailwind CSS using OpenWeatherMap
            API. The build will also include hourly and daily forecasts.
            Technologies used for this project are JavaScript, React, Tailwind
            CSS, luxon, unicons, and react-toastify. It will fetch data from
            OpenWeather endpoints, getting temperature, max min degree,
            humidity, real feel, sunrise, sunset, hourly, and daily forecast. It
            also displays the local time at the selected location. For input,
            there are some quick links on top along with a text box for
            searching a city and also a current location-based search.
          </p><br></br>

          <button className="px-8 py-2 mt-4 mr-8">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/dang-ng/weather-app"
            >
              Link
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OpenWeatherMap API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default weather;