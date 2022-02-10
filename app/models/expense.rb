# == Schema Information
#
# Table name: expenses
#
#  id           :bigint           not null, primary key
#  payer_id     :integer          not null
#  description  :string           not null
#  amount       :float            not null
#  date         :date             not null
#  split_option :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  group_id     :integer
#
class Expense < ApplicationRecord
    validates :payer_id, :description, :amount, :date, :split_option, presence: true

    belongs_to :payer,
        primary_key: :id,
        foreign_key: :payer_id,
        class_name: :User
    
    has_many :splits,
        primary_key: :id,
        foreign_key: :expense_id,
        class_name: :ExpenseSplit,
        dependent: :destroy

    belongs_to :group,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Group,
        optional: true

    has_many :comments,
        primary_key: :id,
        foreign_key: :expense_id,
        class_name: :Comment

end
