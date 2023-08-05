import React from "react";
import Image from "next/image";

const Biodiversity = () => {
    return (
        <div className=" bg-gradient-to-r from-sky-700 to-black max-w-screen-xl mx-auto">
            <div className=" flex justify-around flex-col items-center  md:flex-row  py-20">
                <div className=" m-5">
                    <Image
                        width={400}
                        height={400}
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilHnpu5Jw-P9xFdiYUPH5e_CAmQZ5S4YCwRuZVGLgekx49UITZtEuTbVuQCULrEmlp1iXDvn5k1rUkosliN3HH9_Edpj3W76YY1b5qbad3f4xRfyOgZnIkmFn8X1lZKKP4uhawelXTj9ZnS4tMUHb5z_F_ajAuUyPhcq-Z9-w_43KVNt7yfwcUq-1R2cc/s947/Daco_4159291.png"
                    />
                </div>
                <div className=" max-w-2xl lg:max-w-3xl p-20 border-sky-400 border-l-4">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
                     Biodiversity {" "}
                        <span class="text-red-500">
                        loss{" "}
                        </span>
                        by climate change
                    </h1>
                    <div className=" w-11/12 h-1 rounded bg-gray-300 mb-3"></div>
                    <p class="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Climate change profoundly impacts biodiversity. Rising
                        temperatures and changing precipitation patterns disrupt
                        ecosystems, causing species to migrate or perish. Ocean
                        acidification threatens marine life, particularly coral
                        reefs. Polar species face habitat loss due to melting
                        ice caps. Such disturbances can lead to loss of
                        biodiversity, with some species facing extinction,
                        disrupting the balance of our planet's ecosystems.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Biodiversity;
