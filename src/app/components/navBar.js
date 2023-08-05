"use client";
import React from "react";
import Link from "next/link";

const NabBar = () => {
    const [burger, setBurger] = React.useState("hidden");
    // let burger = "hidden"
    return (
        <div>
            <nav className="bg-black  border-gray-200  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div href="#" className="flex items-center">
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2e3n3JxVfo0mhb45Za96_xC4d71cVOCLQJ90Of4FyxUIQnL7Iim4NB_99dJhbdZON7Vk3IzYlgVOMrkhZCXM-9bPM0g3kh1RDGTBGXUjIRx88ykOb3asqZg5RiJbc3OZeYyPovGogkwvNtCgIbvGV7dBC_SVRdtx7AkZUKjGdAdVyWNdsjWUxBYjeKrM/s1153/Screenshot%202023-08-04%20224456.png"
                            className="h-14 mr-3"
                            alt="Flowbite Logo"
                        />
                    </div>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="true"
                        onClick={() => {
                            burger == "hidden"
                                ? setBurger("")
                                : setBurger("hidden");
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <div
                        className={`${burger} w-full md:block md:w-auto`}
                        id="navbar-dropdown"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                            <li>
                                <a
                                    href="./"
                                    className="block hover:text-green-400 focus:text-green-400  py-2 pl-3  text-white  "
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <Link
                                    href="./news"
                                    className="block hover:text-green-400 focus:text-green-400 py-2 pl-3  text-white "
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="./solution"
                                    className="block hover:text-green-400 focus:text-green-400 py-2 pl-3  text-white "
                                >
                                    Solution
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="./effect"
                                    className="block hover:text-green-400 focus:text-green-400 py-2 pl-3  text-white "
                                >
                                    Problem
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="./impact"
                                    className="block hover:text-green-400 focus:text-green-400 py-2 pl-3  text-white "
                                >
                                    Impact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NabBar;
