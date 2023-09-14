import "./status.css";
// assets
import clear from "../../assets/clear.png";
import humidity from "../../assets/humidity.png";
import windSpeed from "../../assets/wind.png";
// api
import useSwr from "swr";
import { useState } from "react";
import axios from "axios";
export default function Status() {
  let key = "7ff71e54f6cabfd1b7c240c99b2203bd";
  // !swr
  // @ts-ignore
  let fetcher = (...args) => axios.get(...args);
  let { data, isValidating } = useSwr(
    `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${key}`,
    fetcher
  );
  console.log(data?.data.name);
  return (
    <>
      <div className="border-2 border-red-500 flex flex-col items-center w-[80%]">
        <div className="border-2 border-black">
          <img src={clear} alt="img" className="h-[15rem] " />
        </div>
        {/*  */}
        <div>
          <div className="text-center text-white">
            <div className="text-[3rem] font-medium">
              {((data?.data.main.temp - 32) / 1.8).toFixed(0)}c
            </div>
            <div className="text-[2.5rem] mb-10">{data?.data.name}</div>
          </div>
        </div>
        {/*  */}
        <div className="flex border-2 border-red-500 w-full  justify-between">
          <div className="flex items-center ">
            <img src={humidity} alt="image" className="h-[2rem]" />
            <div className="text-[1.7rem] ml-4 text-white">
              <p>{data?.data.main.humidity}%</p>
              <p className="text-[1.2rem]">humidity</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <img src={windSpeed} alt="image" className="h-[2.5rem]" />
            <div className="text-[1.7rem] ml-4 text-white">
              <p>{data?.data.wind.speed} km/h</p>
              <p className="text-[1.2rem]">wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
