import * as React from "react";
import { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import IconButton from "@mui/material/IconButton";
import DuckIcon from "../icons/DuckIcon";

function Widget_Duck() {
  const [jokeText, setJokeText] = useState({ setup: "", punchline: "" });
  const getJoke = () => {
    axios
      .get(`https://official-joke-api.appspot.com/random_joke`)
      .then((res) => {
        setJokeText({ setup: res.data.setup, punchline: res.data.punchline });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CardActions>
        <IconButton aria-label="JokeMe" size="large" onClick={getJoke}>
          <DuckIcon/>
        </IconButton>
      </CardActions>
      <CardContent>
        {jokeText.setup || jokeText.punchline ? (
          <>
            <Typography variant="caption">The Duck quacks at you:</Typography>
            <Typography variant="h5">"{jokeText.setup}"</Typography>
            <Typography variant="body1">
              {jokeText.punchline} *quack*
            </Typography>
          </>
        ) : (
          <Typography variant="caption">
            I wonder what this duck does...
          </Typography>
        )}
      </CardContent>
      </>
  );
}

export default Widget_Duck;
