import React, { useState } from "react";
import Link from "next/link";
import Transition from "./Transition";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [solutionIsOpen, solutionSetIsOpen] = useState(false)
    const [moreIsOpen, moreSetIsOpen] = useState(false)


    return(
        <div className="relative bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="lg:w-0 lg:flex-1">
                        <Link href="/">
                            <a href="/" className="flex items-center">
                                {/*<img*/}
                                {/*    className="h-8 w-auto sm:h-10"*/}
                                {/*    src="/logo.svg" alt="Workflow"*/}
                                {/*/> */}
                                <div className="text-white px-2 genemator-title">Genemator's </div>
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(true)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <div className="relative">
                            <button type="button"
                                    onClick={() => solutionSetIsOpen(!solutionIsOpen)}
                                    className="text-white group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                                <span>Solutions</span>
                                <svg
                                    className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            <Transition
                                show={solutionIsOpen}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                            <div
                                className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div className="rounded-lg shadow-lg">
                                    <div className="rounded-lg shadow-xs overflow-hidden">
                                        <div
                                            className="z-20 relative grid gap-6 bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-white">
                                                        Analytics
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Get a better understanding of where your traffic is coming
                                                        from.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-white">
                                                        Engagement
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Speak directly to your customers in a more meaningful way.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-white">
                                                        Security
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Your customers data will be safe and secure.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-white">
                                                        Integrations
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Connect with third-party tools that you’re already using.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-white">
                                                        Automations
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Build strategic funnels that will drive your customers to
                                                        convert
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            className="px-5 py-5 bg-black space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <div className="flow-root">
                                                <a href="#"
                                                   className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
                                                    <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                                         viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span>Watch Demo</span>
                                                </a>
                                            </div>
                                            <div className="flow-root">
                                                <a href="#"
                                                   className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
                                                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                                                         viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                    <span>Contact Sales</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Transition>
                        </div>

                        <a href="#"
                           className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                            Pricing
                        </a>
                        <a href="#"
                           className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                            Docs
                        </a>

                        <div className="relative">
                            <button type="button"
                                    onClick={() => moreSetIsOpen(!moreIsOpen)}
                                    className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                                <span>More</span>
                                <svg
                                    className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>

                            <Transition
                                show={moreIsOpen}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                <div className="rounded-lg shadow-lg">
                                    <div className="rounded-lg shadow-xs overflow-hidden">
                                        <div
                                            className="z-20 relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                        Help Center
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Get all of your questions answered in our forums or contact
                                                        support.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                        Guides
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Learn how to maximize our platform to get the most out of
                                                        it.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                        Events
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        See what meet-ups and other events we might be planning near
                                                        you.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#"
                                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                                </svg>
                                                <div className="space-y-1">
                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        Understand how we take your privacy seriously.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 space-y-5 sm:px-8 sm:py-8">
                                            <div className="space-y-4">
                                                <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
                                                    Recent Posts
                                                </h3>
                                                <ul className="space-y-4">
                                                    <li className="text-base leading-6 truncate">
                                                        <a href="#"
                                                           className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                                            Boost your conversion rate
                                                        </a>
                                                    </li>
                                                    <li className="text-base leading-6 truncate">
                                                        <a href="#"
                                                           className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                                            How to use search engine optimization to drive traffic
                                                            to your site
                                                        </a>
                                                    </li>
                                                    <li className="text-base leading-6 truncate">
                                                        <a href="#"
                                                           className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                                            Improve your customer experience
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-sm leading-5">
                                                <a href="#"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                                    View all posts &rarr;
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Transition>
                        </div>
                    </nav>
                    <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                        <a href="#"
                           className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                            </svg>
                        </a>
                        <a href="#"
                           className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                show={menuOpen}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg">
                    <div className="rounded-lg shadow-xs bg-black divide-y-2 divide-gray-50 border">
                        <div className="pt-5 pb-6 px-5 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-white px-2 genemator-title">Genemator's</div> <div className="text-white px-2">Home Page</div>
                                </div>
                                <div className="-mr-2">
                                    <button type="button"
                                            onClick={() => setMenuOpen(false)}
                                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <nav className="grid row-gap-8">
                                    <a href="#"
                                       className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-500 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-white">
                                            Analytics
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-500 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-white">
                                            Engagement
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-500 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-white">
                                            Security
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-500 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-white">
                                            Integrations
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-500 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-white" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-white">
                                            Automations
                                        </div>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Pricing
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Docs
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Enterprise
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Blog
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Help Center
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Guides
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Security
                                </a>
                                <a href="#"
                                   className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150">
                                    Events
                                </a>
                            </div>
                            <div className="space-y-6">
                                <span className="w-full flex rounded-md shadow-sm">
                                  <a href="#"
                                     className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-500 focus:shadow-outline-indigo active:bg-gray-400 transition ease-in-out duration-150">
                                    Sign up
                                  </a>
                                </span>
                                <p className="text-center text-base leading-6 font-medium text-white">
                                    Existing customer? {" "}
                                    <a href="#"
                                       className="text-gray-400 hover:text-gray-700 transition ease-in-out duration-150">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Transition>
        </div>
    )
}

export default Header
