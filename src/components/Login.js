import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import { connect } from "react-redux";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../store/actions/authedUser";

import './App.css';

class Login extends Component {

    state = {
        userId: '',
        value: false,
    };

    handleChange = event => {
        this.setState({ userId: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { userId } = this.state;
        this.props.dispatch(setAuthedUser(userId));
        // add in store 
        this.setState({
            userId:'',
            value: true
        });
    }

    render() {
        const {userIds, users} = this.props;

        if(this.state.value){
            return <Redirect to="/home" />
        }

        return (
            <div>
                <div className="long-login-container">
                    <Paper>
                        <div className="login-box-header">
                            <div className="login-box-title">
                                Login
                            </div>

                        </div>
                        <div className="login-controls">
                            Sign In
                            <form>
                                <FormControl variant="filled" className="form-control">
                                    <InputLabel htmlFor="filled-user">Select User</InputLabel>
                                    <Select
                                        value={this.state.userId}
                                        onChange={this.handleChange}
                                        input={<FilledInput name="userId" id="filled-user" />}
                                    >
                                       
                                        {
                                            userIds.map((id) => (
                                                <MenuItem key={id} value={id}>
                                                    <ListItemIcon >
                                                        <img className="login-box-image" alt="NoImage" src={users[id].avatarURL} />
                                                    </ListItemIcon>
                                                    <ListItemText inset primary={users[id].name} />
                                                </MenuItem>        
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </form>
                        </div>
                        <Button variant="contained" color="inherit" className="form-control" onClick={this.handleSubmit}>Sign In</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser,
        userIds: Object.keys(users),
        users: users
    }
}

export default connect(mapStateToProps)(Login);
