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
import React, { useState, useEffect } from "react";
import AskDialog from "./AskDialog";
import superagent from "superagent";
import Avatar from "@material-ui/core/Avatar";
import IssueDialog from "./IssueDialog";
import Conversation from "./Conversation";
import ResponseDialog from "./ResponseDialog";

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
  const [convoOpen, setConvoOpen] = useState(false);
  const [initialResponseDialogOpen, setInitialResponseDialogOpen] = useState(
    false
  );
  const [issue, setIssue] = useState({
    _id: "",
    country: null,
    tags: [],
    topic: "",
    category: null,
    details: ""
  });
  const [questions, setQuestions] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    superagent.get("/find_issues_by_user").then(response => {
      setQuestions(response.body);
    });
  }, [issue]);

  useEffect(() => {
    superagent.get("/find_issues_by_country").then(response => {
      setIssues(response.body);
    });
  }, [questions]);

  const handlePublish = () => {
    superagent
      .post("/send_issue")
      .send(issue)
      .then(() => {
        setIssue({
          country: null,
          tags: [],
          topic: "",
          category: null,
          details: ""
        });
        setAskOpen(false);
      });
  };

  const handleResponse = () => {
    superagent
      .patch("/respond_issue")
      .query({ id: issue._id })
      .then(res => {
        setIssueOpen(false);
        setInitialResponseDialogOpen(true);
      });
  };

  const handleInitialResponse = (content, issueId) => {
    superagent
      .post("/send_message")
      .send({
        content,
        issueId
      })
      .then(() => {
        setInitialResponseDialogOpen(false);
        setConvoOpen(true);
      });
  };

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
            onClick={() => {
              setIssue({
                country: "",
                tags: [],
                topic: "",
                category: "",
                details: ""
              });
              setAskOpen(true);
            }}
          >
            Ask a Question
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <div className={classes.issuesView}>
          <Typography gutterBottom variant="h5" component="h2">
            Your Pitches
          </Typography>
          <List>
            {questions &&
              questions.map((qns, i) => (
                <Issue
                  hasConvo={!!qns.responder}
                  onClick={() => {
                    setIssue(qns);
                    if (qns.responder) {
                      setConvoOpen(true);
                    } else {
                      setAskOpen(true);
                    }
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
            Available Pitches
          </Typography>
          <List>
            {issues &&
              issues.map((issue, i) => (
                <Issue
                  hasConvo={!!issue.responder}
                  onClick={() => {
                    setIssue(issue);
                    if (issue.responder) {
                      setConvoOpen(true);
                    } else {
                      setIssueOpen(true);
                    }
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
        onClick={() => handlePublish()}
      />
      <IssueDialog
        issue={issue}
        open={issueOpen}
        onClose={() => setIssueOpen(false)}
        handleResponse={handleResponse}
      />
      <Conversation
        open={convoOpen}
        issue={issue}
        onClose={() => setConvoOpen(false)}
      />
      <ResponseDialog
        open={initialResponseDialogOpen}
        issue={issue}
        onClose={() => setInitialResponseDialogOpen(false)}
        handleInitialResponse={handleInitialResponse}
      />
    </div>
  );
}

function Issue(props) {
  const classes = useStyles();
  const { onClick, primary, tags, category, country, hasConvo } = props;
  return (
    <Card
      onClick={onClick}
      className={classes.listItem}
      style={hasConvo ? null : { backgroundColor: "#eeeeee" }}
    >
      <CardActionArea>
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "auto" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {primary}
            </Typography>
            {tags &&
              tags.map((tag, i) => (
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
