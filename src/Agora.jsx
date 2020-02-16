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
import AskDialog, { categoryList, countryList } from "./AskDialog";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IssueDialog from "./IssueDialog";

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
  const [issueOpen, setIssueOpen] = useState(false);
  const [issue, setIssue] = useState({
    country: countryList[0],
    tags: [],
    topic: "",
    category: categoryList[0],
    details: ""
  });
  const questions = [
    {
      country: "Hong Kong",
      tags: ["politics"],
      topic: "2019 Hong Kong Protests",
      category: "help me understand"
    }
  ];
  const issues = [
    {
      country: "Singapore",
      tags: ["court", "politics", "law"],
      topic: "The Death Penalty",
      category: "have a discussion with me on",
      details:
        "Singapore seems like a really great country. It's economy is doing really well and it is really clean. However, I don't quite understand why such a first world country would retain such an inhumane punishment in its books."
    }
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
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
                onClick={() => {
                  setIssue(qns);
                  setAskOpen(true);
                }}
                primary={qns.topic}
                tags={qns.tags}
                country={qns.country}
                category={qns.category}
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
                onClick={() => {
                  setIssue(issue);
                  setIssueOpen(true);
                }}
                primary={issue.topic}
                tags={issue.tags}
                country={issue.country}
                category={issue.category}
                key={i}
              />
            ))}
          </List>
        </div>
      </div>
      <AskDialog
        issue={issue}
        setIssue={setIssue}
        open={askOpen}
        onClose={() => setAskOpen(false)}
      />
      <IssueDialog
        issue={issue}
        open={issueOpen}
        onClose={() => setIssueOpen(false)}
      />
    </div>
  );
}

function Issue(props) {
  const classes = useStyles();
  const { onClick, primary, tags, category, country } = props;
  return (
    <Card onClick={onClick} className={classes.listItem}>
      <CardActionArea>
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "auto" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {primary}
            </Typography>
            {tags.map((tag, i) => (
              <Chip key={i} style={{ margin: 4 }} label={tag} />
            ))}
          </div>
          <Avatar
            style={{ marginRight: 16, height: 80, width: 80 }}
            alt={category}
            src={getCategoryImage(category)}
          />
          <Avatar
            style={{ height: 80, width: 80 }}
            alt={country}
            src={getCountryImage(country)}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function getCountryImage(country) {
  switch (country) {
    case "Maldives":
      return require("./assets/maldives.png");
    case "Israel":
      return require("./assets/israel.png");
    case "China":
      return require("./assets/china.png");
    case "Hong Kong":
      return require("./assets/hong-kong.png");
    case "United States of America (the)":
      return require("./assets/usa.png");
    default:
      return require("./assets/singapore.png");
  }
}

function getCategoryImage(category) {
  switch (category) {
    case "change my mind on":
      return require("./assets/change-mind.png");
    case "have a discussion with me on":
      return require("./assets/discussion.png");
    case "help me understand":
      return require("./assets/understand.png");
    case "share how they feel about":
      return require("./assets/feel.png");
    default:
      return require("./assets/perspective.png");
  }
}
