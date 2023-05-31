import React from "react";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="flex items-center bg-indigo-100 w-screen min-h-screen"
        // style="font-family: 'Muli', sans-serif;"
      >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
              Best Sellers
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone 11 Pro Max
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    And then there was Pro.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$1099,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone 11
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Just the right amount of everything.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$699,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone XR
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Brilliant. In every way.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$599,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone SE
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Lots to love. Less to spend.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$399,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. Thats the main thing
                    people are controlled by! Thoughts- their perception of
                    themselves! Theyre slowed down by their perception of
                    themselves. If youre taught you can’t do anything, you wont
                    do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
