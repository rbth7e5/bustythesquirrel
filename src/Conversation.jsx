import {
  AppBar,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  IconButton,
  List,
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
    marginLeft: theme.spacing(2),
    flex: 1
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
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
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <div>
          <Card>
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
            <List>
              {issue.messages.map(msg => (
                <ListItem button onClick={() => setMessage(msg)}>
                  <ListItemText
                    style={{ textOverflow: "ellipsis" }}
                    primary={msg.content}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </div>
        <div>
          {message && (
            <Paper>
              <Typography>{message.content}</Typography>
            </Paper>
          )}
        </div>
      </div>
    </Dialog>
  );
}
