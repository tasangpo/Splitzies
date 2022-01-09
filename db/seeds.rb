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
User.create(name: 'David Suh', email: 'david@email.com', password: 'password');
User.create(name: 'John Cigale', email: 'john@email.com', password: 'password');
User.create(name: 'Kin Ka Tse', email: 'kin@email.com', password: 'password');
User.create(name: 'Sam Lilly', email: 'saml@email.com', password: 'password');
User.create(name: 'Sammy Huang', email: 'sammy@email.com', password: 'password');
User.create(name: 'Tahj Harris', email: 'tahj@email.com', password: 'password');
User.create(name: 'Alex Wong', email: 'alexw@email.com', password: 'password');
User.create(name: 'Alex Dziuba', email: 'alexd@email.com', password: 'password');
User.create(name: 'Andrew Vitovitch', email: 'andrew@email.com', password: 'password');
User.create(name: 'Andy Yu', email: 'andy@email.com', password: 'password');
User.create(name: 'Anna Trott-Herdrich', email: 'anna@email.com', password: 'password');
User.create(name: 'Anthony Carroll', email: 'anthony@email.com', password: 'password');
User.create(name: 'Anuj Gupta', email: 'anuj@email.com', password: 'password');
User.create(name: 'Brian Lin', email: 'brian@email.com', password: 'password');
User.create(name: 'Caleb Jones', email: 'caleb@email.com', password: 'password');
User.create(name: 'Chaya Cohen', email: 'chaya@email.com', password: 'password');
User.create(name: 'Christian Lee', email: 'christian@email.com', password: 'password');
User.create(name: 'Jason Chu', email: 'jason@email.com', password: 'password');
User.create(name: 'Joe Manso', email: 'joe@email.com', password: 'password');
User.create(name: 'Josh Laikowski', email: 'josh@email.com', password: 'password');
User.create(name: 'Julio Tavarez', email: 'julio@email.com', password: 'password');
User.create(name: 'Kyle Ginzburg', email: 'kyle@email.com', password: 'password');
User.create(name: 'Mack Zumarraga', email: 'mack@email.com', password: 'password');
User.create(name: 'Emily Ng', email: 'emily@email.com', password: 'password');
User.create(name: 'Marco Countryman', email: 'marco@email.com', password: 'password');
User.create(name: 'Nick Barrameda', email: 'nick@email.com', password: 'password');
User.create(name: 'Sam Gelernter', email: 'samg@email.com', password: 'password');
User.create(name: 'Sonja Ng', email: 'sonja@email.com', password: 'password');
User.create(name: 'Stella Choi', email: 'stella@email.com', password: 'password');
User.create(name: 'Stephanie Soni', email: 'stephanie@email.com', password: 'password');
User.create(name: 'Steven Sookhai', email: 'steven@email.com', password: 'password');
User.create(name: 'Susan Zea', email: 'susan@email.com', password: 'password');
User.create(name: 'Tashi Sangpo', email: 'tashi@email.com', password: 'password');
User.create(name: 'Virginia Knight', email: 'virginia@email.com', password: 'password');
User.create(name: 'Visshal Kannan', email: 'visshal@email.com', password: 'password');
User.create(name: 'Yisrael Peikes', email: 'yisrael@email.com', password: 'password');

Friendship.create(user_id: 1, friend_id: 2)
Friendship.create(user_id: 1, friend_id: 3)
Friendship.create(user_id: 1, friend_id: 4)
Friendship.create(user_id: 1, friend_id: 5)
Friendship.create(user_id: 1, friend_id: 6)
Friendship.create(user_id: 1, friend_id: 7)
