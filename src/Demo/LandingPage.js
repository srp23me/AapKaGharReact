import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 565,
        width: 660
      },
      margin: {
        margin: theme.spacing.unit,
        
      },
  });

class LandingPage extends Component {
    state = {
        spacing: '16',
      };
    render() { 
        const { classes } = this.props;
        const { spacing } = this.state;
        return ( 

            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    
                    <Grid>
                        <Paper className={classes.paper} />
                    </Grid>
                    <div style={{width:'10px'}}/>
                    <Grid>
                        <Paper className={classes.paper} >
                            <React.Fragment>

                                <TextField
                                    className={classes.margin}
                                    label="MuiThemeProvider"
                                    variant="outlined"
                                    id="mui-theme-provider-outlined-input"
                                />
                            </React.Fragment>
                        </Paper>
                    </Grid>
                    
                </Grid>
                </Grid>
            </Grid>
            
             
         );
    }
}
 
export default withStyles(styles)(LandingPage);