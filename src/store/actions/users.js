export const GET_USERS = "GET_USERS";
export const POST_QUESTION_USER = "POST_QUESTION_USER";
export const POST_ANSWER_USER = "POST_ANSWER_USER";

export function postAnswerUser({authedUser, qid, answer}){
    return {
        type: POST_ANSWER_USER,
        authedUser,
        qid,
        answer
    }
}

export function postQuestionUser(authedUser, questionId){
    return {
        type: POST_QUESTION_USER,
        authedUser,
        questionId
    }
}

export function receiveUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}