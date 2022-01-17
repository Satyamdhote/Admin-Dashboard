import React from "react";

export default function Recent() {
  return (
    <div>
      <div class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3 ml-10 mr-5">
        <div class="intro-x flex items-center h-10">
          <h2 class="text-lg font-medium ml-5 mt-8 text-slate-600">
            {" "}
            Recent Activities{" "}
          </h2>
          <a
            href=""
            class="ml-auto text-theme-1 dark:text-theme-10 truncate mt-8 text-blue-400"
          >
            Show More
          </a>
        </div>
        <div class="report-timeline mt-5 relative">
          <div class="absolute top-0 h-full border-r-2 border-gray-300 left-5"></div>
          <div class="intro-x relative flex items-center mb-3">
            <div class="report-timeline__image">
              <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                ></img>
              </div>
            </div>
            <div class="box px-5 py-3 ml-4 flex-1 zoom-in bg-white">
              <div class="flex items-center">
                <div class="font-medium">Tom Cruise</div>
                <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
              </div>
              <div class="text-gray-600 mt-1">Has joined the team</div>
            </div>
          </div>
          <div class="intro-x relative flex items-center mb-3">
            <div class="report-timeline__image">
              <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                ></img>
              </div>
            </div>
            <div class="box px-5 py-3 ml-4 flex-1 zoom-in bg-white">
              <div class="flex items-center">
                <div class="font-medium">Will Smith</div>
                <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
              </div>
              <div class="text-gray-600">
                <div class="mt-1">Added 3 new photos</div>
                <div class="flex mt-2">
                  <div class="w-8 h-8 image-fit mr-1 zoom-in">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      class="rounded-md border border-white"
                      src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    ></img>
                  </div>
                  <div class="w-8 h-8 image-fit mr-1 zoom-in">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      class="rounded-md border border-white"
                      src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    ></img>
                  </div>
                  <div class="w-8 h-8 image-fit mr-1 zoom-in">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      class="rounded-md border border-white"
                      src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="intro-x text-gray-500 text-xs text-center my-4">
            {" "}
            12 November{" "}
          </div>
          <div class="intro-x relative flex items-center mb-3">
            <div class="report-timeline__image">
              <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                ></img>
              </div>
            </div>
            <div class="box px-5 py-3 ml-4 flex-1 zoom-in bg-white">
              <div class="flex items-center">
                <div class="font-medium">Tom Hanks</div>
                <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
              </div>
              <div class="text-gray-600 mt-1">
                {" "}
                Has changed{" "}
                <a class="text-theme-1 dark:text-theme-10" href="">
                  Samsung Galaxy S20 Ultra
                </a>{" "}
                price and description{" "}
              </div>
            </div>
          </div>
          <div class="intro-x relative flex items-center mb-3">
            <div class="report-timeline__image">
              <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                ></img>
              </div>
            </div>
            <div class="box px-5 py-3 ml-4 flex-1 zoom-in bg-white">
              <div class="flex items-center">
                <div class="font-medium">Brad Pitt</div>
                <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
              </div>
              <div class="text-gray-600 mt-1">
                {" "}
                Has changed{" "}
                <a class="text-theme-1 dark:text-theme-10" href="">
                  Nike Air Max 270
                </a>{" "}
                description{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
