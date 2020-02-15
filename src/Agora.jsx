import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  List,
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
    marginRight: "auto"
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: "0 32px"
  },
  listItem: {
    marginBottom: 32,
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
          <img
            src={require("./Logo_only.png")}
            alt="Agora"
            height={64}
            className={classes.title}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setAskOpen(true)}
          >
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
              <Issue
                primary={qns}
                tags={["politics", "trump", "cake"]}
                key={i}
              />
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
              <Issue
                primary={issue}
                tags={["cows", "milk", "mushrooms"]}
                key={i}
              />
            ))}
          </List>
        </div>
      </div>
      <AskDialog open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  );
}

function Issue(props) {
  const classes = useStyles();
  const { primary, tags, category, country } = props;
  return (
    <Card className={classes.listItem}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {primary}
          </Typography>
          {tags.map(tag => (
            <Chip style={{ margin: 4 }} label={tag} />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
