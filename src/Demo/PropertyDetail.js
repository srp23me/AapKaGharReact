import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
//import Upload from 'material-ui-upload/Upload';

const styles = theme => ({

  formControl: {
    //margin: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
 //   margin: theme.spacing.unit,
    
  },
  input: {
  display: 'none',
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
  text :{
    fontSize:17
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
});


class PropertyDetail extends React.Component {
  state = {
    projType: '',
    open: false,
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  continue = e => {
    e.preventDefault();
    this.props.handleNext();
};
back = e => {
  e.preventDefault();
  this.props.handleBack();
};
  render() {
    const {values,handleChange} = this.props; 
    const { classes } = this.props;

    return (
     
    
       <main className={classes.layout}>
      <Paper className={classes.paper}>
      <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Property Details
      </Typography>
        <Grid container spacing={24}>
            <Grid item xs={12}  md={12}></Grid>
              <Grid item xs={12}  md={6}>
                <TextField required id="surveyNumber" name="surveyNumber" label="Survey Number" fullWidth 
                  onChange = {handleChange('surveyNumber')}
                  defaultValue={values.surveyNumber}
                />
                
              </Grid>


              <Grid item xs={12}  md={3} >
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Project Type*</InputLabel>
                <Select
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                // value={this.state.projType}
                value={values.projType}
                // onChange={this.handleChangesel}
                onChange = {handleChange('projType')}
                  inputProps={{
                    name: 'projType',
                    id: 'demo-controlled-open-select',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Residential'}>Residential</MenuItem>
                  <MenuItem value={'Apartment'}>Apartment</MenuItem>
                  <MenuItem value={'Commercial'}>Commercial</MenuItem>
                </Select>
              </FormControl>
                </Grid>

                <Grid item xs={12}  md={3}>
                <TextField required id="cardName" label="Area (in Sq.ft)" 
                onChange = {handleChange('area')}
                fullWidth name="area"
                defaultValue={values.area}/>
                
              </Grid>

              <Grid item xs={12}>
                <TextField required id="cardNumber" label="Land Address" fullWidth 
                onChange = {handleChange('landAddress')}
                name="landAddress"
                defaultValue={values.landAddress}/>
              </Grid>


              <Grid item xs={12} md={6}>
                <TextField required id="expDate" label="Aadhar No." 
                onChange = {handleChange('aadharNo')}
                fullWidth name="aadharNo" 
                defaultValue={values.aadharNo}/>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField required id="expDate" label="Pan Card No."
                onChange = {handleChange('panNo')}
                fullWidth name="panNo" 
                defaultValue={values.panNo}/>
              </Grid>

              {/* <Typography component="h3" variant="h4" align="center">
              Documents Upload
            </Typography> */}
            <Grid item xs={12} md={12}>
            <Typography  variant="h5" align="center">
              Documents Upload
            </Typography>
            </Grid> 
            
              
              <Grid item xs={12} md={6}>
              <Typography className={classes.text}>
              Upload Aadhar Card      </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
              <input
            accept="image/*"
              className={classes.input}
              id="outlined-button-file"
            required="true"
              //multiple
              type="file"
            />
            <label htmlFor="outlined-button-file">
              <Button variant="outlined" component="span" className={classes.button}>
                Upload
              </Button>
            </label>
            </Grid>
            

            <Grid item xs={12} md={6}>
              <Typography className={classes.text}>
              Upload Pan Card      </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
              <input
            accept="image/*"
              className={classes.input}
              id="outlined-button-file"
            required="true"
              //multiple
              type="file"
            />
            <label htmlFor="outlined-button-file">
              <Button variant="outlined" component="span" className={classes.button}>
                Upload
              </Button>
            </label>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography className={classes.text}>
              Upload Construction Plan     </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
              <input
            accept="image/*"
              className={classes.input}
              id="outlined-button-file"
            required="true"
              //multiple
              type="file"
            />
            <label htmlFor="outlined-button-file">
              <Button variant="outlined" component="span" className={classes.button}>
                Upload
              </Button>
            </label>
            </Grid>


            <Grid item xs={12} md={6}>
              <Typography className={classes.text}>
              Upload Registration Document    </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
              <input
            accept="image/*"
              className={classes.input}
              id="outlined-button-file"
            required="true"
              //multiple
              type="file"
            />
            <label htmlFor="outlined-button-file">
              <Button variant="outlined" component="span" className={classes.button}>
                Upload
              </Button>
            </label>
            </Grid>

            <Grid item xs={12} md={6}></Grid>
           
      </Grid>
      </React.Fragment>
      
      <Grid item xs={12} md={12}>
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
        </Grid>
      </Paper>
        </main>
    
  );
}

}

// PropertyDetail.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default withStyles(styles)(PropertyDetail);