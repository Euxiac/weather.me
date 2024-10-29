import * as React from "react";
import { useState, useEffect  } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { fetch8DaysWeather, fetchCurrentTime } from "../../services/apiService";
import mock_weather from "./mock_data/mock_weather.json";
import mock_time from "./mock_data/mock_time.json";
import { UsingMockData_warning } from "./widget_components/Card_Alerts";
import returnIcon from "../../Utilities/returnIcon";

function Widget_ComingWeek() {
  const weatherEntry = (day, data, ukey) => {
    return (
      <Box key={ukey}>
        <h3>{day}</h3>
        {returnIcon(data ? data.weather[0].icon : null)}
        <p>weather icon: {data ? data.weather[0].icon : "n/a"}</p>
        <p>weather: {data ? data.weather[0].main : "n/a"}</p>
        <p>weather description: {data ? data.summary : "n/a"}</p>
        <p>max temp: {data ? data.temp.max : "n/a"}</p>
        <p>min temp: {data ? data.temp.min : "n/a"}</p>
      </Box>
    );
  };

  const [dataAvailable, setDataAvailable] = useState(false);
  const [weatherArray, setWeatherArray] = useState("");
  const [timeAndDate, setTimeAndDate] = useState("");
  const daysOfWeek = [{0:"Sun", 1:"Mon", 2:"Tue", 3:"Wed", 4:"Thu", 5:"Fri", 6:"Sat"}];
  const [usingMockData, setUsingMockData] = useState(false);

  const CalculateDays = (today, daysFromToday) =>{
    let result;
    switch (today) {
      case "Sunday": 
      result = 0 + daysFromToday 
      break;
      case "Monday": 
      result = 1 + daysFromToday;
      break;
      case "Tuesday": 
      result = 2 + daysFromToday;
      break;
      case "Wednesday": 
      result = 3 + daysFromToday;
      break;
      case "Thursday": 
      result = 4 + daysFromToday;
      break;
      case "Friday": 
      result = 5 + daysFromToday;
      break;
      case "Saturday": 
      result = 6 + daysFromToday;
      break;
      default: break;
    }

    if (result > 6)
    {
      result = result - 6;
    }

    return result
  }

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
          {weatherEntry("Today", weatherArray[0], 0)}
          {weatherEntry("Tommorow", weatherArray[1], 1)}
          {
            weatherArray.map((daily, index) => {
              if(index === 0 || index === 1) return null;
              let day = CalculateDays(timeAndDate.day_of_week, index);
              let dayName = daysOfWeek[0][day];
              return weatherEntry(dayName, daily, index);
            })
          }
        </Stack>
      );
    }
    else {
        return (
        <p>loading...</p>
        );
    }
  }

  useEffect(() => {
    //console.log("effect run on Coming Week");
    fetch8DaysWeather()
      .then((res) => {
        //console.log("/ API call from Coming Week Widget for weather");
        //console.log(res);
        const dataArray = res.data.daily;
        setUsingMockData(false);
        let tempArr = []
        for (let index = 0; index < dataArray.length; index++) {
          //console.log(dataArray[index]);
          tempArr.push(dataArray[index]);
        }
        setWeatherArray(tempArr);
        //setDataAvailable(true);
      })
      .catch((err) => {
        console.log(err);
        const dataArray = mock_weather.daily;
        setUsingMockData(true);
        let tempArr = []
        for (let index = 0; index < dataArray.length; index++) {
          //console.log(dataArray[index]);
          tempArr.push(dataArray[index]);
        }
        setWeatherArray(tempArr);
      });

      fetchCurrentTime()
      .then((res) => {
        //console.log("/ API call from Coming Week Widget for Time");
        //console.log(res);
        setTimeAndDate(res.data);
        setDataAvailable(true);
      })
      .catch((err) => {
        console.log(err);
        setTimeAndDate(mock_time);
        setDataAvailable(true);
      });
  }, []);


  return (
    <Card elevation={2} sx={{ minWidth: 275 }}>
      <CardContent sx={{ overflow: "auto" }}>
      {usingMockData ? <UsingMockData_warning/>: null}
        {populateComingWeekStack()}
      </CardContent>
    </Card>
  );
}

export default Widget_ComingWeek;
