import * as React from "react";
import { useState } from "react";
import axios from "axios";
import LocationSearch from "./components/LocationSearch";
import Widget from "./components/Widget";
import BasicCard from "./components/BasicCard";

import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import NavigationBar from "./components/NavigationBar";
import Paper from "@mui/material/Paper";
import AddCard from "./components/AddCard";
import Widget_Name from "./components/widgets/Widget_Name"
import Widget_Location from "./components/widgets/Widget_Location";
import Widget_Test from "./components/widgets/Widget_Test";
import Widget_RightNow from "./components/widgets/Widget_RightNow";
import Widget_Duck from "./components/widgets/Widget_Duck";
import Widget_ComingWeek from "./components/widgets/Widget_ComingWeek";

const WeatherMeApp = () => {
  return (
    <>
      <NavigationBar />
      <Container maxWidth="sm" elevation={0}>
        <Box>
          <Stack
            id="stackOfStacks"
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={4}
          >

            <Stack id="header_WidgetStack" direction="column" spacing={2}>
              <Widget_Name />
              <Widget_Location />
            </Stack>

            <Stack id="body_WidgetStack" direction="column" spacing={2}>
              <Widget_RightNow/>
              <Widget_ComingWeek/>
              <Widget_Duck />
              <AddCard />
            </Stack>
            
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default WeatherMeApp;
