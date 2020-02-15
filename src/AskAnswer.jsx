import {Avatar, Card, CardActions, CardActionArea, CardContent, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    backgroundColor: theme.palette.background.default,
  },
  decision: {
    display: 'flex',
    flexDirection: 'row',
    height: '50%',
  },
  decisionContent: {
    width: '50%',
    display: 'flex',
    padding: 64,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    margin: 'auto'
  }
}));

export default function AskAnswer() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActions disableSpacing>
        <CardActionArea className={classes.decisionContent}>
          <Typography variant="h4" component="h3">Ask</Typography>
          <Avatar>
            <QuestionAnswerIcon/>
          </Avatar>
        </CardActionArea>
        <CardActionArea className={classes.decisionContent}>
          <Typography variant="h4" component="h3">Answer</Typography>
          <Avatar>
            <HelpIcon/>
          </Avatar>
        </CardActionArea>
      </CardActions>
    </Card>
  )
}
