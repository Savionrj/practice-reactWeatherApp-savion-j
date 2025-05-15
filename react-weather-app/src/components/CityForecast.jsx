import { useParams, Link } from "react-router-dom";

export default function CityForecast({ city }) {
  const { cityName } = useParams();

  return (
    <div>
      <h1>{cityName}</h1>
      <h1>{city[cityName].summary}</h1>
      <h1>{city[cityName].details}</h1>
    </div>
  );
}
