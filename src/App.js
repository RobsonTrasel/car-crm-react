import 'bootstrap/dist/css/bootstrap.min.css'
import "./global.css"
import React from "react";
import { Button, createTheme, ThemeProvider, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import RoutesPath from "./routes";
import { Loading, Notify, Alert } from "./view/components";


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
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Alert/>
      <Notify/>
      <Loading/>
      <RoutesPath/>
    </ThemeProvider>
  </Provider>
  
)

export default App