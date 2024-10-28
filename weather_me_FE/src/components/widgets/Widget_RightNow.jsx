import * as React from "react";
import { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Widget_RightNow() {
  const [location, setLocation] = useState({
    lat: -31.9558933,
    lon: 115.8605855,
  });
  const [currentWeather, setCurrentWeather] = useState({
    weather: "",
    desc: "",
    icon:"",
  });
  const [currentTemperature, setCurrentTemperature] = useState({
    temperature: "",
    feels_like: "",
  });

  const fetch = () => {
    axios
      .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&lang=en&appid=828619469cc259300802f375e9106b7b&exclude=minutely,hourly,daily,alerts`)
      .then((res) => {
        console.log("\/ API call from Right Now Widget");
        console.log(res);
        const currData = res.data.current;
        const weatherData = currData.weather[0];
        setCurrentWeather({weather: weatherData.main, desc: weatherData.description, icon: weatherData.icon});
        setCurrentTemperature({temperature: currData.temp, feels_like: currData.feels_like,});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card elevation={2} sx={{ minWidth: 275 }}>
      <CardContent>
        <p>
          lat={location.lat} lon={location.lon}
        </p>
        <p>weather icon: {currentWeather.icon}</p>
        <p>weather: {currentWeather.weather}</p>
        <p>weather description: {currentWeather.desc}</p>
        <p>temperature: {currentTemperature.temperature}</p>
        <p>feels like: {currentTemperature.feels_like}</p>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={fetch}>
          Fetch
        </Button>
      </CardActions>
    </Card>
  );
}

export default Widget_RightNow;
