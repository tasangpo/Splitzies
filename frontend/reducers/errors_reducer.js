import { combineReducers } from "redux";
import friendshipsErrorsReducer from "./friendship_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    friendships: friendshipsErrorsReducer
});

export default errorsReducer;