import React from "react";
import reactLogo from "../../logo.svg";

const Tables = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-32 mb-6">
        <h1 className="text-black text-center text-2xl font-semibold pb-2">
          Choose the Right Plan For You
        </h1>
        <p className="text-black text-center w-2/4 sm:text-xs md:text-lg">
          RapidAPI performs directly with API providers to give you no-fuss,
          transparent pricing. Find a plan that best matches the scale you need
          for your application.
        </p>
      </div>

      <div className="h-32 flex justify-center items-center">
        <img src={reactLogo} alt="react logo" width="130px" height="65px" />
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-[10%]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-black">
                Objects
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center flex flex-col"
              >
                Basic <span className="block">$0.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Subscribe
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center "
              >
                Pro <span className="block">$29.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Subscribe
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center"
              >
                Ultra <span className="block">$99.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Subscribe
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center"
              >
                Mega <span className="block">$999.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Subscribe
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                results{" "}
                <span className="block text-blue-500 pt-2">
                  Related Endpoints
                </span>
              </th>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                5000 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                25,000 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                100,000 / day{" "}
                <span className="block font-normal">+ $0.001 each other</span>
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tiny requests{" "}
                <span className="block text-blue-500 pt-2">
                  Related Endpoints
                </span>
              </th>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                50,000 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                200,000 / day{" "}
                <span className="block font-normal">+ $0.001 each other</span>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Requests{" "}
                <span className="block text-blue-500 pt-2">
                  Related Endpoints
                </span>
              </th>
              <td className="px-6 py-4 text-black font-bold text-center">
                50 / day{" "}
                <span className="block font-normal">+ $0.007 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.004 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                2,500 / day{" "}
                <span className="block font-normal">+ $0.004 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                30,000 / day{" "}
                <span className="block font-normal">+ $0.001 each other</span>
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Features
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <a
                  href="https://example.com"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                ></a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Support
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                On-Demand API Endpoints
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
