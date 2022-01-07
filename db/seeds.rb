# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Friendship.delete_all

User.create(name: 'Guest User', email: 'guest_user@demo.com', password: 'password');
User.create(name: 'Randy Marsh', email: 'randy@tegridy.com', password: 'password');
User.create(name: 'Mantis Toboggan', email: 'wolfcola@paddys.com', password: 'password');
User.create(name: 'Tashi Sangpo', email: 'tashi@realemail.com', password: 'password');


Friendship.create(user_id: 1, friend_id: 2)
Friendship.create(user_id: 1, friend_id: 3)
