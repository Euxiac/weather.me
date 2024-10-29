import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function Widget_Location() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack
        id="stack_location"
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Typography variant="caption">
          Perth
        </Typography>
        <Typography variant="caption">
          WA
        </Typography>
        <Typography variant="caption">
          Australia
        </Typography>
      </Stack>
      </Box>
  );
}

export default Widget_Location;
