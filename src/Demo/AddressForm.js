import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import { inherits } from 'util';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
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
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  
});

class AddressForm extends Component {

  continue = e =>{
    e.preventDefault();
    this.props.handleNext();
};



//   handleChange = input => e => {
//     this.setState({ [input]: e.target.value });
// };

  render() { 
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
              
              <Typography component="h4" variant="h4" align="center">
                Customer Details
              </Typography>
              
             
              <Grid container spacing={24}>
              <Grid item xs={12} sm={12}></Grid> 
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="fname"
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="middlename"
                    name="middlename"
                    label="Middle Name"
                    fullWidth
                    autoComplete="mname"
                    onChange={handleChange('middlename')}
                    defaultValue={values.middlename}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="lname"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                  />
                </Grid>
                <Grid item xs={12} sm={12}></Grid> 
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="billing address-line1"
                    onChange={handleChange('address1')}
                    defaultValue={values.address1}
                  />
                </Grid>
                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
                    onChange={handleChange('address2')}
                    defaultValue={values.address2}
                  />
                </Grid>
                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={12} sm={6}>
                  <FormLabel component="legend">Gender : &nbsp;
                  
                  <RadioGroup
                    aria-label="Gender"
                    id="Gender"
                    name="Gender"
                    // className={classes.group}
                    // value={this.state.value}
                    onChange={handleChange("Gender")} style={{display:'inline'}}>
                      <FormControlLabel  value="female" control={<Radio />} label="Male" defaultValue={values.Gender} />
                      <FormControlLabel value="male" control={<Radio />} label="Female" defaultValue={values.Gender}/>
                      <FormControlLabel value="other" control={<Radio />} label="Other" defaultValue={values.Gender}/>             
                    </RadioGroup>
                    </FormLabel>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="dob"
                    name="dob"
                    label="Date of Birth (DD/MM/YYYY)"
                    fullWidth
                    autoComplete="billing address-level2"
                    onChange={handleChange('dob')}
                    defaultValue={values.dob}
                  />
                </Grid>
                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="state"  label="State" fullWidth 
                  onChange={handleChange('addresstate')}
                  defaultValue={values.addresstate}/>
                </Grid>
                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                    onChange={handleChange('zip')}
                    defaultValue={values.zip}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    value="INDIA"
                    fullWidth
                    autoComplete="billing country"
                    readonly
                    onChange={handleChange('country')}
                    defaultValue={values.country}
                  />
                </Grid>
                <Grid item xs={12} sm={12}></Grid>

                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={12} sm={12}><Divider /><Divider /><Divider /><Divider /></Grid>
                <Grid item xs={12} sm={12}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobile"
                    name="mobile"
                    label="Primary Contact No."
                    fullWidth
                    autoComplete="mobile"
                    onChange={handleChange('mobile')}
                    defaultValue={values.mobile}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Secondary Contact No."
                    fullWidth
                    autoComplete="phone"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                  />
                  </Grid>
                  <Grid item xs={12} sm={12}></Grid>
                  <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="E-Mail ID (ex : abc@abc.com)"
                    fullWidth
                    autoComplete="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                  />
                  </Grid>
                  <Grid item xs={12} sm={12}></Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    label="Use this address for payment details"
                  />
                </Grid> */}
              </Grid>
              <div className={classes.button}>
                    <Button
                      label="Next"
                      variant="contained"
                      color = "primary"
                      primary={true}
                      style={styles.button}
                      onClick={this.continue}>Next</Button>
                  </div>
            </Paper>
          </main>
      </React.Fragment>
    )
  }
}



export default withStyles(styles)(AddressForm);