import React from "react";
import { Container, Stack, Grid, Paper } from "@mui/material";
import Header from "../components/Header/Header";

function Layout({ children }) {
  return (
    <Stack gap={1}>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper>xs=8 md=6 lg=3</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            {children}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper>xs=8 md=6 lg=3</Paper>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Layout;
