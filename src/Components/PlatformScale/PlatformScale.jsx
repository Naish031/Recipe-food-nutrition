import React from "react";
import sampleLogo from "../../logo.svg";

const PlatformScale = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-20">
        <h2 className="text-black text-center text-2xl font-semibold pb-1">
          A Proven Platform With Scale
        </h2>
        <p className="text-black text-center sm:text-xs md:text-sm lg:text-lg">
          Starting with the Recipe-Food-Nutrution API - you have access to an
          extensive ecosystem to accelerate your development process
        </p>
      </div>

      <div className="flex justify-between mx-[15%]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center ">
            <img src={sampleLogo} alt="placeholder logo" width="100px" />
            <p className="text-black text-center sm:text-base md:text-lg lg:text-xl font-semibold">
              3,000,000
            </p>
          </div>
          <p className="text-black text-sm text-center">Developers</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center ">
            <img src={sampleLogo} alt="placeholder logo" width="100px" />
            <p className="text-black text-center sm:text-base md:text-lg lg:text-xl font-semibold">
              Thousands
            </p>
          </div>
          <p className="text-black text-sm text-center">Of Public API's</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center ">
            <img src={sampleLogo} alt="placeholder logo" width="100px" />
            <p className="text-black text-center sm:text-base md:text-lg lg:text-xl font-semibold">
              Billions
            </p>
          </div>
          <p className="text-black text-sm text-center">Of API Calls / Month</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center ">
            <img src={sampleLogo} alt="placeholder logo" width="100px" />
            <p className="text-black text-center sm:text-base md:text-lg lg:text-xl font-semibold">175</p>
          </div>
          <p className="text-black text-sm text-center">Countries served</p>
        </div>
      </div>

      <div className="flex justify-between mx-[15%] my-12">
        {Array.from({ length: 5 }).map((index) => {
          return (
            <div className="">
              <img src={sampleLogo} alt="placeholder logo" width="100px" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlatformScale;
