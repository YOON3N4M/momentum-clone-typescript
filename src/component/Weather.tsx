import React, { useEffect, useState } from "react";
import "../css/Weather.css";

interface WeatherObj {
  name: string;
  weather: [{ main: string }];
  main: { temp: number };
}

function Weather({ componentHide }) {
  const [weatherInfo, setWeatherInfo] = useState<WeatherObj>({
    name: "",
    weather: [{ main: "" }],
    main: { temp: 0 },
  });
  const [loading, setLoading] = useState(true); // 해당 로딩이 없으면 api를 가져오기전에 div를 뿌리려고 해서 에러가 남.

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API_KEY = "9d0d4187ece57ed5672104bc05c78333";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
          setWeatherInfo(data);
          setLoading(false);
        });
    }
    function onGeoError() {
      console.log("위치 정보가 없어 날씨 데이터를 제공할 수 없습니다.");
    }
  }, []);
  console.log(weatherInfo);
  return (
    <div>
      {loading ? null : (
        <div
          id="weather"
          className={
            "fadein" +
            (componentHide.showWeather === true
              ? " display-flex"
              : " invisible")
          }
        >
          <span id="weather-city">{weatherInfo.name}</span>
          <span>{`${weatherInfo.weather[0].main}  ${weatherInfo.main.temp} °C`}</span>
        </div>
      )}
    </div>
  );
}

export default Weather;
