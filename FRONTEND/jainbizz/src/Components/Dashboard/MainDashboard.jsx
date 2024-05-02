import React, { useState, useEffect } from 'react'
import ApexCharts from 'apexcharts'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Sidebar from '../Sidebar';


const MainDashboard = () => {
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];





  return (
    <div className='flex'>
      <div class="fixed">
        <Sidebar />
      </div>
      <div className="flex-grow text-gray-800 ml-64">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-yellow-300">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <div className="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
            />
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Grace Simmons</span>
                <span className="text-sm text-gray-600">Lecturer</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden sm:block h-6 w-6 text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full" />
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping" />
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 space-y-6 ">
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-3 ">
              <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-1">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">62</span>
                    <span className="block text-gray-500">Products</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">6.8</span>
                    <span className="block text-gray-500">Sellers</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block text-2xl font-bold">9</span>
                    <span className="inline-block text-xl text-gray-500 font-semibold">
                      (14%)
                    </span>
                    <span className="block text-gray-500">
                      Leads
                    </span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">83%</span>
                    <span className="block text-gray-500">Active Post</span>
                  </div>
                </div>
              </section>
              <section className='Main_Charts mt-5'>
                <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                  <div className="px-6 py-3 font-semibold border-b border-gray-100">
                    The number of applied and left students per month
                  </div>
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-center h-full px-4 py-20 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                      <LineChart width={600} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                      </LineChart>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='col-span-1'>
              <div className="flex flex-col row-span-3 ">
                <div className=' bg-white shadow rounded-lg mt-2'>
                  <div className="px-6 py-3 font-semibold border-b border-gray-100">
                    Students by type of studying
                  </div>
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                      Chart
                    </div>
                  </div>
                </div>

                <div>

                  <div className='mt-4'>
                    <div className="row-span-3 bg-white shadow rounded-lg">
                      <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                        <span>Students by Sellers</span>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          Descending
                          <svg
                            className="-mr-1 ml-1 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                      </div>
                      <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
                        <ul className="p-6 space-y-6">
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/women/82.jpg"
                                alt="Annette Watson profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Annette Watson</span>
                            <span className="ml-auto font-semibold">9.3</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/81.jpg"
                                alt="Calvin Steward profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Calvin Steward</span>
                            <span className="ml-auto font-semibold">8.9</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/80.jpg"
                                alt="Ralph Richards profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Ralph Richards</span>
                            <span className="ml-auto font-semibold">8.7</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/79.jpg"
                                alt="Bernard Murphy profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Bernard Murphy</span>
                            <span className="ml-auto font-semibold">8.2</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/women/78.jpg"
                                alt="Arlene Robertson profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Arlene Robertson</span>
                            <span className="ml-auto font-semibold">8.2</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/women/77.jpg"
                                alt="Jane Lane profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Jane Lane</span>
                            <span className="ml-auto font-semibold">8.1</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/76.jpg"
                                alt="Pat Mckinney profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Pat Mckinney</span>
                            <span className="ml-auto font-semibold">7.9</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="Norman Walters profile picture"
                              />
                            </div>
                            <span className="text-gray-600">Norman Walters</span>
                            <span className="ml-auto font-semibold">7.7</span>
                          </li>
                        </ul>
                      </div>
                    </div>


                  </div>

                </div>




              </div>


            </div>

          </div>
        </main>

      </div>

    </div>

  )
}

export default MainDashboard
