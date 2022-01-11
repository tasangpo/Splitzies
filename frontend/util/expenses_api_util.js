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
}

export const deleteExpense = expenseId => {
    return $.ajax({
        method: "DELETE",
        url: `api/expenses/${expenseId}`
    })
}