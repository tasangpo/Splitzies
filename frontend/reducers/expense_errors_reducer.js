import { RECEIVE_EXPENSE, RECEIVE_EXPENSE_ERRORS, REMOVE_EXPENSE_ERRORS } from "../actions/expense_actions";

const expenseErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_EXPENSE_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_EXPENSE:
            return [];
        case REMOVE_EXPENSE_ERRORS:
            return [];
        default:
            return state;
    }
}

export default expenseErrorsReducer;