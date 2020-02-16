import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextareaAutosize
  } from "@material-ui/core";
  import React from "react";
  import { makeStyles } from "@material-ui/core/styles";
  
  const useStyles = makeStyles(theme => ({
    line: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "16px 0"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        margin: "16px",
        height: "700px"
    },
    textArea: {
        fontSize: "16px",
        flexGrow: 1,
        height: "auto !important"
    }
  }));
  
  export default function ResponseDialog(props) {
    const classes = useStyles();
    const [text, setText] = React.useState("");
    const { onClose, open, issue, handleInitialResponse } = props;
    if (issue) {
      return (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Responses</DialogTitle>
          <DialogContent className={classes.content}>
              <DialogContentText>
                  {`Somebody wants to know more about ${issue.topic} in ${issue.country}.\n\n "${issue.details}"`}
              </DialogContentText>
              <TextareaAutosize className={classes.textArea} rowsMin={10} value={text} onChange={(e) => setText(e.target.value)}/>
          </DialogContent>
          <DialogActions>
              <Button>Upload Media</Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleInitialResponse(text, issue._id)}
            >
              Respond
            </Button>
          </DialogActions>
        </Dialog>
      );
    } else return null;
  }
  