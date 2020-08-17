/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Link from "next/link";
import { useRouter } from "next/router";
import Transition from "./Transition";
import React, { useState } from "react";

const Header = ({ subtitle }: { subtitle: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionIsOpen, solutionSetIsOpen] = useState(false);
  const [moreIsOpen, moreSetIsOpen] = useState(false);

  const path = useRouter().pathname;

  const homeDetectMenu = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
            Home
          </a>
        </Link>
      );
    }
  };

  const homeDetectResponsive = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
            <svg
              className="flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </svg>
            <div className="text-base leading-6 font-medium">Home</div>
          </a>
        </Link>
      );
    }
  };

  return (
    <div className="relative bg-black">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-white px-2 genemator-title">
                  Genemator's
                </div>
                {subtitle && (
                  <div className="text-white">
                    {">"} {subtitle}
                  </div>
                )}
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {homeDetectMenu()}
            <Link href="/posts">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Posts
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                About
              </a>
            </Link>
            <Link href="/quotes">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Quotes
              </a>
            </Link>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  if (solutionIsOpen) {
                    solutionSetIsOpen(!solutionIsOpen);
                  }
                  moreSetIsOpen(!moreIsOpen);
                }}
                className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
              >
                <span>Projects</span>
                <svg
                  className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
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

              <Transition
                show={moreIsOpen}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                  <div className="rounded-lg shadow-lg">
                    <div className="rounded-lg border shadow-xs overflow-hidden">
                      <div className="z-20 relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="https://github.com/genemators/oss"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-white transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              OSS Linux
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Operation System for enthusiasts and creators.
                              Project is out of support for now.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://chisel.uz"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-white transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                            />
                            <polyline
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              points="7.5 4.21 12 6.81 16.5 4.21"
                            />
                            <polyline
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              points="7.5 19.79 7.5 14.6 3 12"
                            />
                            <polyline
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              points="21 12 16.5 14.6 16.5 19.79"
                            />
                            <polyline
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              points="3.27 6.96 12 12.01 20.73 6.96"
                            />
                            <line
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="12"
                              y1="22.08"
                              x2="12"
                              y2="12"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Chisel Devs
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Development portal for newbies & masters to share
                              and learn some skills.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://deno.land"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-white transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Denoland
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              A secure runtime for JavaScript and TypeScript.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://bsba.uz"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-white transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <polygon
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              BSBA™
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Team of 4 senior developers that makes open source
                              accessible.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-black space-y-5 sm:px-8 sm:py-8">
                        <div className="space-y-4">
                          <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
                            Recent Posts
                          </h3>
                          <ul className="space-y-4">
                            <li className="text-base leading-6 truncate">
                              <Link href="/posts/v1">
                                <a className="font-medium text-gray-400 hover:text-gray-300 transition ease-in-out duration-150">
                                  Genemator's V1 Next.js website
                                </a>
                              </Link>
                            </li>
                            <li className="text-base leading-6 truncate">
                              <Link href="/posts/v2">
                                <a className="font-medium text-gray-400 hover:text-gray-300 transition ease-in-out duration-150">
                                  Update V2
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="text-sm leading-5">
                          <Link href="/posts">
                            <a className="font-medium text-gray-600 hover:text-gray-500 transition ease-in-out duration-150">
                              View all posts &rarr;
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  if (moreIsOpen) {
                    moreSetIsOpen(!moreIsOpen);
                  }
                  solutionSetIsOpen(!solutionIsOpen);
                }}
                className="text-white group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
              >
                <span>Socials</span>
                <svg
                  className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
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
              <Transition
                show={solutionIsOpen}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg">
                    <div className="rounded-lg border shadow-xs overflow-hidden">
                      <div className="z-20 relative grid gap-6 bg-black  px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="https://twitter.com/genemator"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Twitter
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Get a better understanding of where your traffic
                              is coming from.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/genemator/"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <rect
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                            />
                            <line
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="17.5"
                              y1="6.5"
                              x2="17.51"
                              y2="6.5"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Instagram
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Speak directly to your customers in a more
                              meaningful way.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://www.facebook.com/sakhib.orzklv/"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Facebook
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Your customers data will be safe and secure.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://t.me/genemator"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <line
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="22"
                              y1="2"
                              x2="11"
                              y2="13"
                            />
                            <polygon
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              points="22 2 15 22 11 13 2 9 22 2"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Telegram
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Connect with third-party tools that you’re already
                              using.
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://github.com/genemator"
                          className="-m-3 p-3 flex items-start space-x-4 rounded-lg text-white hover:text-black hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            />
                          </svg>
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium">
                              Github
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Build strategic funnels that will drive your
                              customers to convert
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-black space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div className="flow-root">
                          <a
                            href="mailto:genemators@gmail.com?subject=Sending%20email%20from%20website%20link!&body=Continue%20typing%20your%20text..."
                            className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium hover:bg-gray-100 text-white hover:text-black transition ease-in-out duration-150"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="flex-shrink-0 h-6 w-6"
                            >
                              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                              />
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="flex-shrink-0 h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                              />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>Send email</span>
                          </a>
                        </div>
                        <div className="flow-root">
                          <a
                            href="tel:+998998711546"
                            className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium hover:bg-white text-white hover:text-black transition ease-in-out duration-150"
                          >
                            <svg
                              className="flex-shrink-0 h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <span>Contact Number</span>
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
            <a
              href="https://github.com/genemators/genemators/issues"
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                />
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  y1="9"
                  x2="12"
                  y2="13"
                />
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  y1="17"
                  x2="12.01"
                  y2="17"
                />
              </svg>
            </a>
            <a
              href="https://github.com/genemators/genemators"
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  cx="18"
                  cy="18"
                  r="3"
                />
                <circle
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  cx="6"
                  cy="6"
                  r="3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 6h3a2 2 0 0 1 2 2v7"
                />
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="6"
                  y1="9"
                  x2="6"
                  y2="21"
                />
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
            <div className="rounded-lg border shadow-xs bg-black">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white genemator-title">
                      Genemator's
                    </div>{" "}
                    {subtitle && (
                      <div className="text-white">
                        {">"} {subtitle}
                      </div>
                    )}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-white focus:text-black transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid row-gap-8">
                    {homeDetectResponsive()}
                    <Link href="/posts">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Posts
                        </div>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <circle
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            cx="12"
                            cy="12"
                            r="10"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            y1="8"
                            x2="12"
                            y2="12"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            y1="16"
                            x2="12.01"
                            y2="16"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          About
                        </div>
                      </a>
                    </Link>
                    <Link href="/quotes">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <polyline
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            points="21 8 21 21 3 21 3 8"
                          />
                          <rect
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x="1"
                            y="3"
                            width="22"
                            height="5"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="10"
                            y1="12"
                            x2="14"
                            y2="12"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Quotes
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                  <a
                    href="https://github.com/genemators/oss"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    OSS Linux
                  </a>
                  <a
                    href="https://github.com/genemator"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://chisel.uz/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Chisel Devs
                  </a>
                  <a
                    href="https://t.me/genemator"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://deno.land/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Denoland
                  </a>
                  <a
                    href="https://www.facebook.com/sakhib.orzklv/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://bsba.uz/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    BSBA™
                  </a>
                  <a
                    href="https://www.instagram.com/genemator/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Instagram
                  </a>
                </div>
                <div className="space-y-6">
                  <a
                    target="_blank"
                    href="https://github.com/genemators/genemators"
                    className="w-full flex items-center justify-center px-4 py-2 border border text-base leading-6 font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white transition ease-in-out duration-150"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      />
                    </svg>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      />
                    </svg>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      />
                    </svg>
                  </a>
                  <span className="w-full flex rounded-md shadow-sm"></span>
                  <p className="text-center text-base leading-6 font-medium text-white">
                    Proudly crafted with{" "}
                    <a
                      href="https://vercel.com"
                      className="text-gray-400 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Vercel / Next.js
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
