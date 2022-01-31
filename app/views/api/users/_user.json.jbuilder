json.extract! user, :id, :name, :email
json.friendIds user.friends.pluck(:friend_id)
json.expenseIds user.expense_splits.pluck(:expense_id)
json.groupIds user.group_memberships.pluck(:group_id)