import Image from "next/image";

export default function Solution() {
    return (
        <div className=" bg-green-600">
            <div className=" pt-10 rounded-md">
                <div className=" max-w-2xl  m-auto  bg-black/25 p-10 rounded-lg ">
                    <div className="container m-5 mx-auto  px-4 text-gray-300">
                        <h1 className="text-3xl sm:text-5xl  font-bold mb-5 text-green-400">
                            Solutions for Climate Change
                        </h1>
                        <div className="  h-1 rounded bg-gray-300 mb-3"></div>

                        <ul className="list-disc space-y-2">
                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Shift to Renewable Energy:
                                </span>{" "}
                                Transitioning from fossil fuels to renewable
                                energy sources, such as solar, wind, and
                                hydropower, can significantly cut greenhouse gas
                                emissions.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Enhance Energy Efficiency:
                                </span>{" "}
                                Implementing energy-saving measures across
                                industries, residential buildings, and
                                transportation can reduce energy consumption.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Adopt Sustainable Agriculture:
                                </span>{" "}
                                Sustainable farming practices can reduce
                                emissions and make the agriculture sector more
                                resilient to the effects of climate change. This
                                can include a move towards plant-based diets to
                                reduce the demand for high-emission meat and
                                dairy products.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Preserve and Restore Ecosystems:
                                </span>{" "}
                                Forests, wetlands, and other ecosystems can
                                absorb massive amounts of CO2 from the
                                atmosphere. Protecting these areas from
                                deforestation and degradation, and investing in
                                large-scale restoration efforts, can be a
                                powerful tool against climate change.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Invest in Carbon Capture and Storage:
                                </span>{" "}
                                Technology that captures and stores CO2
                                emissions could help reduce the amount of
                                greenhouse gases in the atmosphere.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Improve Waste Management:
                                </span>{" "}
                                Reducing waste, enhancing recycling programs,
                                and managing organic waste in a way that
                                produces bioenergy can also reduce emissions.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Develop Climate Policies:
                                </span>{" "}
                                Governments have a vital role in implementing
                                policies that promote clean energy, regulate
                                emissions, and encourage sustainable practices
                                in various sectors.
                            </li>

                            <li className="text-lg">
                                <span className="font-semibold text-gray-100">
                                    Climate Education and Advocacy:
                                </span>{" "}
                                Educating the public about the realities of
                                climate change and advocating for
                                climate-friendly policies at all levels of
                                government can drive societal change.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
