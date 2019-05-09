
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Checkout from './Checkout'
import { BrowserRouter as Router, Route, Switch ,Redirect, Link } from "react-router-dom"; 
import SignIn from './SignIn';
import FileAComplaint from './FileAComplaint';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop:'-21px',
    // backgroundImage: `url("../PAPA.jpg")`,
  },
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

class NavTabs extends React.Component {
  
  state = {
    value: 0,
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
            path: window.location.pathname
  };

  pathChange = (path) =>{
    this.setState({
      path: path
    })
 }
  handleChange2 = (event, value) => {
    this.setState({ value });
  };

  page1 = () => {
      console.log("**********************************")
      return(<Redirect to='/Checkout'/>)
  }

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
    const { classes } = this.props;
    const { value } = this.state;
    const { activeStep } = this.state;
    const redirectToReferrer = this.props.redirect
    console.log(window.location.pathname)
    // console.log("************* "+redirectToReferrer);
    const {firstname,middlename,lastName,address1,address2,Gender,dob,city,addresstate,zip,country,mobile,phone,email,surveyNumber,projType,area,landAddress,aadharNo,panNo} = this.state;
    const values = {firstname,middlename,lastName,address1,address2,Gender,dob,city,addresstate,zip,country,mobile,phone,email,surveyNumber,projType,area,landAddress,aadharNo,panNo};


    return (
      <NoSsr>
        <div className={classes.root} style={{ background: '#f5f5f5'}}>
          <AppBar position="static" style={{ background: '#35baf6'}}>
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange2} >
              <LinkTab label="File A New Request" href="page1" style={{color:'black'}}/>
              <LinkTab label="My Requests" href="page2" style={{color:'black'}}/>
              <LinkTab label="File A Compalaint" href="page3" style={{color:'black'}}/>
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Checkout pathChange={this.pathChange}/></TabContainer>}
          {value === 1 && <TabContainer>Page Twooooo</TabContainer>}
          {value === 2 && <TabContainer><FileAComplaint/></TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);