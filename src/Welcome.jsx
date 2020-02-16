import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { squirrelAuth } from "./App";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    padding: 32,
    margin: "auto"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  textfield: {
    marginBottom: 24
  },
  button: {
    margin: "auto"
  },
  title: {
    margin: "auto"
  }
}));

function Welcome(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className={classes.root}>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={true}
        className={classes.card}
      >
        <img
          src={require("./assets/Agora_Logo-04.png")}
          alt="Agora"
          height={128}
          className={classes.title}
        />
        <DialogContent>
          <form className={classes.form}>
            <TextField
              error={error}
              className={classes.textfield}
              label="Username"
              variant="outlined"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              error={error}
              className={classes.textfield}
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              squirrelAuth.authenticate(username, password, (body, err) => {
                if (err) {
                  setError(true);
                } else {
                  props.history.push("/");
                }
              });
            }}
            color="secondary"
            variant="contained"
          >
            Log me in!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(Welcome);
