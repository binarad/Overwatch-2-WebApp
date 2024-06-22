import React, { useState, useEffect } from 'react'

interface CounterPicks {
	hero: string
	type: string
	counteredby?: []
}

const DataFetcher: React.FC = () => {
    const [data, setData] = useState<CounterPicks[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('../counterpicks.json')
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const result = await response.json();
        setData(result)
        };

        fetchData();
    }, []);

    return(
        <div>
            <h1>Fetched Data:</h1>
            <ul>
                {data.map((hero) => (
                    <li key={hero.type}>
                        {hero.hero} {hero.counteredby}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetcher;