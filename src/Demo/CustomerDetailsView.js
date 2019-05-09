import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
     fontSize: 16,
    
  },
  subHead:{
    fontSize: 18,
    color:"blue"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

});

class CustomerDetailsView extends React.Component {
  state = {
    expanded: null,

    open: false,
    // data : [
    //   [1, '01/04/2019', 'AKK2019010400001', 'Robin', '9878654322','Chennai'],
    //   [2, '01/04/2019', 'AKK2019010400002', 'namee', '9878654322','Chennai'],
    //   [3, '01/04/2019', 'AKK2019010400003', 'test', '9878654322','Chennai'],
    //   [4, '01/04/2019', 'AKK2019010400004', 'dfdf', '9878654322','Chennai'],
    //   [5, '01/04/2019', 'AKK2019010400005', 'fddd', '9878654322','Chennai'],
    // ],
    data : [
      {
          sNo: '1',
          RegDate : '01/04/2019',
          custId : 'AKK2019010400001',
          name : 'Srinivas Reddy',
          mobile : '9878654322',
          city : 'Chennai',
          address1 : 'No. 1111 Sivaji Garden , DLF',
          address2 : 'Near DLF, Chennai',
          stateName : 'TamilNadu',
          country : 'India',
          email : 'abc@gmail.com',
          zip : '600 001',
          surveyNo : '234344',
          projType : 'Residential',
          area : '150',
          landAddress : 'No. 1111 Sivaji Garden , Chennai',
          aadhar : '587653213456',
          pan : 'BTFFE7538H',
          aadharlink : 'aadhar.jpg'
      },
      {
        sNo: '2',
        RegDate : '01/04/2019',
        custId : 'AKK2019010400002',
        name : 'Reghu',
        mobile : '9878654786',
        city : 'Chennai',
        address1 : 'No.2222, Sivaji Garden , DLF',
        address2 : 'Near DLF, Chennai',
        stateName : 'TamilNadu',
          country : 'India',
          email : 'def@gmail.com',
          zip : '600 002',
          surveyNo : '234344',
          projType : 'Residential',
          area : '150',
          landAddress : 'No. 1111 Sivaji Garden , Chennai',
          aadhar : '587653213456',
          pan : 'BTFFE7538H',
          aadharlink : 'aadhar.jpg'
      },
      {
         sNo: '3',
          RegDate : '01/04/2019',
          custId : 'AKK2019010400003',
          name : 'Ramaraju',
          mobile : '9878654013',
          city : 'Chennai',
          address1 : 'No.33333, Sivaji Garden , DLF',
          address2 : 'Near DLF, Chennai',
          stateName : 'TamilNadu',
          country : 'India',
          email : 'ghi@gmail.com',
          zip : '600 003',
          surveyNo : '234344',
          projType : 'Residential',
          area : '150',
          landAddress : 'No. 1111 Sivaji Garden , Chennai',
          aadhar : '587653213456',
          pan : 'BTFFE7538H',
          aadharlink : 'aadhar.jpg'
      },
  ],
  a : 1,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  
handleClickOpen = () => {
  this.setState({ open: true });
};

handleClose = () => {
  this.setState({ open: false });
};
componentWillMount(){
  this.props.pathChange(window.location.pathname)
  console.log('pathname----->'+window.location.pathname)
  alert('pathname----->'+window.location.pathname)
}

  render() {
    const { classes } = this.props;
    const { expanded,data ,a} = this.state;

    return (
      <main className={classes.layout}>
      <Paper className={classes.paper}>
      <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
       View Customer Details
      </Typography>
          {/* <ExpansionPanel expanded={expanded === 'panel1'}> 
           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        */}
          <ExpansionPanel  expanded={expanded === 'panel1'}>
          <ExpansionPanelSummary>
            <Typography className={classes.heading} style={{width:'10%'}}>S.No</Typography>
            <Typography className={classes.heading} style={{width:'25%'}}>Registration Date</Typography>
            <Typography className={classes.heading} style={{width:'25%'}}>Customer No.</Typography>
            <Typography className={classes.heading} style={{width:'25%'}}>Customer Name</Typography>
            <Typography className={classes.heading} style={{width:'20%'}}>Mobile No.</Typography>
            <Typography className={classes.heading} style={{width:'15%'}}>City</Typography>
          </ExpansionPanelSummary>
          </ExpansionPanel>

{this.state.data.map(data =>  
 
// {  this.setState({
//    a : a + 1
//  })
// }
  <ExpansionPanel expanded={expanded === data} onChange={this.handleChange(data)}>
  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
    <Typography className={classes.secondaryHeading} style={{width:'10%'}}>  {  data.sNo} </Typography>
    <Typography className={classes.secondaryHeading} style={{width:'25%'}}> {  data.RegDate } </Typography>
    <Typography className={classes.secondaryHeading} style={{width:'25%'}}>  {  data.custId} </Typography>
    <Typography className={classes.secondaryHeading} style={{width:'25%'}}> {  data.name } </Typography>
    <Typography className={classes.secondaryHeading} style={{width:'20%'}}>  {  data.mobile } </Typography>
    <Typography className={classes.secondaryHeading} style={{width:'15%'}}> { data.city } </Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
  
  <Grid container spacing={24}>

  <Grid item xs={12}  md={12}><Typography className={classes.subHead}>Personal Details </Typography></Grid>

            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Address1 :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.address1} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Address2 :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.address2} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Email :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.email} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>State :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.stateName} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Zip Code :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.zip} </Typography></Grid>
             

            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Country :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.country} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Aadhar No. :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.aadhar} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Pan Card No. :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.pan} </Typography></Grid>
             
            <Grid item xs={12}  md={12}><Typography className={classes.subHead}>Property Details </Typography></Grid>

            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Survey Number :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.surveyNo} </Typography></Grid>
              
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Construction Type :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.projType} </Typography></Grid>
                
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Area (in Sq.ft) :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.area} </Typography></Grid>
             
            <Grid item xs={2}  md={2}><Typography className={classes.heading}>Land Address :</Typography></Grid>
            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}>  {  data.landAddress} </Typography></Grid>
             
            <Grid item xs={12}  md={12}><Typography className={classes.subHead}>Documents </Typography></Grid>

            <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}><a href={'Docs/'+data.aadharlink} >
            {data.aadharlink}
            </a>   </Typography></Grid>
             

        <Grid item xs={4}  md={4}><Typography className={classes.secondaryHeading}><a href='https://www.w3schools.com/images/myw3schoolsimage.jpg' download >
                  Pan.jpg
        </a>   </Typography></Grid>

        <Grid item xs={4}  md={4}>
        <a href="https://www.w3schools.com/images/myw3schoolsimage.jpg" download>
          Houseplan.jpg
        </a>
        </Grid>     

         <Grid item xs={3} md={3}>
     </Grid>
     <Grid item xs={3} md={3}>
                    <Button className={classes.prevbutton}
                      label="Previous"
                      variant="contained"
                      color = "primary"
                      primary={true}
                      onClick={this.back}>Reject</Button>
                  </Grid>
                  <Grid item xs={1} md={1}>
     </Grid>
     <Grid item xs={5} md={5}>
                    <Button className={classes.nextbutton}
                      label="Next"
                      variant="contained"
                      color = "primary"
                      primary={true}
                      onClick={this.handleClickOpen}>Approve</Button>
       
        </Grid>   
</Grid>
  </ExpansionPanelDetails>
</ExpansionPanel>

 )}
</React.Fragment>
</Paper>



<Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Is want to Approve?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Once you are approved, can not be Reject this application.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Back
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>


</main>
    );
  }
}

CustomerDetailsView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerDetailsView);