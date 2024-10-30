import * as React from "react";

import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import NavigationBar from "./components/basic/NavigationBar";
import AddCard from "./components/widgets/AddCard";
import Widget_Name from "./components/widgets/Widget_Name";
import Widget_Location from "./components/widgets/Widget_Location";
import Widget_RightNow from "./components/widgets/Widget_RightNow";
import Widget_Duck from "./components/widgets/Widget_Duck";
import Widget_ComingWeek from "./components/widgets/Widget_ComingWeek";
import Widget from "./components/basic/Widget";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const weatherMeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ebb969',
    },
    secondary: {
      main: '#388e3c',
    },
    background: {
      paper: 'rgba(230,230,230,0.1)',
      default: '#242526',
    },
    text: {
      primary: '#e6e6e6',
      secondary: 'rgba(230,230,230,0.8)',
      disabled: 'rgba(230,230,230,0.5)',
    },
  },
});

const WeatherMeApp = () => {
  return (
    <ThemeProvider theme={weatherMeTheme}>
      <CssBaseline />
      <>
        <NavigationBar />
        <Container maxWidth="sm" elevation={0}>
          <Box>
            <Stack
              id="stackOfStacks"
              direction="column"
              spacing={6}
            >
              <Stack id="header_WidgetStack" direction="column" spacing={2}>
                <Widget_Name />
                <Widget_Location />
              </Stack>

              <Stack id="body_WidgetStack" direction="column" spacing={4}>
                <Widget>
                  <Widget_RightNow />
                </Widget>
                  <Widget_ComingWeek />
                <Widget>
                  <Widget_Duck />
                </Widget>
                <AddCard />
              </Stack>
            </Stack>
          </Box>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default WeatherMeApp;
