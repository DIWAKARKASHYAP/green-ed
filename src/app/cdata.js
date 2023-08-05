// 'use client'
const climateData = async () => {
    const url = "https://climate-change-live-api5.p.rapidapi.com/news/Guardian";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "f3a8141370mshc3c3165880ee6f7p193533jsnd9dfe02dff78",
            "X-RapidAPI-Host": "climate-change-live-api5.p.rapidapi.com",
        },
    };

        const response = await fetch(url, options);
        const result = await response.text();
        return result
        // console.log(result);
  
};
export  default async function Page() {
    let data = await climateData()
    console.log(data)
    return (
        <>
<div>date is </div>
        <div>{data.at}</div>
        </>
    )
}
