import { GET_QUESTIONS, POST_QUESTION, POST_ANSWER } from '../actions/questions';


export default function questions (state = {}, action) {
    switch(action.type){
        case GET_QUESTIONS : 
            return {
                ...state,
                ...action.questions
            }
        case POST_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id] : question,
            }
        case POST_ANSWER:
            const { answer } = action;
            return {
                ...state,
                [answer.qid] : {
                    ...state[answer.qid],
                    [answer.answer] : {
                        ...state[answer.qid][answer.answer],
                        votes : state[answer.qid][answer.answer].votes.concat([answer.authedUser])
                    }
                }
            }
        default :
            return state;
    }
}