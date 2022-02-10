# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  expense_id :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :author_id, :expense_id, :body, presence: true

    belongs_to :expense,
        primary_key: :id,
        foreign_key: :expense_id,
        class_name: :Expense

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User


end
