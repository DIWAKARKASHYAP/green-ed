import React from "react";

const Footer = () => {
    return (
        <>

        <div className="  m-auto bg-gradient-to-b from-green-500 to-black flex items-center justify-center flex-col max-2xl py-20 ">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl dark:text-white">
            Join the Green Ed Community
            </h1>
            <p class="mb-6 text-lg font-normal text-gray-300  text-center lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We invite you to join our growing community of environmentally conscious individuals. Get involved, stay informed, and help make a difference. Join our Discord for the latest updates and become part of the solution to climate change today!
            </p>
            <a
                href="https://discord.gg/qY9V5rdW"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                Join Now
                <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </a>
        </div>
        <div className="text-gray-400 bg-black pl-5 italic">Green Ed - Empowering you to make a difference for our planet. created by Diwakar Kashyap  <a className="text-green-200" href="https://github.com/DIWAKARKASHYAP" target="_blank">Github Link</a></div>

        </>
    );
};

export default Footer;
