import { GET_USERS, POST_QUESTION_USER, POST_ANSWER_USER } from '../actions/users';

export default function users (state = {}, action) {
    switch(action.type){
        case GET_USERS : 
            return {
                ...state,
                ...action.users
            }
        case POST_QUESTION_USER : 
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    questions : state[action.authedUser].questions.concat([action.questionId])
                }
            }
        case POST_ANSWER_USER:
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers : {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default :
            return state;
    }
}