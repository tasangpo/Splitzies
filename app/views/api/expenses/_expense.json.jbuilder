json.extract! expense, :id, :payer_id, :description, :amount, :date, :split_option, :group_id
json.splitterIds expense.splits.pluck(:user_id)
