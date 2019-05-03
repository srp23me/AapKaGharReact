import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import PropertyDetail from './PropertyDetail';
import Success from './Success';
import Review from './Review';

const styles = theme => ({
  appBar: {
    position: 'relative',
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
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    firstname: "",
    middlename: "",
    lastName: "",
    address1: "",
    address2: "",
    Gender: "",
    dob: "",
    city: "",
    state: "",
    zip: "",
    country: "INDIA",
    mobile: "+91 ",
    phone: "+91 ",
    email: "",
    surveyNumber:'',
            projType : '',
            area : '',
            landAddress : '',
            aadharNo : '',
            panNo :'',
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
}
componentWillMount(){
  this.props.pathChange(window.location.pathname)
  console.log('pathChange')
}

  render() {
    const { activeStep } = this.state;
    const redirectToReferrer = this.props.redirect
    console.log(window.location.pathname)
    // console.log("************* "+redirectToReferrer);
    const {firstname,middlename,lastName,address1,address2,Gender,dob,city,addresstate,zip,country,mobile,phone,email,surveyNumber,projType,area,landAddress,aadharNo,panNo} = this.state;
    const values = {firstname,middlename,lastName,address1,address2,Gender,dob,city,addresstate,zip,country,mobile,phone,email,surveyNumber,projType,area,landAddress,aadharNo,panNo};

          switch (activeStep) {
            case 0:
              return <AddressForm handleNext = {this.handleNext}
                                handleChange={this.handleChange}
                                values={values}/>;
            case 1:
              return <PropertyDetail handleNext = {this.handleNext}
                                handleBack={this.handleBack}
                                handleChange={this.handleChange}
                                values={values}/>;
            case 2:
              return <Review handleNext = {this.handleNext}
                                handleBack={this.handleBack}
                                handleChange={this.handleChange}values={values}/>;
            case 3: 
              return <PaymentForm handleNext = {this.handleNext}
                                handleBack={this.handleBack}
                                handleChange={this.handleChange}
                                values={values}/>;
            
            case 4: 
              return <Success values={values}/>;
          }
  }
}

export default withStyles(styles)(Checkout);