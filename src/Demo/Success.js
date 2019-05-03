import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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

    
  });
  
class Success extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
    const { values, handleChange } = this.props;
        return ( 
        <main className={classes.layout}>
          <Paper className={classes.paper}>
              
              <Typography component="h4" variant="h4" align="center">
                Success
              </Typography>
              <Grid container spacing={24}>
              <Grid item xs={12} sm={12}></Grid> 
                    <Grid item xs={12} sm={12}>Thank you for visiting. You will be notified by SMS and Email to trak your application status</Grid>
              </Grid>
            </Paper>
        </main>
         );
    }
}
 
export default withStyles(styles)(Success);