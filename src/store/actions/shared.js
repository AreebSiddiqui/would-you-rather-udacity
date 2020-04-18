import { getInitialData } from '../../utils/api';
import { PostReceiveQues } from './questions';
import { receiveUsers } from './users';
import { showLoading, hideLoading  } from "react-redux-loading";

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(PostReceiveQues(questions));
                dispatch(hideLoading());
            })
    }
}
