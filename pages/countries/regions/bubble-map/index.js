
import BubbleMap from './bubble-map';
import { useEffect, useState } from 'react';

export default function Home() {
    const [wineData, setWineData] = useState([]);
    const [worldGeoData, setWorldGeoData] = useState({});

    useEffect(() => {
        // Fetch wine data. Here's a dummy structure:
        // const sampleData = [
        //     { country: "France", production: 5000, latitude: 46.603354, longitude: 1.888334 },
        //     ...
        // ];
        // setWineData(sampleData);

        // Fetch world geo data
        fetch("/path_to_your_world_data_file.json")
            .then(response => response.json())
            .then(data => setWorldGeoData(data));
    }, []);

    return (
        <div>
            <BubbleMap data={wineData} worldData={worldGeoData} />
        </div>
    );
}

