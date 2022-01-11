class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.integer :payer_id, null: false
      t.string :description, null: false
      t.float :amount, null: false
      t.date :date, null: false
      t.string :split_option, null: false

      t.timestamps
    end
    add_index :expenses, :payer_id
  end
end
