json.extract! user, :id, :name, :email
json.friendIds user.friends.pluck(:friend_id)