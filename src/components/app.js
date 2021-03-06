import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from './pages/no-match';
import Auth from "./pages/auth";
import PortfolioManager from "./pages/portfolio-manager";
import Icons from '../style/helpers/icons';

export default class App extends Component {

  constructor(props) {
    super(props);
    Icons();
    
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }
  
handleSuccessfulLogin() {
  this.setState({
    loggedInStatus: "LOGGED_IN"
  });
}

handleUnSuccessfulLogin() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}
  
handleSuccessfulLogout() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}
  checkLogInStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
      withCredentials: true
      })
      .then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;
      console.log("logged_in status", response);

      // if loggedIn and status LOGGED_IN 
      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("There has been an error", error);
    })
  }
  
  componentDidMount() {
    this.checkLogInStatus();
  }

  authorizedPages() {
    return[
      <Route
      key="portfio-manager"
      path="/portfolio-manager"
      component={PortfolioManager}
       />
    ];
  }

  render() {
    
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout= {this.handleSuccessfulLogout}

            />
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                )}
              />
              
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (
  this.authorizedPages()
) : null}
              <Route
                exact path="/portfolio/:slug"
                component={PortfolioDetail} />
              
             
              <Route path="/blog" 
                render={props => (
                  <Blog {...props} loggedInStatus = {this.state.loggedInStatus} />
                )}
                />
              <Route
                path="/b/:slug"
                render={props => (
                  <BlogDetail
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
               {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
              : null}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        
          
      
      </div>

    

    );
  }
}
