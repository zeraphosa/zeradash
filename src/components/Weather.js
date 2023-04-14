import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(latitude, longitude);
    });
  }, []);

  const fetchWeatherData = (latitude, longitude) => {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=621da8d76bad46fe82363946231404&q=${latitude},${longitude}`)
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const renderConditionIcon = (conditionCode) => {
    switch (conditionCode) {
      case 1000:
        return <Icon name="light" size={20} />;
      case 1003:
        return <Icon name="wPartlyCloudy" size={20} />;
      case 1006:
      case 1009:
        return <img src="/images/cloudy.png" alt="Cloudy" />;
      case 1030:
      case 1135:
        return <img src="/images/fog.png" alt="Fog" />;
      case 1063:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1240:
      case 1243:
      case 1246:
        return <img src="/images/rain.png" alt="Rain" />;
      case 1066:
      case 1114:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1255:
      case 1258:
        return <img src="/images/snow.png" alt="Snow" />;
      case 1087:
      case 1273:
      case 1276:
        return <img src="/images/thunderstorm.png" alt="Thunderstorm" />;
      default:
        return null;
    }
  };

  return (
    <span>
      {loading ? (
        <p>Loading...</p>
      ) : weather ? (
        <div>
          <p>{weather.location.name}</p>
          <p style={{display: "flex", alignItems: "center", gap: "10px"}}>
            {weather.current.temp_c}°C {renderConditionIcon(weather.current.condition.code)}
          </p>
        </div>
      ) : (
        <p>Unable to retrieve weather data</p>
      )}
    </span>
  );
}
