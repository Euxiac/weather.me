import * as React from "react";
import { useState, useEffect  } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Skeleton from '@mui/material/Skeleton';

function Widget_ComingWeek() {
  const weatherEntry = (day, data) => {
    return (
      <Box>
        <h3>{day}</h3>
        <p>weather icon: {data ? data.weather[0].icon : "n/a"}</p>
        <p>weather: {data ? data.weather[0].main : "n/a"}</p>
        <p>weather description: {data ? data.summary : "n/a"}</p>
        <p>max temp: {data ? data.temp.max : "n/a"}</p>
        <p>min temp: {data ? data.temp.min : "n/a"}</p>
      </Box>
    );
  };

  const [location, setLocation] = useState({
    lat: -31.9558933,
    lon: 115.8605855,
  });

  const key = '';

  const [dataAvailable, setDataAvailable] = useState(false);
  const [weatherArray, setWeatherArray] = useState("");
    const weatherDataArray = [];

  function populateComingWeekStack() {
    //console.log(`populate ${weatherArray[0]}`);
    if (dataAvailable) {
      return (
        <Stack
          id="Stack_ComingWeek"
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          spacing={2}
        >
          {weatherEntry("Today", weatherArray[0])}
          {weatherEntry("Tommorow", weatherArray[1])}
          {weatherEntry("Day", weatherArray[2])}
          {weatherEntry("Day", weatherArray[3])}
          {weatherEntry("Day", weatherArray[4])}
          {weatherEntry("Day", weatherArray[5])}
          {weatherEntry("Day", weatherArray[6])}
          {weatherEntry("Day", weatherArray[7])}
        </Stack>
      );
    }
    else {
        return (
        <p>loading...</p>
        );
    }
  }

  const fetch = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&lang=en&appid=${key}&exclude=minutely,hourly,current,alerts`
      )
      .then((res) => {
        console.log("/ API call from Coming Week Widget");
        console.log(res);
        const dataArray = res.data.daily;
        let tempArr = []
        for (let index = 0; index < dataArray.length; index++) {
          //console.log(dataArray[index]);
          tempArr.push(dataArray[index]);
        }
        setWeatherArray(tempArr);
        setDataAvailable(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card elevation={2} sx={{ minWidth: 275 }}>
      <CardContent sx={{ overflow: "auto" }}>
        {populateComingWeekStack()}
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={fetch}>
          Fetch
        </Button>
      </CardActions>
    </Card>
  );
}

export default Widget_ComingWeek;
