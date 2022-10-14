import { Button, createTheme, ThemeProvider, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    }
  }
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Button variant="text">Text</Button>
    <Button variant="contained" color="primary">primary</Button>
    <Button variant="outlined" color="secondary">secondary</Button>
    <TextField />
  </ThemeProvider>
)

export default App