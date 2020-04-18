import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import DashBoard from "./DashBoard";
import NotFound from "./NotFound";
import Navigation from "./Navigation";
import Login from "./Login";
import RecentQues from "./RecentQues";
import LeaderBoard from "./LeaderBoard";
import Scores from "./Scores";
import DisplayQuestion from "./DisplayQuestion";
import Polling from "./Polling";
import history from "../History";
import { handleInitialData  } from "../store/actions/shared";

import './App.css';

class App extends Component {

    componentDidMount(){
        this.props.initializeData();
    }

    render() {
        return (
            <div>
                <Router history={history}>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/home" component={DashBoard} />
                        <Route exact path="/newquestion" component={RecentQues} />
                        <Route exact path="/leaderboard" component={LeaderBoard} />
                        <Route exact path="/pollresult/:id" component={Polling} />
                        <Route exact path="/question/:id" component={DisplayQuestion} />
                        <Route exact path="/scorecard" component={Scores} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>

            </Router>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initializeData: () => {
            dispatch(handleInitialData());
        }
    };
}

export default connect(null, mapDispatchToProps)(App);

 