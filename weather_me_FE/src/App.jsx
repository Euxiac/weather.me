import * as React from "react";

import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import NavigationBar from "./components/basic/NavigationBar";
import AddCard from "./components/widgets/AddCard";
import BasicCard from "./components/widgets/BasicCard";
import Widget_Name from "./components/widgets/Widget_Name"
import Widget_Location from "./components/widgets/Widget_Location";
import Widget_RightNow from "./components/widgets/Widget_RightNow";
import Widget_Duck from "./components/widgets/Widget_Duck";
import Widget_ComingWeek from "./components/widgets/Widget_ComingWeek";
import Widget from "./components/basic/Widget";

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
            <Widget><Widget_Name /></Widget>
            <Widget><Widget_Location /></Widget>
            </Stack>

            <Stack id="body_WidgetStack" direction="column" spacing={2}>
              <Widget><Widget_RightNow/></Widget>
              <Widget><Widget_ComingWeek/></Widget>
              <Widget><Widget_Duck /></Widget>
              <AddCard />
            </Stack>
            
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default WeatherMeApp;
