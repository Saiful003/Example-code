import { Avatar, Box, styled, Typography } from "@mui/material";
import React from "react";
import vai from "./images/Bitul Boishnob 1.png";

function Story() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          maxWidth: "100%",
          width: 130,
          aspectRatio: 1,
          display: "block",
          objectFit: "contain",
          borderRadius: 2,
          boxShadow: 3,
        }}
        component="img"
        alt="The house from the offer."
        src={vai}
      ></Box>

      <Box sx={{ position: "relative" }}>
        <Avatar
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
          alt="Remy Sharp"
          src={vai}
          variant="square"
        />
        <Typography
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            // border: 1,
            textAlign: "center",
            top: 32,
            color: "white",
          }}
        >
          Anisul Islam
        </Typography>
      </Box>
    </Box>
  );
}

export default Story;
