import React, { Component } from 'react';

import Login from "../auth/login.js";
import loginImg from "../../../static/assets/auth/images/login.jpg";




export default class Auth extends Component {
    constructor(props) {
        super(props);
    
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
      }
    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }
    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin();
    }
        render() {
            return (
                <div className="auth-page-wrapper">
                    <div
                        className="left-column-auth"
                        style={{
                            backgroundImage: `url(${loginImg})`
                        }}
                    />



                    <div className="right-column-auth">
                        <Login
                            handleSuccessfulAuth={this.handleSuccessfulAuth}
                            handleUnSuccessfulAuth ={this.handleUnSuccessfulAuth}
                        />
                    </div>
                </div>
            );
        }
    }