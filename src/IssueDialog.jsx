import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "16px 0"
  }
}));

export default function IssueDialog(props) {
  const classes = useStyles();
  const { onClose, open, issue } = props;
  if (issue) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Issue Details</DialogTitle>
        <DialogContent>
          <div className={classes.line}>
            <DialogContentText style={{ margin: 0 }}>
              I am looking for someone from
            </DialogContentText>
            <Chip style={{ marginLeft: 8 }} label={issue.country} />
          </div>
          <div className={classes.line}>
            <DialogContentText style={{ margin: 0 }}>to</DialogContentText>
            <Chip style={{ marginLeft: 8 }} label={issue.category} />
          </div>
          <div className={classes.line}>
            <DialogContentText style={{ margin: 0 }}>
              the topic of
            </DialogContentText>
            <Chip style={{ marginLeft: 8 }} label={issue.topic} />
          </div>
        </DialogContent>
        {issue.details && issue.details !== "" ? (
          <DialogContent>
            <DialogContentText style={{ fontWeight: "bold" }}>
              Remarks
            </DialogContentText>
            <DialogContentText>{issue.details}</DialogContentText>
          </DialogContent>
        ) : null}
        <DialogActions>
          <Button variant="contained" color="secondary">
            Respond
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else return null;
}
