import React from "react";
import Image from "next/image";

const Ocean = () => {
    return (
        <div className=" bg-gradient-to-r from-lime-700 to-black max-w-screen-xl mx-auto">
            <div className=" flex justify-around flex-col items-center  md:flex-row py-20">
                <div className=" m-5">
                    <Image
                        width={400}
                        height={400}
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS5XzfxAdT_5WbLSWLOP1uaP-5kCGWeHCuhptrQUiAvlyjRO_mp3UzIfQynZi-RHeNzHYa33mp3Oj9nY5mkdZhcIxxb2FxY2v3SY-QTUXgV5IYHLjKigx7L4GR425Yl_x3QU44fYBE1zWksf1YF3ddaYO_xB4lebycqK1dKJ9wCmjHyS-2xaoWA3TF2SQ/s512/ocean-acidification.png"
                    />
                </div>
                <div className=" max-w-2xl lg:max-w-3xl p-20 border-lime-400 border-l-4">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
                        Ocean{" "}
                        <span className="text-blue-600 dark:text-lime-500">
                            Acidification{" "}
                        </span>
                    </h1>
                    <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>
                    <p className="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Ocean acidification, caused by oceans absorbing
                        excessive CO2, poses a threat to marine life,
                        particularly shell-building organisms and coral reefs.
                        This loss of biodiversity can disrupt aquatic
                        ecosystems, affecting fishing and tourism industries.
                        Moreover, weakened oceans become less efficient at
                        absorbing CO2, exacerbating global warming. It's
                        essential to reduce CO2 emissions and protect our oceans
                        for a balanced climate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ocean;
