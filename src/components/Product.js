import React from "react";

export default function Product() {
  return (
    <div>
      <div class="block sm:flex items-center">
        <h2 class="text-lg font-medium ml-5 mb-5 mt-5 text-slate-600">
          {" "}
          Weekly Top Products{" "}
        </h2>
        <div class="flex items-center sm:ml-auto mt-3 sm:mt-0 mr-10">
          <button class="btn box flex items-center text-gray-700 dark:text-gray-300 bg-white">
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
              class="feather feather-file-text hidden sm:block w-4 h-4 mr-2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>{" "}
            Export to Excel{" "}
          </button>
          <button class="ml-3 mr-10 btn box flex items-center text-gray-700 dark:text-gray-300 bg-white">
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
              class="feather feather-file-text hidden sm:block w-4 h-4 mr-2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>{" "}
            Export to PDF{" "}
          </button>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-row text-slate-800 font-bold">
          <div class="flex ml-12 h-12 items-center justify-center relative w-1/5 mb-2 mt-2">
            Images
          </div>
          <div class="flex ml-16 h-12 items-center justify-center relative w-1/5 mb-2 mt-2">
            Product Name
          </div>
          <div class="flex ml-48 h-12 items-center justify-center relative w-1/5 mb-2 mt-2">
            STOCK
          </div>
          <div class="flex ml-20 h-12 items-center justify-center relative w-1/5 mb-2 mt-2">
            Status
          </div>
          <div class="flex ml-10 mr-20 h-12 items-center justify-center relative w-2/5 mb-2 mt-2">
            Action
          </div>
        </div>

        <div class="flex ml-10 bg-white h-14 relative w-11/12 mb-2">
          <div class="-space-x-4 ml-10 mr-20 flex items-center justify-center">
            <img
              class="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-20 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-10 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
          </div>
          <div class="flex flex-col mt-2">
            <a href="" class="font-medium flex items-center justify-center">
              Samsung Q90 QLED TV
            </a>
            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
              Electronic
            </div>
          </div>

          <div class="font-medium flex items-center justify-center ml-48 mr-32">
            50
          </div>
          <div class="flex items-center justify-center ml-10 mr-32">
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
              class="feather feather-check-square w-4 h-4 mr-2 w-4 h-4 mr-2"
            >
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>{" "}
            Active
          </div>
          <div class="flex justify-center items-center ml-2">
            <a class="flex items-center mr-3" href="">
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
                class="feather feather-check-square w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>{" "}
              Edit{" "}
            </a>
            <a class="flex items-center text-theme-6" href="">
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
                class="feather feather-trash-2 w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>{" "}
              Delete{" "}
            </a>
          </div>
        </div>
        <div class="flex ml-10 bg-white h-14 relative w-11/12 mb-2 mt-2">
          <div class="-space-x-4 ml-10 mr-20 flex items-center justify-center">
            <img
              class="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-20 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-10 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
          </div>
          <div class="flex flex-col mt-2">
            <a href="" class="font-medium flex items-center justify-center">
              Samsung Q90 QLED TV
            </a>
            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
              Electronic
            </div>
          </div>

          <div class="font-medium flex items-center justify-center ml-48 mr-32">
            50
          </div>
          <div class="flex items-center justify-center ml-10 mr-32">
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
              class="feather feather-check-square w-4 h-4 mr-2 w-4 h-4 mr-2"
            >
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>{" "}
            Active
          </div>
          <div class="flex justify-center items-center ml-2">
            <a class="flex items-center mr-3" href="">
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
                class="feather feather-check-square w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>{" "}
              Edit{" "}
            </a>
            <a class="flex items-center text-theme-6" href="">
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
                class="feather feather-trash-2 w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>{" "}
              Delete{" "}
            </a>
          </div>
        </div>
        <div class="flex ml-10 bg-white h-14 relative w-11/12 mb-2 mt-2">
          <div class="-space-x-4 ml-10 mr-20 flex items-center justify-center">
            <img
              class="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-20 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-10 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
          </div>
          <div class="flex flex-col mt-2">
            <a href="" class="font-medium flex items-center justify-center">
              Samsung Q90 QLED TV
            </a>
            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
              Electronic
            </div>
          </div>

          <div class="font-medium flex items-center justify-center ml-48 mr-32">
            50
          </div>
          <div class="flex items-center justify-center ml-10 mr-32">
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
              class="feather feather-check-square w-4 h-4 mr-2 w-4 h-4 mr-2"
            >
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>{" "}
            Active
          </div>
          <div class="flex justify-center items-center ml-2">
            <a class="flex items-center mr-3" href="">
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
                class="feather feather-check-square w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>{" "}
              Edit{" "}
            </a>
            <a class="flex items-center text-theme-6" href="">
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
                class="feather feather-trash-2 w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>{" "}
              Delete{" "}
            </a>
          </div>
        </div>
        <div class="flex ml-10 bg-white h-14 relative w-11/12 mb-2 mt-2">
          <div class="-space-x-4 ml-10 mr-20 flex items-center justify-center">
            <img
              class="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-20 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <img
              class="relative z-10 inline object-cover w-10 h-10 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
          </div>
          <div class="flex flex-col mt-2">
            <a href="" class="font-medium flex items-center justify-center">
              Samsung Q90 QLED TV
            </a>
            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
              Electronic
            </div>
          </div>

          <div class="font-medium flex items-center justify-center ml-48 mr-32">
            50
          </div>
          <div class="flex items-center justify-center ml-10 mr-32">
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
              class="feather feather-check-square w-4 h-4 mr-2 w-4 h-4 mr-2"
            >
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>{" "}
            Active
          </div>
          <div class="flex justify-center items-center ml-2">
            <a class="flex items-center mr-3" href="">
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
                class="feather feather-check-square w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>{" "}
              Edit{" "}
            </a>
            <a class="flex items-center text-theme-6" href="">
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
                class="feather feather-trash-2 w-4 h-4 mr-1 w-4 h-4 mr-1"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>{" "}
              Delete{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
