import { combineReducers } from "redux";
import friendshipsErrorsReducer from "./friendship_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import expenseErrorsReducer from "./expense_errors_reducer";
import groupErrorsReducer from "./group_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    friendships: friendshipsErrorsReducer,
    expense: expenseErrorsReducer,
    group: groupErrorsReducer
});

export default errorsReducer;