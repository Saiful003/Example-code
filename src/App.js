import { Avatar, Paper, Stack, TextField, Typography } from "@mui/material";
import Layout from "./Layout/Layout";
import Story from "./Story";
import vai from "./images/Bitul Boishnob 1.png";

function App() {
  return (
    <Layout>
      <Stack gap={1}>
        <Paper sx={{ px: 4, py: 2, minHeight: 245 }}>
          <Stack
            sx={{
              justifyContent: "space-between",
            }}
            direction="row"
          >
            <Story />
            <Story />
            <Story />
            <Story />
          </Stack>
        </Paper>
        <Paper sx={{ p: 3 }}>
          <Stack sx={{ mb: 4 }} direction="row" gap={3} alignItems="center">
            <Avatar
              sx={{ width: 60, height: 60, outline: "none" }}
              alt="Remy Sharp"
              src={vai}
              variant="square"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Stack>
          <Stack direction="row" justifyContent="space-evenly">
            <Typography variant="h6">Photos</Typography>
            <Typography variant="h6">Photos</Typography>
            <Typography variant="h6">Photos</Typography>
            <Typography variant="h6">Photos</Typography>
            <Typography variant="h6">Photos</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Layout>
  );
}

export default App;
