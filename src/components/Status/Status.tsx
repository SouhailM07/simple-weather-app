import "./status.css";
//
import { useSelector } from "react-redux";
// assets
import clear from "../../assets/clear.png";
import clouds from "../../assets/clouds.png";
import drizzle from "../../assets/drizzle.png";
import mist from "../../assets/mist.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import wind from "../../assets/wind.png";
import humidity from "../../assets/humidity.png";
import windSpeed from "../../assets/wind.png";
// ! api
import useSwr from "swr";
import axios from "axios";

export default function Status() {
  // ! api stuff
  let location = useSelector((state: any) => state.location.location);
  let key = "7ff71e54f6cabfd1b7c240c99b2203bd";
  // *swr
  // @ts-ignore
  let fetcher = (...args) => axios.get(...args);
  let { data, isLoading } = useSwr(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    fetcher
  );
  // ! weather photos

  let weatherPng = {
    clear: clear,
    clouds: clouds,
    drizzle: drizzle,
    rain: rain,
    wind: wind,
    mist: mist,
    snow: snow,
  };

  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     // Handle the user's location data here
  //     console.log(position);
  //   });
  // }
  // ! img source
  let img = "";
  if (data) img = weatherPng[(data?.data.weather[0].main).toLowerCase()];

  return (
    <>
      <div className="flex flex-col items-center w-[80%]">
        <div>
          <img src={img} alt="img" className="h-[15rem] " />
        </div>
        {/*  */}
        <div>
          <div className="text-center text-white">
            <div className="text-[3.5rem] font-semibold">
              {(data?.data.main.temp - 275).toFixed(0) == "NaN" ? (
                <span>Error</span>
              ) : (
                <span>
                  {isLoading
                    ? "Loading"
                    : (data?.data.main.temp - 275).toFixed(0)}
                  &#x2103;
                </span>
              )}
            </div>
            <div className="text-[2.5rem] mb-8">
              {isLoading ? "Loading" : data?.data.name}
            </div>
          </div>
        </div>
        {/* */}
        <div id="mini-status" className="flex w-full  justify-between">
          <div className="flex items-center ">
            <img src={humidity} alt="image" className="h-[2rem]" />
            <div className="text-[1.7rem] ml-4 text-white">
              <p>
                {isLoading
                  ? "Loading"
                  : data?.data.main.humidity + 22 || "Error "}
                %
              </p>
              <p className="text-[1.2rem]">humidity</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <img src={windSpeed} alt="image" className="h-[2.5rem]" />
            <div className="text-[1.7rem] ml-4 text-white">
              <p>
                {isLoading
                  ? "Loading"
                  : (data?.data.wind.speed * 2 + 2).toFixed(0) || "Error"}
                km/h
              </p>
              <p className="text-[1.2rem]">wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
