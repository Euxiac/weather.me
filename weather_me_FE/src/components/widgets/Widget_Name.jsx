import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

function Widget_Name() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: "48px" }}>
      <Stack direction="row" spacing={1}>
        <Typography variant="h4">Hello, Luke</Typography>
        <IconButton aria-label="Edit" size="small">
          <EditIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Widget_Name;
