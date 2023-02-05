import { Box, Container, Input, Stack } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo _2-05.svg";

function Header() {
  return (
    <Box
      sx={{
        bgcolor: "#131313",
        py: 1.5,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box component="img" alt="The house from the offer." src={logo} />
          <Box
            component="div"
            sx={{
              position: "relative",
              width: 551,
              borderRadius: 1.5,
              overflow: "hidden",
            }}
          >
            <Input
              sx={{
                bgcolor: "#222222",
                minHeight: 50,
                outline: "none",
                color: "white",
                pl: 5,
              }}
              autoFocus={false}
              disableUnderline
              fullWidth
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 10,
                bottom: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ color: "white" }} />
            </Box>
          </Box>

          <Stack direction="row" alignItems="center" spacing={2}>
            <p>Helo</p>
            <p>Helo</p>
            <p>Helo</p>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
