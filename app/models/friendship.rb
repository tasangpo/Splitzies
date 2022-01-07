# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
    validates :user_id, :friend_id, presence: true

    belongs_to :friender,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :friends,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: :User 
end
