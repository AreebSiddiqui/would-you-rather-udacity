import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import { calculateUserScore } from "../utils/helper";
import { connect } from "react-redux";

import './App.css';

class Scores extends Component {

    render() {
        const { user } = this.props;
        
        return (
            <div>
                <Paper className="score-card-container">
                    <Grid container spacing={16}>
                        <Grid item xs={3} alignItems="center" justify="center" container>
                            <div>
                                <img className="score-card-img" alt="complex" src={user.avatarURL} />
                            </div>
                        </Grid>
                        <Grid item xs={1} className="score-card-separator-grid">
                            <div className="score-car-separator">
                            </div>
                        </Grid>
                        <Grid item xs={7} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs >
                                    <div className="score-card-name-box">
                                        {user.name}
                                    </div>
                                </Grid>
                                <Grid item xs container>
                                    <Grid xs={10} item >
                                        Answered questions
                                    </Grid>
                                    <Grid xs={2} item>
                                        {Object.keys(user.answers).length}
                                    </Grid>
                                </Grid>
                                <Grid item xs container>
                                    <Grid item xs={10}>
                                        Created questions
                                    </Grid>
                                    <Grid item xs={2}>
                                        {user.questions.length}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className="score-card-separator-grid">
                            <div className="score-card-separator">
                            </div>
                        </Grid>
                        <Grid xs={2} item container direction="column" alignItems="center" justify="center">
                                <Paper className="score-card-score-paper">
                                    <Grid item container direction="column" className="score-card-score-grid">
                                        <Grid item className="score-card-score-box-header">
                                            Score
                                        </Grid>
                                        <Grid item alignItems="center" justify="center" container>
                                        <Badge color="secondary" className="score-card-badge"
                                                badgeContent={calculateUserScore(user)} >
                                            <span></span>
                                        </Badge>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps({authedUser, questions, users}, { id }) {
    return {
        authedUser,
        user: users[id],
    }
}

export default connect(mapStateToProps)(Scores);
