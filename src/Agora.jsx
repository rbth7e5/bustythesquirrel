import {
  AppBar,
  Button,
  Card,
  CardContent,
  List,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import AskDialog from "./AskDialog";

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
    flexDirection: "row"
  },
  card: {
    marginBottom: 32
  },
  issuesView: {
    display: "flex",
    flex: 1,
    padding: 32,
    flexDirection: "column"
  },
  issuesContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  divider: {
    width: 2,
    backgroundColor: "black",
    margin: 8
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
              <Card key={i} className={classes.card}>
                <CardContent>
                  <Typography>{qns}</Typography>
                </CardContent>
              </Card>
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
              <Card key={i} className={classes.card}>
                <CardContent>
                  <Typography>{issue}</Typography>
                </CardContent>
              </Card>
            ))}
          </List>
        </div>
      </div>
      <AskDialog open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  );
}
