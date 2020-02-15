import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#2e3546',
      light: '#283d70',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#703529',
      light: '#c6934b',
    },
    background: {
      default: '#e0ddd5',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/">
          <Welcome/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
