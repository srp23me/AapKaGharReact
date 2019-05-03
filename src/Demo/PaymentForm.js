import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
  nextbutton: {
    display: 'initial',
    justifyContent: 'flex-end',
   marginLeft: theme.spacing.unit * 71.2,
  },
  prevbutton: {
  //  marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});


class PaymentForm extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.handleNext();
  };
  back = e =>{
    e.preventDefault();
  this.props.handleBack();
};
  render() { 
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <main className={classes.layout}>
          <Paper className={classes.paper}>
      
            <React.Fragment>
              <Typography component="h1" variant="h4" align="center">
                Payment method
              </Typography>
              <Grid container spacing={24}>
              {/* <Grid item xs={12} md={6}>
              <h4>Note : </h4>
              <ul>
                <li>

                </li>
              </ul>
              </Grid> */}
              
                <Grid item xs={12} md={6}>
                  <TextField required id="cardName" label="Name on card" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField required id="cardNumber" label="Card number" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField required id="expDate" label="Expiry date" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                    label="Remember credit card details for next time"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
            <div >
                    <Button className={classes.prevbutton}
                      label="Previous"
                      variant="contained"
                      color = "primary"
                      primary={true}
                      onClick={this.back}>Previous</Button>
                  {/* </div> */}
        {/* <div className={classes.nextbutton}> */}
                    <Button className={classes.nextbutton}
                      label="Next"
                      variant="contained"
                      color = "primary"
                      primary={true}
                      onClick={this.continue}>Next</Button>
        </div>
          </Paper>
        </main>
    );
  }
}
 

export default withStyles(styles)(PaymentForm);