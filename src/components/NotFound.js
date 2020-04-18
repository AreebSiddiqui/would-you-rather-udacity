import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './App.css'

class NotFound extends Component {
  render() {
    return (
        <div>
        <div className="not-found-container">
            <Paper>
                <div className="not-found-header">
                    <div className="not-found-title">
                        Sorry Not Found!
                    </div>
                    <div className="not-found-message">
                    <image src = "../assets/not-found.png"></image>
                    </div>
                </div>
                <Button variant="contained" color="inherit" className="notFoundformControl" component={Link} to={"/home"}>GoTo Home Page</Button>
            </Paper>
        </div>
    </div>
    );
  }
}

export default NotFound;
