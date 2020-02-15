import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import AskDialog from "./AskDialog";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function Hall() {
  const classes = useStyles();
  const [askOpen, setAskOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The Hall
          </Typography>
          <Button variant="contained" onClick={() => setAskOpen(true)}>
            Ask a Question
          </Button>
        </Toolbar>
      </AppBar>
      <AskDialog open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  );
}
