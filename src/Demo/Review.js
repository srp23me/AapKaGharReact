import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
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

class Review extends Component {
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
    <Typography component="h4" variant="h4" align="center">
                Confirm User Details
    </Typography>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12}></Grid>
      <Grid item xs={12} sm={12}></Grid>
    </Grid>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="First Name " />
          <Typography variant="subtitle1" className={classes.total}>
              {values.firstname}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Middle Name " />
          <Typography variant="subtitle1" className={classes.total}>
          {values.middlename}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Last Name" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.lastName}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Address 1" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.address1}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Address 2" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.address2}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Gender" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.Gender}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Date Of Birth" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.dob}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="City" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.city}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="State" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.addresstate}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Zip Code" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.zip}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Country" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.country}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Mobile Number" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.mobile}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Phone Number" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.phone}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="E-Mail" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.email}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Aadhar Card Number" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.aadharNo}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Pan Card Number" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.panNo}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Survay Number :" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.surveyNumber}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Construcion Type" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.projType}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Construcion Area" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.area}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Construcion Address" />
          <Typography variant="subtitle1" className={classes.total}>
          {values.landAddress}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <div >
          <Button className={classes.prevbutton}
            label="Previous"
            variant="contained"
            color = "primary"
            primary={true}
            onClick={this.back}>Previous</Button>

          <Button className={classes.nextbutton}
            label="Next"
            variant="contained"
            color = "primary"
            primary={true}
            onClick={this.continue}>Next</Button>
        </div>
      
    </React.Fragment>
    </Paper>
    </main>    
  );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);