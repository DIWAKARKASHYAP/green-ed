import Image from "next/image";
import Link from "next/link";

const getClimateNewsData = async () => {
    const url =
        "https://newsapi.org/v2/Everything?q=climate-change-problem&searchIn=title,description,content&language=en&pageSize=30&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb";

    try {
        const response = await fetch(url, { next: { revalidate: 30 } });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default async function DataPage() {
    const data = await getClimateNewsData();
    const pureData = await data.json();

    return (
        <>
            <div className=" bg-green-700 flex flex-wrap justify-evenly">
                {pureData.articles.map((data, index) => {
                    return (
                        <>
                            <div
                                key={index}
                                className="max-w-sm bg-green-100 border border-gray-200 rounded-lg shadow my-4 "
                            >
                                <img
                                    className="rounded-t-lg h-48 w-full  object-cover	"
                                    // fill={true}
                                    alt="image"
                                    src={data.urlToImage}
                                />

                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                        {data.title}
                                    </h5>
                                    <p className="mb-3 font-normal  h-24 overflow-hidden text-gray-700 ">
                                        {data.description}
                                    </p>

                                    <Link
                                        href={data.url}
                                        target="_blank"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 "
                                    >
                                        Read more
                                        <svg
                                            className="w-3.5 h-3.5 ml-2"
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
                                    </Link>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
            {/*             
            <div className="text-blue">{data.title}</div> 
            <div className="text-blue">{data.url}</div>
             <Image
                width={400}
                height={400}
                alt="image"
                src={data.thumbnail}
            /> 
             <div className="text-blue">{data.published}</div> 
             <div className="text-blue">{data.source}</div> */}
        </>
    );
}
