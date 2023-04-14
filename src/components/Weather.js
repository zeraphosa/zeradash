import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { useTranslation } from "react-i18next";

export default function Weather() {
  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`)
        .then((res) => {
          setWeather(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    });
  }, [API_KEY]);

  const renderConditionIcon = (conditionCode) => {
    switch (conditionCode) {
      case 1000:
        return <Icon name="light" size={17} />;
      case 1003:
        return <Icon name="wPartlyCloudy" size={17} />;
      case 1006:
      case 1009:
        return <Icon name="wCloudy" size={17} />;
      case 1030:
      case 1135:
        return <Icon name="wFoggy" size={17} />;
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
        return <Icon name="wRainy" size={17} />;
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
        return <Icon name="wSnowy" size={17} />;
      case 1087:
      case 1273:
      case 1276:
        return <Icon name="wThunder" size={17} />;
      default:
        return null;
    }
  };

  return (
    <span>
      {loading ? (
        <p>{t("loading")}...</p>
      ) : weather ? (
        <div>
          <p>{weather.location.name}</p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {weather.current.temp_c}°C {renderConditionIcon(weather.current.condition.code)}
          </p>
        </div>
      ) : (
        <p>{t("weather")}</p>
      )}
    </span>
  );
}
