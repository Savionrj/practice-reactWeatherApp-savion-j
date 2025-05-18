import { Link } from 'react-router-dom';

export default function CityList({ city }) {

  return (
    <div>
      {Object.keys(city).map((cityName) => (
        <Link to={`/forecast/${cityName}`}>
          {cityName}<br />
        </Link>
      ))}
    </div>
  );
}
