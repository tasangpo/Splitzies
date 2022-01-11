json.extract! user, :id, :name, :email
json.friendIds user.friends.pluck(:friend_id)
json.expenseIds user.expenses.pluck(:id)