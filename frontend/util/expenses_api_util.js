export const fetchExpenses = () => {
    return $.ajax({
        method: "GET",
        url: 'api/expenses'
    })
};

export const fetchExpense = expenseId => {
    return $.ajax({
        method: "GET",
        url: `api/expenses/${expenseId}`
    })
};

export const createExpense = expense => {
    return $.ajax({
        method: "POST",
        url: "api/expenses",
        data: { expense }
    })
};

export const updateExpense = expense => {
    return $.ajax({
        method: "PATCH",
        url: `api/expenses/${expense.id}`,
        data: { expense }
    })
};

export const deleteExpense = expenseId => {
    return $.ajax({
        method: "DELETE",
        url: `api/expenses/${expenseId}`
    })
};


export const createExpenseSplit = payload => {
    return $.ajax({
        method: "POST",
        url: `api/expense_splits`, 
        data: { payload }
    })
};

export const createComment = comment => {
    return $.ajax({
        method: "POST",
        url: "api/comments",
        data: { comment }
    })
};

export const deleteComment = id => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${id}`
    })
}






