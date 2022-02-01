import * as APIUtil from "../util/expenses_api_util"

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const RECEIVE_EXPENSE_ERRORS = "RECEIVE_EXPENSE_ERRORS";
export const REMOVE_EXPENSE_ERRORS = "REMOVE_EXPENSE_ERRORS"

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
        type: REMOVE_EXPENSE,
        expenseId
    })
};


const receieveExpenseErrors = errors => {
    return ({
        type: RECEIVE_EXPENSE_ERRORS,
        errors
    })
}

export const removeExpenseErrors = () => {
    return ({
        type: REMOVE_EXPENSE_ERRORS
    })
}

export const fetchExpenses = () => dispatch => {
    return APIUtil.fetchExpenses().then(expenses => dispatch(receiveExpenses(expenses)))
};

export const fetchExpense = expenseId => dispatch => {
    return APIUtil.fetchExpense(expenseId).then(expense => dispatch(receiveExpense(expense)))
};

export const createExpense = expense => dispatch => {
    return APIUtil.createExpense(expense).then(expense => {
        dispatch(receiveExpense(expense))
        return expense
    }, 
        errors => {
            dispatch(receieveExpenseErrors(errors.responseJSON))}
        )
}

export const updateExpense = expense => dispatch => {
    return APIUtil.updateExpense(expense).then(expense => {
        dispatch(receiveExpense(expense))
        return expense
    },
    errors => {
        dispatch(receieveExpenseErrors(errors.responseJSON))
    })
}

export const deleteExpense = expenseId => dispatch => {
    return APIUtil.deleteExpense(expenseId).then(() => dispatch(removeExpense(expenseId)))
}

export const createExpenseSplit = payload => dispatch => {
    return APIUtil.createExpenseSplit(payload).then(expense => {
        dispatch(receiveExpense(expense))
        return expense
    },
    errors => {
        dispatch(receieveExpenseErrors(errors.responseJSON))
    })
}

