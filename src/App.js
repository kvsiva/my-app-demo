import React from 'react';
import muiTheme from "./config/themeConfig"
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Landing from './components/Main/Lab1/Landing';

function App() {
  return (
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <Landing />
    </Router>
  </MuiThemeProvider>
  );
}

export default App;
