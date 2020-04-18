import React, { Component } from 'react';
import DoPoll from './DoPoll';
import { connect } from "react-redux";

class Container extends Component {
  render() {
    return (
      <div>
        {
            this.props.questionIds.map((id) => (
                <DoPoll key={id} id={id}></DoPoll>
            ))
        }
      </div>
    );
  }
}

function mapStateToProps({users, questions, authedUser}, {answered}) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
            .filter((a)=> {
                return authedUser && (answered? users[authedUser].answers[a] : !users[authedUser].answers[a]);
            })
    }
}

export default connect(mapStateToProps,null)(Container);
