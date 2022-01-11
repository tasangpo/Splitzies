import * as APIUtil from "../util/expenses_api_util"

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";


const receiveExpenses = expenses => {
    return ({
        type: RECEIVE_EXPENSES,
        expenses
    })
};

const receiveExpense = expense => {
    return ({
        type: RECEIVE_EXPENSE,
        expense
    })
};

const removeExpense = expenseId => {
    return ({
        tyoe: REMOVE_EXPENSE
    })
};


export const fetchExpenses = () => dispatch => {
    return APIUtil.fetchExpenses().then(expenses => dispatch(receiveExpenses(expenses)))
};

export const fetchExpense = expenseId => dispatch => {
    return APIUtil.fetchExpense(expenseId).then(expense => dispatch(receiveExpense(expense)))
};

export const createExpense = expense => dispatch => {
    return APIUtil.createExpense(expense).then(expense => dispatch(receiveExpense(expense)))
}

export const deleteExpense = expenseId => dispatch => {
    return APIUtil.deleteExpense(expenseId).then(() => dispatch(removeExpense(expenseId)))
}