import { combineReducers } from "redux";
import modalIdReducer from "./modal_id_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    modalId: modalIdReducer
})

export default uiReducer;