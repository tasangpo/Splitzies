class ChangeFriendsToFriendships < ActiveRecord::Migration[6.1]
  def change
    rename_table :friends, :friendships
  end
end
