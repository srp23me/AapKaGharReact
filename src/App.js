import React, { Component } from 'react';
import Appbar from './Demo/Appbar'
import Sidebar from './Demo/Sidebar'
import Divider from '@material-ui/core/Divider';
import Checkout from './Demo/Checkout'
import LandingPage from './Demo/LandingPage'
import SignIn from "./Demo/SignIn";
import { BrowserRouter as Router, Route, Switch ,Redirect, Link } from "react-router-dom"; 
import Grid from '@material-ui/core/Grid';
import Guide from './Demo/Guidlines'
import CustomerDetailsView from './Demo/CustomerDetailsView'
import NavTabs from './Demo/NavTabs'

class App extends Component {
    state = { 
        path: window.location.pathname 
    }
    pathChange = (path) =>{
        this.setState({
          path: path
        })
     }
    render() { 
        return ( 
            <Router> 
            <div className="background">
                <div>
                    <Appbar title={this.state.path}/>
                </div>
                <br/>
                <Switch>
                    <Route exact path='/' render={props => 
                        <Grid container spacing={24}>
                            <Grid style={{paddingRight:'0px', margin:'0'}} item xs={6}>
                            <Guide/>

                            </Grid>
                            <Grid style={{padding:'1px', margin:'0', overflowX: "hidden", height: '90vh'}} item xs={6}>
                            <SignIn/>

                            </Grid>
                        </Grid>} >
                    </Route>
                    <Route exact path='/SignIn' render={props => <SignIn pathChange={this.pathChange} />} ></Route>
                    <Route exact path='/Checkout' render={props => <Checkout pathChange={this.pathChange} />} ></Route>
                    <Route exact path='/NavTabs' render={props => <NavTabs pathChange={this.pathChange} />} ></Route>
                    <Route exact path='/adminPage' render={props => <CustomerDetailsView pathChange={this.pathChange} />} ></Route>
                </Switch>
            </div>
            </Router>
         );
    }
}
 
export default App;