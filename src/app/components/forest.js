import React from 'react'
import Image from 'next/image'

const Forest = () => {
  return (
    <div>
       <div>
            <div className="bg-gradient-to-r from-green-800 to-black max-w-screen-xl mx-auto">
                <div className=" flex justify-around flex-col items-center  md:flex-row py-20">
                    <div className="   m-10">
                        <Image
                            width={400}
                            height={400}
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2wOqu6wQKHiM_U4nLHojnTtc-B-mqa9CeUBbdoTn5-EjWnUi8R0p7gRxfHIKR6mr3g-OVhvAAM2aIrsGjNa_90AzUzXG8loaGlX4rByQpWxWUG_QqjJboTAgj1xnEhYIQHy7xhXl2_jl48iEZTYax5dUkbnHCOL72WowDqxZw2eMAb59njTWtgpD_3lk/s8203/vecteezy_trunk-stump-clipart-design-illustration_9305137_300.png"
                        />
                    </div>
                    <div className=" max-w-2xl lg:max-w-3xl p-20 border-gray-400 border-l-4 ">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
                            <span class="text-black dark:text-amber-700">
                            Deforestation{" "}
                            </span>
                             and Climate Change
                        </h1>
                        <div className=' w-11/12 h-1 rounded bg-gray-300 mb-3'></div>

                        <p class="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Deforestation contributes significantly to climate change, as trees absorb CO2, a major greenhouse gas. When trees are cut down or burned, stored carbon is released back into the atmosphere, exacerbating global warming. Furthermore, by reducing forest cover, we lose crucial habitats and biodiversity. To combat climate change effectively, it's critical to halt deforestation and promote reforestation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forest
