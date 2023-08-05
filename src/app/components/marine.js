import React from "react";
import Image from "next/image";

const Marine = () => {
    return (
        <div className=" pt-20 p-2">
            <div className=" p-8  rounded-xl bg-green-100 from-gray-200/40 to-blue-400/30 max-w-screen-lg flex items-center justify-center flex-col mx-auto">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center  text-gray-700 md:text-5xl lg:text-6xl ">
                    Impact of Climate Change on{" "}
                    <span className="text-blue-700 ">Marine Life</span>
                </h1>

                <Image
                    width={600}
                    height={400}
                    className=" my-5"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ2DsSrC-Z0szX3UwKt5QwXSqg0OldzLSHKWQ1JMRVQ_iEiA3jHMEd7gOxX_I3tqKT7AOzKW9Oqeqf6yZkEE6HyAxdPFe2v1obZRn9uQ3fesXQdCwz_MTi4kNqQJ0Z2IKLzsJ-VM5iDFW58eLQezil0r4YRJXq0VJe3NtiADtA9f6NEqWjhLGHlyqVlyE/s2000/Climate-change-ocean-infographic-2000.pngng"
                />
                <p className="text-lg font-normal text-gray-700 lg:text-xl max-w-xl text-left my-4 ">
                    Climate change is posing severe threats to marine life,
                    fundamentally altering the health of our oceans. Rising
                    ocean temperatures, acidification, and deoxygenation
                    directly impact marine biodiversity, affecting the survival
                    of numerous species. Warmer waters can lead to coral
                    bleaching, a phenomenon that not only jeopardizes the
                    existence of corals but also the multitude of species that
                    rely on them for shelter and food.
                </p>
                <p className="text-lg font-normal text-gray-700 lg:text-xl max-w-xl text-left ">
                    Furthermore, ocean acidification, a consequence of excessive
                    CO2 absorption, undermines the ability of shell-building
                    organisms to construct their shells, a critical aspect of
                    their survival. Changes in sea temperatures also disrupt
                    migration and breeding patterns, threatening fish
                    populations and the larger food chain. Protecting our oceans
                    and the marine life they support is not just about
                    preserving biodiversity - it's integral to human survival,
                    considering the role of oceans in our global climate and
                    food supply.
                </p>
                <a
                    href="https://en.wikipedia.org/wiki/Effects_of_climate_change_on_oceans"
                    target="_blank"
                    className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Know More
                </a>
            </div>
        </div>
    );
};
//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ2DsSrC-Z0szX3UwKt5QwXSqg0OldzLSHKWQ1JMRVQ_iEiA3jHMEd7gOxX_I3tqKT7AOzKW9Oqeqf6yZkEE6HyAxdPFe2v1obZRn9uQ3fesXQdCwz_MTi4kNqQJ0Z2IKLzsJ-VM5iDFW58eLQezil0r4YRJXq0VJe3NtiADtA9f6NEqWjhLGHlyqVlyE/s2000/Climate-change-ocean-infographic-2000.png
export default Marine;
