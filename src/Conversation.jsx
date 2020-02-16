import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  Toolbar,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginRight: "auto"
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 32
  },
  sideBar: {
    marginRight: 32
  },
  card: {
    flex: 1,
    width: 256
  },
  main: {
    flexGrow: 1
  },
  message: {
    padding: 32
  }
}));

export default function Conversation(props) {
  const classes = useStyles();
  const { issue, onClose, open } = props;
  const [message, setMessage] = useState(null);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Slide}
    >
      <AppBar className={classes.appBar} color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Topic: {issue.topic}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to end the conversation?")
              ) {
                onClose();
              }
            }}
          >
            End Conversation
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <div className={classes.sideBar}>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar>I</Avatar>}
              title={`Looking for someone from ${issue.country}`}
              subheader={`to ${issue.category} the topic`}
            />
            {issue.tags && issue.tags.length > 0 && (
              <CardContent>
                {issue.tags.map((tag, i) => (
                  <Chip key={i} style={{ margin: 4 }} label={tag} />
                ))}
              </CardContent>
            )}
          </Card>
          {issue.messages && issue.messages.length > 0 && (
            <List
              style={{ marginTop: 32 }}
              subheader={
                <ListSubheader component="div" id="conversations">
                  Conversation
                </ListSubheader>
              }
            >
              {issue.messages.map((msg, i) => (
                <ListItem key={i} button onClick={() => setMessage(msg)}>
                  <ListItemText
                    primaryTypographyProps={{
                      style: {
                        width: 256,
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                      }
                    }}
                    primary={msg.content}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </div>
        <div className={classes.main}>
          <Typography gutterBottom variant="h5" component="h2">
            Message
          </Typography>
          {message && (
            <Paper className={classes.message}>
              <Typography>{message.content}</Typography>
            </Paper>
          )}
        </div>
      </div>
    </Dialog>
  );
}
