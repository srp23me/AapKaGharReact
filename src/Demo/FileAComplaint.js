import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import  TextField from '@material-ui/core/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';

import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
})
 

class FileAComplaint extends Component {
  render() { 
  const { classes } = this.props;
  return (
    <main className={classes.layout}>
          <Paper className={classes.paper}>
    <React.Fragment>

      <Typography component="h4" variant="h4" align="center">

        We are here to help you...!!!

      </Typography>

      <Grid container spacing={24}>
      <Grid item xs={12} sm={12}></Grid>
      <Grid item xs={12} sm={12}>

          <TextField

            required

            id="ackid"

            name="AckId"

            label="Acknowledgement ID"

            fullWidth

          />

        </Grid>
        <Grid item xs={12} sm={12}></Grid>
         <Grid item xs={12} sm={12}>

          <TextField

            required

            id="name"

            name="Customer Name"

            label="Customer Name"

            fullWidth

          />

        </Grid>
        <Grid item xs={12} sm={12}></Grid>
        <Grid item xs={12} sm={12}>

          <TextField

            required

            id="email"

            name="Customer Email"

            label="Email id"

            fullWidth

          />

        </Grid>
        <Grid item xs={12} sm={12}></Grid>
        <Grid item xs={12} sm={12}>

          <TextField

            required

            id="text"

            name="Description"

            label="Please Give brief details of your complaint(Max 500 Chars) *"

            fullWidth

          />

        </Grid>
        <Grid item xs={12} sm={12}></Grid>
        <Grid item xs={12} sm={12}>

                    <Button style={{display: 'block',margin: 'auto'}}
                      label="Submit"
                      variant="contained"
                      color = "primary"
                      primary={true}>Submit</Button>

        </Grid>

</Grid>
</React.Fragment>
</Paper>
</main>
  )
  }
}

 
export default withStyles(styles)(FileAComplaint);