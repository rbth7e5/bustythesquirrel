import {Button, Card, CardActions, CardContent, TextField, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
  },
  card: {
    padding: 32,
    backgroundColor: theme.palette.background.default,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textfield: {
    marginBottom: 48,
  },
  button: {
    margin: 'auto'
  }
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent style={{padding: 8}}>
          <Typography className={classes.textfield} variant="h3" component="h1">
            Welcome to Agora
          </Typography>
          <form className={classes.form}>
            <TextField className={classes.textfield} label="Username" variant="outlined"/>
            <TextField className={classes.textfield} label="Password" variant="outlined"/>
          </form>
        </CardContent>
        <CardActions disableSpacing>
          <Button fullWidth color="secondary" className={classes.button} variant="contained">Log me in!</Button>
        </CardActions>
      </Card>
    </div>
  )
}
