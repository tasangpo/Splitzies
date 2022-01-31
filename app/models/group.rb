# == Schema Information
#
# Table name: groups
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  group_type :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Group < ApplicationRecord
    validates :name, :group_type, :creator_id, presence: true

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :members,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :GroupMember,
        dependent: :destroy

    has_many :expenses,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Expense

end
