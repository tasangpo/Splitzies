# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_11_205642) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "expense_splits", force: :cascade do |t|
    t.integer "expense_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expense_id"], name: "index_expense_splits_on_expense_id"
    t.index ["user_id"], name: "index_expense_splits_on_user_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.integer "payer_id", null: false
    t.string "description", null: false
    t.float "amount", null: false
    t.date "date", null: false
    t.string "split_option", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["payer_id"], name: "index_expenses_on_payer_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "friend_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
