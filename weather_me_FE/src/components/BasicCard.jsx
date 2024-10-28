import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function BasicCard() {
  const [edit, setEdit] = useState(false);

  if (!edit) {
    return (
      <Card elevation={2} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Basic Widget
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card
        elevation={2}
        sx={{ minWidth: 275, background: "rgba(0, 0, 0, 0.05)" }}
      >
        <CardActions>
          <IconButton aria-label="PlaylistAddCircleIcon" size="large">
            <PlaylistAddCircleIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="BuildCircleIcon" size="large">
            <BuildCircleIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="RemoveCircleIcon" size="large">
            <RemoveCircleIcon fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default BasicCard;
