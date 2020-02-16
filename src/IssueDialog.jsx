import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function IssueDialog(props) {
  const { onClose, open, issue } = props;
  if (issue) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Issue Details</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: 400,
            padding: 32
          }}
        >
          <DialogContentText>
            I want someone from {issue.country} to {issue.category} the topic of{" "}
            {issue.topic}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  } else return null;
}
