import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Logo from '../Logo.png'
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import White from '@material-ui/core/colors'
import Blue from '@material-ui/core/colors'
import { white } from 'material-ui/styles/colors';

const styles = theme => ({
  root: {
    width: '100%',
  },
  bigAvatar: {
    margin: 10,
    width: 75,
    height: 60,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
    color:white,
  },
  title: {
    display: 'Aap Ka Ghar',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    position: 'relative',
    paddingTop:'-10px'

    },
  },
  
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}
);

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLoginAction = event =>{
    this.setState({anchorEl:event.Login});
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  componentDidMount(){
    this.setState({
      path:window.location.pathname
    })
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar >
          <Grid>
          <Avatar alt="Remy Sharp" src={Logo} className={classes.bigAvatar} />
          </Grid>
          &nbsp; &nbsp; &nbsp;

            <Grid>
              <Typography className={classes.title} variant="h3" style={{fontFamily: "'Shadows Into Light', cursive",color:'yellow'}} noWrap >
           
            Aap Ka Ghar
           
             
            </Typography>
            </Grid>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {/* <Button color="inherit">Sign-Up</Button>
            <Button color="inherit"><Link to="/SignIn" color="inherit">Login</Link></Button> */}
            {/* <Button color="inherit" onClick="/SignIn">Login</Button> */}

              {/* <Login/> */}
              {console.log(this.props.title)}
              { this.props.title === "/" ? "" : <a href="/"><Button className={classes.button}>LogOut</Button></a>}

            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
