class CreateExpenseSplits < ActiveRecord::Migration[6.1]
  def change
    create_table :expense_splits do |t|
      t.integer :expense_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :expense_splits, :expense_id
    add_index :expense_splits, :user_id
  end
end
