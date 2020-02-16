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

export default function IssueDialog(props) {
  const { onClose, open, issue } = props;
  if (issue) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Issue Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I am looking for someone from <Chip label={issue.country} />
          </DialogContentText>
          <DialogContentText>
            to <Chip label={issue.category} />
          </DialogContentText>
          <DialogContentText>
            the topic of <Chip label={issue.topic} />
          </DialogContentText>
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
