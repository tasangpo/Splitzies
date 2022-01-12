import { RECEIVE_EXPENSE, RECIEVE_EXPENSE_ERRORS, REMOVE_EXPENSE_ERRORS } from "../actions/expense_actions";

const expenseErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECIEVE_EXPENSE_ERRORS:
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