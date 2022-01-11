import { RECEIVE_EXPENSES, RECEIVE_EXPENSE, REMOVE_EXPENSE } from "../actions/expense_actions";

const expensesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EXPENSES:
            return action.expenses
        case RECEIVE_EXPENSE:
            return Object.assign({}, state, { [action.expense.id]: action.expense })
        case REMOVE_EXPENSE:
            const nextState = Object.assign({}, state);
            delete nextState[action.expenseId];
            return nextState;
        default:
            return state;
    }
};

export default expensesReducer