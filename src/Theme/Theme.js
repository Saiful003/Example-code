import { createTheme } from "@mui/material";
import { red, grey } from "@mui/material/colors";

export const theme = createTheme({
  mode: "dark",
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: "1px solid white",
          outline: "2px solid #ff4670",
          borderWidth: "2px",
          borderRadius: "5px",
          width: 45,
          height: 45,
        },
      },
    },
  },
  palette: {
    background: {
      paper: "#222222",
    },
  },
});
