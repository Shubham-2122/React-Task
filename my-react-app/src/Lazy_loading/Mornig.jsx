import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Mornig() {



    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {
                data.map((value) => {
                    return(
                        <div key={value.id} className="rounded-md border">
                            <img
                                src={value.thumbnailUrl}
                                alt="Laptop"
                                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                            />
                            <div className="p-4">
                                <h1 className="inline-flex items-center text-lg font-semibold">{value.title}</h1>
                                <p className="mt-3 text-sm text-gray-600">
                                {value.description ? value.description : 'No description available'}
                                </p>

                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Mornig
