import React from "react";
import Image from "next/image";

const Smoke = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-700 to-black max-w-screen-xl mx-auto">
                <div className=" flex justify-around flex-col items-center  md:flex-row py-20">
                    <div className=" m-5">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjohF28esiInSk45621RVvHM9HzVzeS67_p0tKKq2SY61ZIOXA1WGIF94PqcA9bvZHImSqynI6xpNT2dTl5ESUdeoQzguzIyMig9YDK-59ukGpy50LEQtg2wYypXUM8XxLK0fxDus8nETaMzm7m9JYGSBZE_t_es6qHXPGqalJ6s6wlJGd_OWdz16IFOH4/s2001/%E2%80%94Pngtree%E2%80%94purify%20air%20to%20reduce%20pollution_4734748.png"
                        />
                    </div>
                    <div className=" max-w-2xl lg:max-w-3xl p-20 border-gray-400 border-l-4 ">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
                            Effect of{" "}
                            <span className="text-gray-500">Pollution </span>
                            on climate change
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>

                        <p className="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                            Pollution, especially from greenhouse gases like
                            carbon dioxide and methane, intensifies climate
                            change by trapping heat in our atmosphere. This
                            results in global warming, leading to extreme
                            weather, melting ice caps, rising sea levels, and
                            loss of biodiversity. It's crucial we reduce
                            pollution by embracing clean energy, sustainable
                            practices, and mindful consumption for the health of
                            our planet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Smoke;
