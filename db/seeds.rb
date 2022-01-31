# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Friendship.destroy_all
Expense.destroy_all
ExpenseSplit.destroy_all

User.create(name: 'Guest User', email: 'guest_user@demo.com', password: 'password');
User.create(name: 'David Suh', email: 'david@email.com', password: 'password');
User.create(name: 'John Cigale', email: 'john@email.com', password: 'password');
User.create(name: 'Kin Ka Tse', email: 'kin@email.com', password: 'password');
User.create(name: 'Sam Lilly', email: 'saml@email.com', password: 'password');
User.create(name: 'Sammy Huang', email: 'sammy@email.com', password: 'password');
User.create(name: 'Julia Kim', email: 'julia@email.com', password: 'password');
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
Friendship.create(user_id: 1, friend_id: 8)
Friendship.create(user_id: 1, friend_id: 9)
Friendship.create(user_id: 1, friend_id: 13)
Friendship.create(user_id: 1, friend_id: 19)
Friendship.create(user_id: 1, friend_id: 26)
Friendship.create(user_id: 1, friend_id: 27)




Expense.create(payer_id: 1, description: "Piggy Back Ride", amount: 12.00, date: "2022/01/02", split_option: "equal")
Expense.create(payer_id: 2, description: "Movies", amount: 40.00, date: "2022/01/03", split_option: "equal")
Expense.create(payer_id: 3, description: "Groceries", amount: 30.00, date: "2022/01/04", split_option: "equal")
Expense.create(payer_id: 4, description: "Uber", amount: 45.00, date: "2022/01/05", split_option: "equal")
Expense.create(payer_id: 7, description: "Dinner", amount: 40.00, date: "2022/01/06", split_option: "equal")
Expense.create(payer_id: 6, description: "Birthday", amount: 50.00, date: "2022/01/06", split_option: "equal")
Expense.create(payer_id: 7, description: "Helicopter Tour", amount: 250.00, date: "2022/01/06", split_option: "equal")
Expense.create(payer_id: 8, description: "Six Flags", amount: 150, date: "2022/01/12", split_option: "equal")
Expense.create(payer_id: 7, description: "Fishing Trip", amount: 200, date: "2022/01/12", split_option: "equal")
Expense.create(payer_id: 1, description: "Breakfast", amount: 100, date: "2022/01/12", split_option: "equal")
Expense.create(payer_id: 1, description: "Group Test", amount: 100, date: "2022/01/12", split_option: "equal", group_id: 1)



ExpenseSplit.create(expense_id: 1, user_id: 1)
ExpenseSplit.create(expense_id: 1, user_id: 2)

ExpenseSplit.create(expense_id: 2, user_id: 1)
ExpenseSplit.create(expense_id: 2, user_id: 2)
ExpenseSplit.create(expense_id: 2, user_id: 4)

ExpenseSplit.create(expense_id: 3, user_id: 1)
ExpenseSplit.create(expense_id: 3, user_id: 5)
ExpenseSplit.create(expense_id: 3, user_id: 6)
ExpenseSplit.create(expense_id: 3, user_id: 3)

ExpenseSplit.create(expense_id: 4, user_id: 1)
ExpenseSplit.create(expense_id: 4, user_id: 4)

ExpenseSplit.create(expense_id: 5, user_id: 1)
ExpenseSplit.create(expense_id: 5, user_id: 7)
ExpenseSplit.create(expense_id: 5, user_id: 5)

ExpenseSplit.create(expense_id: 6, user_id: 1)
ExpenseSplit.create(expense_id: 6, user_id: 6)

ExpenseSplit.create(expense_id: 7, user_id: 1)
ExpenseSplit.create(expense_id: 7, user_id: 2)
ExpenseSplit.create(expense_id: 7, user_id: 3)
ExpenseSplit.create(expense_id: 7, user_id: 4)
ExpenseSplit.create(expense_id: 7, user_id: 5)
ExpenseSplit.create(expense_id: 7, user_id: 6)
ExpenseSplit.create(expense_id: 7, user_id: 7)

ExpenseSplit.create(expense_id: 8, user_id: 1)
ExpenseSplit.create(expense_id: 8, user_id: 4)
ExpenseSplit.create(expense_id: 8, user_id: 8)

ExpenseSplit.create(expense_id: 9, user_id: 1)
ExpenseSplit.create(expense_id: 9, user_id: 7)
ExpenseSplit.create(expense_id: 9, user_id: 6)
ExpenseSplit.create(expense_id: 9, user_id: 5)

ExpenseSplit.create(expense_id: 10, user_id: 1)
ExpenseSplit.create(expense_id: 10, user_id: 2)
ExpenseSplit.create(expense_id: 10, user_id: 3)
ExpenseSplit.create(expense_id: 10, user_id: 4)
ExpenseSplit.create(expense_id: 10, user_id: 5)
ExpenseSplit.create(expense_id: 10, user_id: 6)
ExpenseSplit.create(expense_id: 10, user_id: 7)
ExpenseSplit.create(expense_id: 10, user_id: 8)

ExpenseSplit.create(expense_id: 11, user_id: 1)
ExpenseSplit.create(expense_id: 11, user_id: 2)
ExpenseSplit.create(expense_id: 11, user_id: 3)


Group.create(name: 'Roadtrip', group_type: 'Trip', creator_id: 1)
Group.create(name: "aA TA", group_type: 'Home', creator_id: 2)
Group.create(name: 'Mern Group', group_type: 'Other', creator_id: 1)

GroupMember.create(group_id: 1, user_id: 1)
GroupMember.create(group_id: 1, user_id: 2)
GroupMember.create(group_id: 1, user_id: 3)

GroupMember.create(group_id: 2, user_id: 1)
GroupMember.create(group_id: 2, user_id: 2)
GroupMember.create(group_id: 2, user_id: 3)
GroupMember.create(group_id: 2, user_id: 4)
GroupMember.create(group_id: 2, user_id: 5)
GroupMember.create(group_id: 2, user_id: 6)
GroupMember.create(group_id: 2, user_id: 7)
GroupMember.create(group_id: 2, user_id: 8)

GroupMember.create(group_id: 3, user_id: 1)
GroupMember.create(group_id: 3, user_id: 4)
GroupMember.create(group_id: 3, user_id: 7)
GroupMember.create(group_id: 3, user_id: 8)