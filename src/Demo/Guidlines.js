import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';
import Background from "../keys.jpg";

const styles = {
  root: {
    width: '100%',
    maxWidth: '100%',
    height : '100%',
    
    },
};

function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: true,
      autoFocus: true,
      fontFamily:'Monospace',
      fontweight:'normal',
      fontstyle: 'normal',
      fontSize: "100%",
      textTransform: "none",
      textShadow: "1px 1px 2px black"
      

    },
    
    palette:{

        primary:{ main:'#212121' },
        secondary :{ main: '#212121'},
    },
  });
}

function DeprecatedTypes(props) {
  const { classes } = props;

  return (

    <MuiThemeProvider theme={typographyV1Theme} >
      <div className={classes.root}>
      <div style={{padding: "25px"}}>
      <h3 style ={{color:'blue'}}>Guidlines</h3>
        <Typography gutterBottom Wrap color="primary">
             
          <ul>
            <li>This theme includes all types of data related to buildings and housing units in the land of India for the census years and from the reality of
        inventory of buildings and housing units and Establishments.</li>
        <li>
        The section also includes data on buildings under construction and completed buildings, 
        data on building permits issued, licensed areas, engineering laboratory tests and data on land transactions such as sales, collateral,
        release of collateral, and mortgage of land development lease.
        </li>


        </ul>
         
        </Typography>
        <h3 style ={{color:'blue'}}>Information</h3>
           
        <Typography gutterBottom Wrap color="secondary">
         
         <ul>
           <li>
           The study and identification of the status of construction in any geographical area provides a 
          clear picture of the extent of urban development in that area and a comprehensive indication of the general direction of that development.
           </li>
           <li>
           The land of India is considered as one of those cities which experienced a dramatic increase in the number of buildings and housing units. </li>
           <li>
          This dramatic increase must be highlighted and made available to planers, policy makers, and decision makers to identify the huge
           pressures exerted by the main basic services (water, electricity, sanitation services, etc…) 
           </li>
         </ul>

        </Typography>
      </div>
       
      </div>

    </MuiThemeProvider>
  );
}

DeprecatedTypes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeprecatedTypes);
