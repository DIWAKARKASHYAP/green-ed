import React from "react";
import Image from "next/image";

const Human = () => {
    return (
        <div className=" pt-20 p-2">
            <div className=" p-8  rounded-xl bg-green-100 from-gray-200/40 to-gray-500/30 max-w-screen-lg flex items-center justify-center flex-col mx-auto">
                {/* <div className=" flex justify-around py-20">
                    <div className=" max-w-2xl lg:max-w-3xl p-20">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
                            Ocean{" "}
                            <span class="text-blue-600 dark:text-lime-500">
                                Acidification{" "}
                            </span>
                        </h1>
                        <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>
                        <p class="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                            Ocean acidification, caused by oceans absorbing
                            excessive CO2, poses a threat to marine life,
                            particularly shell-building organisms and coral
                            reefs. This loss of biodiversity can disrupt aquatic
                            ecosystems, affecting fishing and tourism
                            industries. Moreover, weakened oceans become less
                            efficient at absorbing CO2, exacerbating global
                            warming. It's essential to reduce CO2 emissions and
                            protect our oceans for a balanced climate.
                        </p>
                    </div>
                    <div className="">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS5XzfxAdT_5WbLSWLOP1uaP-5kCGWeHCuhptrQUiAvlyjRO_mp3UzIfQynZi-RHeNzHYa33mp3Oj9nY5mkdZhcIxxb2FxY2v3SY-QTUXgV5IYHLjKigx7L4GR425Yl_x3QU44fYBE1zWksf1YF3ddaYO_xB4lebycqK1dKJ9wCmjHyS-2xaoWA3TF2SQ/s512/ocean-acidification.png"
                        />
                    </div>
                </div> */}

                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center  text-gray-700 md:text-5xl lg:text-6xl ">
                    Impact of Climate Change on{" "}
                    <span class="text-red-700 ">Human Health</span>
                </h1>

                <Image
                    width={600}
                    height={400}
                    className=" my-10"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh61JGVL7Moc1j2gkYedsY2eTnJzAHVGv4TX3P9y8rvGTP97D09G5TedMermfjeP1MPjPeqY-I7c_fTUOxjdU6d2zJ9j5oQ_Ll0ntsRS31gaUAd-TAHLlO82-RS8nr2OkHX6fQYyA9n4pf7TBz8AzE_vgZmeu3H9P6GHZq1VJ4g_NSt-3rrSAe6Cai4Wjc/s920/pngwing.com(9).png"
                />
                <p class="text-lg font-normal text-gray-700 lg:text-xl max-w-xl text-left my-4 ">
                    Climate change isn't just an environmental issue—it's a
                    serious health threat too. Rising temperatures contribute to
                    heat-related illnesses and deaths and exacerbate respiratory
                    disorders by intensifying air pollution and allergens.
                    Additionally, shifting climate patterns can lead to more
                    frequent and intense natural disasters, causing injury,
                    displacement, and mental health challenges.
                </p>
                <p class="text-lg font-normal text-gray-700 lg:text-xl max-w-xl text-left ">
                    Furthermore, climate change disrupts ecosystems, increasing
                    the risk of infectious diseases. Changes in temperature and
                    precipitation can expand the habitats of disease-carrying
                    insects like mosquitoes, leading to a rise in diseases like
                    malaria and dengue fever. Also, the disruption in food
                    production can lead to malnutrition. It's crucial that we
                    recognize these health risks and work collectively to
                    mitigate the impacts of climate change.
                </p>
                <a
                    href="https://en.wikipedia.org/wiki/Effects_of_climate_change_on_human_health"
                    target="_blank"
                    class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Know More
                </a>
            </div>
        </div>
    );
};
//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ2DsSrC-Z0szX3UwKt5QwXSqg0OldzLSHKWQ1JMRVQ_iEiA3jHMEd7gOxX_I3tqKT7AOzKW9Oqeqf6yZkEE6HyAxdPFe2v1obZRn9uQ3fesXQdCwz_MTi4kNqQJ0Z2IKLzsJ-VM5iDFW58eLQezil0r4YRJXq0VJe3NtiADtA9f6NEqWjhLGHlyqVlyE/s2000/Climate-change-ocean-infographic-2000.png
export default Human;
