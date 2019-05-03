import { BrowserRouter as Router, Route, Switch ,Redirect, Link } from "react-router-dom"; 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import ImageAvatars from './LoginIm';





const styles = theme => ({
  main: {
  width: 'auto',
  display: 'block', // Fix IE 11 issue.
  marginLeft: theme.spacing.unit * 3,
  marginRight: theme.spacing.unit * 3,
  [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  },
  paper: {
  marginTop: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
  margin: theme.spacing.unit,
  backgroundColor: theme.palette.secondary.main,
  },
  form: {
  width: '100%',
  marginTop: theme.spacing.unit,
  },
  submit: {
  marginTop: theme.spacing.unit * 3,
  },
});


 
class SignIn extends Component {


  state ={
    redirectToReferrer:false,
    userName: ''
  }

  handleSubmit  = ()=>{
  
    this.fakeAuth()

  }
fakeAuth = () =>
{
  this.setState({
    redirectToReferrer : true
  })
}
handleChange = input => e => {
  this.setState({ [input]: e.target.value });
  console.log(this.state.userName)
}
render(){

const {classes} =this.props;
const {redirectToReferrer} =this.state;
// const { from } = this.props.location.state || { from: { pathname: '/' } }
  
// if (redirectToReferrer === true){
//   return <Redirect to='./Checkout'/>
// }
if (redirectToReferrer === true){
  return (this.state.userName==='admin'?
  <Redirect to='/adminPage'/>:
       <Redirect to='/NavTabs'/>
  )
  

}

return (
  <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>

    <ImageAvatars/>


    <form className={classes.form} onSubmit={this.handleSubmit}>
      <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="email">Email Address/User Name</InputLabel>
      <Input id="email" name="email" autoComplete="email" autoFocus  onChange = {this.handleChange('userName')}/>
      </FormControl>
      <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input name="password" type="password" id="password" autoComplete="current-password" />
      </FormControl>
      <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
      />
      
      <Button type="submit"  fullWidth   variant="contained"
      color="primary" className={classes.submit}>Sign-in</Button>
        
        <p>Click here to <Link>Signup </Link>      </p>
        {/* onClick={this.handleSubmit}  */}

    </form>
    </Paper>
    <p>Follow Us</p>
<a target='_blank' href="https://facebook.com"><i class="socialIcons facebook fab fa-facebook-square"></i></a>
<a target='_blank' href="https://twitter.com"><i class="socialIcons twitter fab fa-twitter-square"></i></a>
{/* <a target='_blank' href="https://plus.google.com"><i class="socialIcons google fab fa-google-plus-g"></i></a> */}
<a target='_blank' href="https://www.linkedin.com/"><i class="socialIcons linkedin fab fa-linkedin"></i></a>
  </main>
  );}
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);