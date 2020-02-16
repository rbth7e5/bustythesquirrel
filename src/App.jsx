import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AskDialog from "./AskDialog";
import Agora from "./Agora";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#000000",
      light: "#283d70"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#ffffff",
      light: "#c6934b"
    },
    background: {
      default: "#e0ddd5"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.background.default
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <PrivateRoute path="/">
              <Agora />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? ( // TODO: Check with real auth here.
          <Component {...props} />
        ) : (
          <Redirect to="/welcome" />
        )
      }
    />
  );
}

export default App;
