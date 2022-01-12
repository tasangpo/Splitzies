# == Schema Information
#
# Table name: expense_splits
#
#  id         :bigint           not null, primary key
#  expense_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ExpenseSplit < ApplicationRecord
    validates :expense_id, :user_id, presence: true
    validates :expense_id, uniqueness: {scope: :user_id}

    belongs_to :expense,
        primary_key: :id,
        foreign_key: :expense_id,
        class_name: :Expense

    belongs_to :splitter,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User


end
