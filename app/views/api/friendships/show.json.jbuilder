#json.extract! @friendship, :id, :user_id, :friend_id

json.partial! 'api/users/user', user: current_user