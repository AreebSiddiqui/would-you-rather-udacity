import { saveQuestion, saveQuestionAnswer  } from "../../utils/api";
import { postQuestionUser, postAnswerUser } from "./users";
import { showLoading, hideLoading  } from "react-redux-loading";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const POST_QUESTION = "POST_QUESTION";
export const POST_ANSWER = "POST_ANSWER";

function postQuestion (question){
    return {
        type: POST_QUESTION,
        question
    }
}

function postAnswer (answer){
    return {
        type: POST_ANSWER,
        answer
    }
}

export function postHandleAddAnswer(qid, answer){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        const info = {
            authedUser,
            qid,
            answer
        }
        return saveQuestionAnswer(info)
        .then(() => {
            dispatch(postAnswer(info));
            dispatch(postAnswerUser(info));
            dispatch(hideLoading());
        })
    }
}


export function PostHandleAddQuesiton(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then ((question) => {
            dispatch(postQuestion(question))
            dispatch(postQuestionUser(authedUser, question.id))
        })
        .then (() => dispatch(hideLoading()));
    }
}

export function PostReceiveQues(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}