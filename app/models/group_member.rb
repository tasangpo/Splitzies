# == Schema Information
#
# Table name: group_members
#
#  id         :bigint           not null, primary key
#  group_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GroupMember < ApplicationRecord
    validates :group_id, :user_id, presence: true
    validates :user_id, uniqueness: {scope: :group_id}

    belongs_to :group,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Group

    belongs_to :member,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
