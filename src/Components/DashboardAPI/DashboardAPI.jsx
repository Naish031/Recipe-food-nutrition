import React from "react";
import reactLogo from "../../logo.svg";

const DashboardAPI = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-black text-2xl font-semibold pb-2">
          One Dashboard, All your APIs
        </h2>
        <p className="text-black text-center sm:text-xs md:text-sm lg:text-lg">
          RapidAPI provides clear visibily on all of the API you use. Worry less
          about juggling multiple keys and subscription accounts
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-1/4 flex flex-col justify-center items-center mx-2">
          <img src={reactLogo} alt="react logo" width="70px" />
          <h3 className="text-center text-black font-semibold sm:text-base md:text-lg lg:text-xl pb-2">
            Call volume and billing
          </h3>
          <p className="text-center text-black sm:text-xs md:text-sm lg:text-base">
            Monitor call volumes and corresponding billing charges for all APIs
            in one dashboard.
          </p>
        </div>

        <div className="w-1/4 flex flex-col justify-center items-center mx-2">
          <img src={reactLogo} alt="react logo" width="70px" />
          <h3 className="text-center text-black font-semibold sm:text-base md:text-lg lg:text-xl pb-2">
            Errors and latency
          </h3>
          <p className="text-center text-black sm:text-xs md:text-sm lg:text-base">
            Ensure your apps uptime by keeping track of API errors and trends in
            latency.
          </p>
        </div>

        <div className="w-1/4 flex flex-col justify-center items-center mx-2">
          <img src={reactLogo} alt="react logo" width="70px" />
          <h3 className="text-center text-black font-semibold sm:text-base md:text-lg lg:text-xl pb-2">
            Logs for your API calls
          </h3>
          <p className="text-center text-black sm:text-xs md:text-sm lg:text-base">
            Debug faster by searching and viewing logs for your API calls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardAPI;
