import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";

function Widget_Location() {
  return (
    <CardContent sx={{ minWidth: 275 }}>
      <Stack
        id="stack_location"
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Typography variant="subtitle1">
          Perth
        </Typography>
        <Typography variant="subtitle1">
          WA
        </Typography>
        <Typography variant="subtitle1">
          Australia
        </Typography>
      </Stack>
    </CardContent>
  );
}

export default Widget_Location;
