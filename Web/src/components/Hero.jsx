import React from "react";
import { Navbar } from "./Navbar";
import { Slider } from "./Slider";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <div className="flex flex-col h-screen snap-center items-center justify-center">
      {/* <Navbar></Navbar> */}
      <div className="h-full snap-center flex flex-row w-screen px-10 p-2 justify-between">
        {/* left */}
        <div className="basis-1/2 flex flex-col justify-center items-center gap-10 pb-40">
          <div className="w-3/5">
            <div className="pb-40">
              <img src="img/Logo.svg" alt="Logo" />
            </div>
            <div className="">
              <h1 className="font-mono text-7xl font-bold">Ensure Your</h1>
              <div className="text-8xl mb-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("LUXURY").start();
                  }}
                />
              </div>
              <p className="text-3xl mb-5 font-semibold">
                Enjoy Authentic Luxury products exclusively minted for You
              </p>
              <button className="bg-[#000] text-white text-2xl font-extrabold px-20 mt-10 rounded-md hover:bg-[#ffffff] hover:text-black my-3 p-3">
                CONNECT
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="basis-1/2 h-full flex justify-center items-center w-full">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};
