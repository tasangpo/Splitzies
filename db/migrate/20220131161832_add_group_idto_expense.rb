class AddGroupIdtoExpense < ActiveRecord::Migration[6.1]
  def change
    add_column :expenses, :group_id, :integer
    add_index :expenses, :group_id
  end
end
