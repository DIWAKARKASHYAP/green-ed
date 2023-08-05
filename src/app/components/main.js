import React from "react";
import Image from "next/image";
import Link from "next/link";
import Smoke from "./smoke";
import Ocean from "./ocean";
import Forest from "./forest";
import Human from "./Human";
import Marine from "./marine";

const Main = () => {
    return (
        <>
            <div className=" bg-gradient-to-r from-green-700 to-black max-w-screen-xl mx-auto">
                <div className=" flex justify-around flex-col-reverse items-center  md:flex-row py-20">
                    <div className=" max-w-2xl lg:max-w-3xl p-20">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-white ">
                            Welcome to{" "}
                            <span class="text-green-500">green Ed </span>: Your
                            Guide to Understanding Climate Change
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>
                        <p class="text-md font-normal lg:text-xl text-gray-300">
                            Welcome to Green Ed, your one-stop hub for all
                            things climate change. We are dedicated to fostering
                            a deeper understanding of climate change and
                            promoting environmental sustainability. Through
                            education and awareness, we are building a community
                            that is not just aware of the problem, but also
                            inspired to become part of the solution.
                        </p>
                    </div>
                    <div className="">
                        <Image
                            width={400}
                            height={400}
                            // quality={80}
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
                        />
                    </div>
                </div>
            </div>

            <div className=" bg-white max-w-screen-xl mx-auto">
                <div className=" flex justify-around flex-col items-center  md:flex-row py-20 ">
                    <div className="">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZi-s-tjtug0qaOeu5_YDrcXPF_CUMW4KNL8sK2Jl4kq_WsYDb_SmAhur587B7AtWmp9zv6aN_7ZvTpjF8-s_1p4fzoPL3SBp-KFUsMNqRnPEcqVQrLqUyivlw-nfVZ5w8u6BmrjNcNZJkGGalrjANUDzYc3QGeR3yQBU4xRGZ6OUpzeYr6yOOgc42uIA/s594/kisspng-global-warming-climate-change-air-pollution-5b09bdb2595807.466768841527365042366(1).png"
                        />
                    </div>
                    <div className=" max-w-2xl lg:max-w-3xl p-20 border-l-4">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-gray-800 ">
                            Understanding Climate{" "}
                            <span class="text-orange-500">Change</span>
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-900 mb-3"></div>
                        <p class="text-md font-normal lg:text-xl text-gray-600">
                            At Green Ed, we delve into the complex world of
                            climate science, offering insights into the factors
                            that affect climate change. From greenhouse gases
                            and deforestation to industrial emissions and
                            oceanic changes, we cover a myriad of topics to give
                            you a holistic understanding of the causes and
                            consequences of climate change.
                        </p>
                        <div className=" mt-4">
                            <Link
                                href="./effect"
                                class="focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900  cursor-pointer"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-gradient-to-r from-black to-black max-w-screen-xl mx-auto">
                <div className=" flex justify-around flex-col-reverse items-center  md:flex-row py-20">
                    <div className=" max-w-2xl lg:max-w-3xl p-20 border-red-700 border-r-4">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-gray-300 ">
                         {" "}
                            <span class="text-red-500">Impact{" "}</span>
                            Of Climate Change
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>
                        <p class="text-md font-normal lg:text-xl text-gray-500">
                        Climate change significantly affects global temperatures, biodiversity, and weather patterns. It leads to sea-level rise, causing displacement and habitat loss. It increases the frequency of extreme weather events like hurricanes and droughts, posing threats to infrastructure and lives. Climate change also disrupts ecosystems, endangering species, affects human health, exacerbates social inequalities, and carries serious economic consequences.
                        </p>
                        <div className=" mt-4">
                            <Link
                                href="./impact"
                                class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900  cursor-pointer"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlkH4ZVUx4-OFhjcwcbtx4nchnUKTIcZ0un_E-nx3Q3qZX54IDVozCNOaLS6kJQcXIxRr5t5DYinNuV3BcMqqUM0gjOC5C1pZK-8vDczN6GvzjTOHKIW1rOmEOdixxPiYl5Fgnm_OlX-wkT3QzpsVVksmYcKTCjO2rmMpAba8ryuw4CVid6o0HS4boJJs/s3000/Lovepik_com-401585579-water-pollution.png"
                        />
                    </div>
                </div>
            </div>


            <div className=" bg-gradient-to-r from-green-500 to-white max-w-screen-xl mx-auto">
                <div className=" flex justify-around items-center flex-col  md:flex-row py-20">

                <div className="">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirOQel3PnwWCMLNs1CBQisr6ZPkT2gyY9jcjuP7vP2FtE39Dv-xuvLryCZAaDnbvOp25MHycCQRYNekG8gLneVx9oYl2Qhs9435jzlImcZdSwo8VZMmWx7rxe8FQ6h5Ld_jGsN2LXoy4OwdU2SGpAEnzGH0Ghh7alWMIWHlJIFGS4gz0jsRz_M9tQjkVw/s835/toppng.com-save-earth-free-png-image-save-the-earth-1265x1141.png"
                        />
                    </div>
                    <div className=" max-w-2xl lg:max-w-3xl p-20 border-green-700 border-l-4">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-gray-700 ">
                        Climate Change{" "}
                            <span class="text-green-700">Solutions</span>
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-900 mb-3"></div>
                        <p class="text-md font-normal lg:text-xl text-gray-600">
                        The road to a sustainable future is a collective journey. Green Ed doesn't just stop at informing; we aim to inspire. We provide practical, science-backed solutions that individuals, communities, and governments can implement to mitigate the impact of climate change. Explore strategies spanning from reducing carbon footprint and adopting renewable energy to supporting sustainable policies and practices.
                        </p>
                        <div className=" mt-4">
                            <Link
                                href="./solution"
                                class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900  cursor-pointer"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>

     
        </>
    );
};

export default Main;
