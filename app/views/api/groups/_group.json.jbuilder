json.extract! group, :id, :name, :group_type, :creator_id
json.memberIds group.members.pluck(:user_id)
json.expenseIds group.expenses.pluck(:id)

