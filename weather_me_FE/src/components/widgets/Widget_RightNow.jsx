import * as React from "react";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import { fetchCurrentWeather } from "../../services/apiService";
import mock_weather from "./mock_data/mock_weather.json";
import { UsingMockData_warning } from "./widget_components/Card_Alerts";
import returnIcon from "../../Utilities/returnIcon";

function Widget_RightNow() {
  const [usingMockData, setUsingMockData] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({
    weather: "",
    desc: "",
    icon: "",
  });
  const [currentTemperature, setCurrentTemperature] = useState({
    temperature: "",
    feels_like: "",
  });

  useEffect(() => {
    //console.log("effect run on Right Now");
    fetchCurrentWeather()
      //.fetchRightNow returns a promise that will be fulfilled at some point and then it runs .then. Promise success
      .then((res) => {
        //console.log(res);
        const currData = res.data.current;
        setUsingMockData(false);
        const weatherData = currData.weather[0];
        setCurrentWeather({
          weather: weatherData.main,
          desc: weatherData.description,
          icon: weatherData.icon,
        });
        setCurrentTemperature({
          temperature: currData.temp,
          feels_like: currData.feels_like,
        });
      })
      // you can also use .catch for in case your promise has errors. Promise fail
      .catch((err) => {
        console.log(err);
        //on catch use mock data instead
        const currData = mock_weather.current;
        const weatherData = currData.weather[0];
        setUsingMockData(true);
        setCurrentWeather({
          weather: weatherData.main,
          desc: weatherData.description,
          icon: weatherData.icon,
        });
        setCurrentTemperature({
          temperature: currData.temp,
          feels_like: currData.feels_like,
        });
      });
  }, []);

  return (
    <Card elevation={2} sx={{ minWidth: 275 }}>
      <CardContent>
        {usingMockData ? <UsingMockData_warning /> : null}
        {returnIcon(currentWeather ? currentWeather.icon : null)}
        <p>weather icon: {currentWeather.icon}</p>
        <p>weather: {currentWeather.weather}</p>
        <p>weather description: {currentWeather.desc}</p>
        <p>temperature: {currentTemperature.temperature}</p>
        <p>feels like: {currentTemperature.feels_like}</p>
      </CardContent>
    </Card>
  );
}

export default Widget_RightNow;
