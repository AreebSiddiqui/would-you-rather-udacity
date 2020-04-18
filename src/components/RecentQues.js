import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { PostHandleAddQuesiton } from "../store/actions/questions";

import './App.css';

class RecentQues extends Component {

    state = {
        optionOne:'',
        optionTwo:'',
        toHome: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {optionOne , optionTwo} = this.state;
        this.props.dispatch(PostHandleAddQuesiton(optionOne, optionTwo));
        // add in store 
        this.setState({
            optionOne:'',
            optionTwo:'',
            toHome: true
        });
    }

    render() {

        const { toHome} = this.state;
        
        const { authedUser} = this.props;
        if(!authedUser){
            return <Redirect to="/login" />
        }
        
        if(toHome){
            return <Redirect to={"/home"} />
        }

        return (
            <div>
                <div className="long-new-question-container">
                    <Paper className="long-new-question-paper">
                        <div className="new-question-box-header">
                            Ask
                        </div>
                        <div className="new-question-controls">
                            <div >
                                You question ?
                            </div>
                            <div className="new-question-text">
                                Would you rather...
                            </div>
                            <form>
                                <TextField
                                    id="outlined-name"
                                    label="Option One"
                                    className="new-question-form-control"
                                    value={this.state.optionOne}
                                    onChange={this.handleChange('optionOne')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                                <div className="new-question-separator">
                                    OR
                                </div>
                                <TextField
                                    id="outlined-name"
                                    label="Option Two"
                                    className="new-question-form-control"
                                    value={this.state.optionTwo}
                                    onChange={this.handleChange('optionTwo')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </form>
                        </div>
                        <Button variant="contained" color="inherit" className="new-question-form-control" onClick={this.handleSubmit}>Submit</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(RecentQues);
