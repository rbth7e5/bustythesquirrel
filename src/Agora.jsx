import {
  AppBar,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import AskDialog from "./AskDialog";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: "0 32px"
  },
  listItem: {
    marginBottom: 32,
    padding: 16,
    fontSize: 18
  },
  issuesView: {
    display: "flex",
    flex: 1,
    padding: 32,
    flexDirection: "column",
    maxHeight: "calc(100vh - 128px)",
    overflow: "scroll"
  },
  issuesContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  divider: {
    width: 2,
    backgroundColor: "black",
    margin: 32
  }
}));

export default function Agora() {
  const classes = useStyles();
  const [askOpen, setAskOpen] = useState(false);
  const questions = [
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?",
    "How many cows does it take to moo?"
  ];
  const issues = [
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?",
    "Will mermaids drink lake water?"
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Agora
          </Typography>
          <Button variant="contained" onClick={() => setAskOpen(true)}>
            Ask a Question
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <div className={classes.issuesView}>
          <Typography gutterBottom variant="h5" component="h2">
            Your Issues
          </Typography>
          <List>
            {questions.map((qns, i) => (
              <ListItem
                button
                component={Paper}
                key={i}
                className={classes.listItem}
              >
                {qns}
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.divider} />
        <div className={classes.issuesView}>
          <Typography gutterBottom variant="h5" component="h2">
            Issues to Respond
          </Typography>
          <List>
            {issues.map((issue, i) => (
              <ListItem
                button
                component={Paper}
                key={i}
                className={classes.listItem}
              >
                {issue}
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <AskDialog open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  );
}
