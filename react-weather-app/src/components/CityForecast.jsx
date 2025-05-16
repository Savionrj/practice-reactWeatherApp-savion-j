import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function CityForecast({ city }) {
  const { cityName } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{cityName}</h1>
      {loading ? (<p>Loading Weather Data...</p>) :
        (<div>
          <p>{city[cityName].summary}</p>
          <p>{city[cityName].details}</p>
        </div>)}
    </div>
  );
}
