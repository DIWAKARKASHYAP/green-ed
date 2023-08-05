import React from "react";
import Image from "next/image";

const Economical = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-amber-700 to-black max-w-screen-xl mx-auto">
                <div className=" flex justify-around flex-col items-center  md:flex-row py-20">
                    <div className="  m-5 ">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxjGfmVXtOFnNnMN3Rb1gebGoiUXjfPiHwD0EZYUK3csHRWgYObTrn756V09oB9TW8HU3PIsWKomGUPcl1IIU5AXS9X3KrozZAY98CXQU0bjyI9J5lutrs8pMsZIPSVIdIg7YtPv5ZGvJoTtc796DOz2flb--fcyaZ-l_Dy6_Lw8Tjj4UB64c7j84WBRE/s960/city-ruins-196f326e897ca618752a228c1e04ba84.png"
                        />
                    </div>
                    <div className=" max-w-2xl lg:max-w-3xl p-20 border-amber-600 border-l-4 ">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
                            {" "}
                            <span className="text-red-500">Economic </span>
                            Impact of climate change{" "}
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>

                        <p className="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                            Climate change poses serious economic threats.
                            Extreme weather events cause infrastructure damage,
                            leading to substantial reconstruction costs.
                            Agricultural disruptions due to shifting weather
                            patterns impact food production, increasing
                            commodity prices. Health-related expenses rise due
                            to climate-related illnesses and diseases.
                            Furthermore, adapting to changing climates requires
                            significant financial investments, placing
                            additional burden on economies, particularly those
                            of developing countries
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Economical;
