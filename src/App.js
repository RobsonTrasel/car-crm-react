import { Button, createTheme, ThemeProvider, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

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
    
  </ThemeProvider>
)

export default App