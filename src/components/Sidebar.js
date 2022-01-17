import React from "react";

export default function Sidebar() {
  return (
    <div>
      <nav>
        <a
          aria-current="page"
          href="/"
          class="router-link-active router-link-exact-active intro-x flex items-center pl-5 pt-4"
          tag="a"
        >
          <img
            alt="Icewall Tailwind HTML Admin Template"
            class="w-6 mt-6 ml-6"
            src="http://rubick-vue.left4code.com/img/logo.603c31f0.svg"
          ></img>
          <span class="hidden xl:block text-white text-lg mt-6 ml-3">
            {" "}
            Ru<span class="font-medium mt-6">bick</span>
          </span>
        </a>
        <div class="mb-10"></div>

        <ul>
          <li>
            <a href="/inbox" class="flex mb-5 ml-12">
              {/* <div class="flex justify-around mb-5 ml-7"> */}
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
                class="mr-5 text-white"
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>

              <div class="text-white">Inbox</div>
              {/* </div> */}
            </a>
          </li>
          <li>
            <a href="/inbox" class="flex mb-5 ml-12">
              {/* <div class="mb-5"> */}
              {/* <span class="inline-flex justify-center items-center ml-4 text-white mr-5"> */}
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
                class="text-white mr-5"
              >
                <line x1="22" y1="12" x2="2" y2="12"></line>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                <line x1="6" y1="16" x2="6.01" y2="16"></line>
                <line x1="10" y1="16" x2="10.01" y2="16"></line>
              </svg>
              {/* </span> */}
              <div class="text-white">File Manager</div>
              {/* </div> */}
            </a>
          </li>
          <li>
            <a href="/point-of-sale" class="flex mb-5 ml-12">
              {/* <div class="flex justify-around mb-5"> */}

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
                class="text-white mr-5"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>

              <div class="text-white">Point of Sale</div>
              {/* </div> */}
            </a>
          </li>
          <li>
            <a href="/chat" class="flex mb-5 ml-12">
              {/* <div class="flex justify-around mb-5">
                <div> */}
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
                class="mr-5 text-white"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>

              <div class="side-menu__title text-white">Chat</div>
            </a>
          </li>
          <li>
            <a href="/post" class="flex mb-5 ml-12">
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
                class="mr-5 text-white"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>

              <div class="side-menu__title text-white">Post</div>
            </a>
          </li>
          <li>
            <a href="/calendar" class="flex mb-5 ml-12">
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
                class="mr-5 text-white"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>

              <div class="side-menu__title text-white">Calendar </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
