class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
        t.string :name, null: false
        t.string :type, null: false
        t.integer :creator_id, null: false
      t.timestamps
    end

    add_index :groups, :creator_id
  end
end
