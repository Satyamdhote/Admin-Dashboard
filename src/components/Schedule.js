import React from "react";

export default function Schedule() {
  return (
    <div>
      <div class="block sm:flex items-center">
        <h2 class="text-lg font-medium ml-5 mt-8 text-slate-600">
          {" "}
          Schedules{" "}
        </h2>
        <a href="" class="ml-auto mt-7 mr-20 text-blue-400 flex items-center">
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
            class="feather feather-plus w-4 h-4 mr-1 w-4 h-4 mr-1"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>{" "}
          Add New Schedules{" "}
        </a>
      </div>
      <div class="mt-3">
        <div class="box bg-white ml-10 mr-10">
          <div class="p-5">
            <div class="flex">
              <div class="font-medium text-base mx-auto">April</div>
            </div>
            <div class="grid grid-cols-7 gap-4 mt-5 text-center">
              <div class="font-medium">Su</div>
              <div class="font-medium">Mo</div>
              <div class="font-medium">Tu</div>
              <div class="font-medium">We</div>
              <div class="font-medium">Th</div>
              <div class="font-medium">Fr</div>
              <div class="font-medium">Sa</div>
              <div class="py-0.5 rounded relative text-gray-600">29</div>
              <div class="py-0.5 rounded relative text-gray-600">30</div>
              <div class="py-0.5 rounded relative text-gray-600">31</div>
              <div class="py-0.5 rounded relative">1</div>
              <div class="py-0.5 rounded relative">2</div>
              <div class="py-0.5 rounded relative">3</div>
              <div class="py-0.5 rounded relative">4</div>
              <div class="py-0.5 rounded relative">5</div>
              <div class="py-0.5 bg-emerald-200 rounded relative"> 6 </div>
              <div class="py-0.5 rounded relative">7</div>
              <div class="py-0.5 bg-blue-800 text-white rounded relative">
                {" "}
                8{" "}
              </div>
              <div class="py-0.5 rounded relative">9</div>
              <div class="py-0.5 rounded relative">10</div>
              <div class="py-0.5 rounded relative">11</div>
              <div class="py-0.5 rounded relative">12</div>
              <div class="py-0.5 rounded relative">13</div>
              <div class="py-0.5 rounded relative">14</div>
              <div class="py-0.5 rounded relative">15</div>
              <div class="py-0.5 rounded relative">16</div>
              <div class="py-0.5 rounded relative">17</div>
              <div class="py-0.5 rounded relative">18</div>
              <div class="py-0.5 rounded relative">19</div>
              <div class="py-0.5 rounded relative">20</div>
              <div class="py-0.5 rounded relative">21</div>
              <div class="py-0.5 rounded relative">22</div>
              <div class="py-0.5 bg-rose-200 rounded relative"> 23 </div>
              <div class="py-0.5 rounded relative">24</div>
              <div class="py-0.5 rounded relative">25</div>
              <div class="py-0.5 rounded relative">26</div>
              <div class="py-0.5 bg-indigo-100 rounded relative"> 27 </div>
              <div class="py-0.5 rounded relative">28</div>
              <div class="py-0.5 rounded relative">29</div>
              <div class="py-0.5 rounded relative">30</div>
              <div class="py-0.5 rounded relative text-gray-600">1</div>
              <div class="py-0.5 rounded relative text-gray-600">2</div>
              <div class="py-0.5 rounded relative text-gray-600">3</div>
              <div class="py-0.5 rounded relative text-gray-600">4</div>
              <div class="py-0.5 rounded relative text-gray-600">5</div>
              <div class="py-0.5 rounded relative text-gray-600">6</div>
              <div class="py-0.5 rounded relative text-gray-600">7</div>
              <div class="py-0.5 rounded relative text-gray-600">8</div>
              <div class="py-0.5 rounded relative text-gray-600">9</div>
            </div>
          </div>
          <div class="border-t border-gray-200 dark:border-dark-5 p-5">
            <div class="flex items-center">
              <div class="w-2 h-2 bg-rose-200 rounded-full mr-3"></div>
              <span class="truncate">UI/UX Workshop</span>
              <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
              <span class="font-medium xl:ml-auto">23th</span>
            </div>
            <div class="flex items-center mt-4">
              <div class="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
              <span class="truncate">VueJs Frontend Development</span>
              <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
              <span class="font-medium xl:ml-auto">10th</span>
            </div>
            <div class="flex items-center mt-4">
              <div class="w-2 h-2 bg-rose-200 rounded-full mr-3"></div>
              <span class="truncate">Laravel Rest API</span>
              <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
              <span class="font-medium xl:ml-auto">31th</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
