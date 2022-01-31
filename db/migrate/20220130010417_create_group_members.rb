class CreateGroupMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :group_members do |t|
      t.integer :group_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :group_members, :group_id
    add_index :group_members, :user_id
  end
end
