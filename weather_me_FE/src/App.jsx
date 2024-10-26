import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import LocationSearch from './components/LocationSearch';

const WeatherMeApp = () => {
  const [dummyText, setDummyText] = useState('');
  const [dummyNumber, setDummyNumber] = useState(1,'');
  const test = () => {
    axios.get(`https://dummyjson.com/posts/${dummyNumber}`)
    .then(res => {
      setDummyText(res.data.body);
      setDummyNumber(dummyNumber + 1);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div>
      <h1>Weather.me</h1>
      <Button variant="contained" onClick={test}>Hello world</Button>
      {dummyText ? <p>{dummyNumber + ". " + dummyText}</p> : null}
      <LocationSearch/>
    </div>
  );
}

export default WeatherMeApp;