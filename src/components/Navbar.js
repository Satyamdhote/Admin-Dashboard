import React from "react";

export default function Navbar() {
  return (
    <div>
      <div class="flex-grow lg:flex lg:items-center lg:w-auto">
        <a href="" class="text-md font-medium ml-5 mb-5 mt-5 text-slate-600">
          Application
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right text-md font-medium ml-5 mb-5 mt-5 text-slate-600"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <a href="" class="text-md font-medium ml-5 mb-5 mt-5 text-slate-600">
          Dashboard
        </a>

        <div class="pt-2 relative mx-auto text-gray-600 mr-16">
          <div class="absolute top-4 left-3">
            {" "}
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
          </div>
          <input
            class="border-2 border-gray-300 bg-gray-300 h-8 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search..."
          ></input>
          {/* <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
            Search
          </button> */}
          {/* <div class="cursor-pointer" role="button" aria-expanded="false"> */}

          {/* </div> */}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ml-40 dark:text-gray-300"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <div class="ml-5 mr-10">
          <img
            class="inline-block h-7 w-7 rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
