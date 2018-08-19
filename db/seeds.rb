# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ideas = Idea.create(
  [
    {
      title: "Redesign Tweeter project",
      body: "Using React and Rails"
    },
    {
      title: "Next Vacation",
      body: "Japan"
    },
    {
      title: "Home office setup",
      body: "Cool table with 2 monitors"
    },
    {
      title: "My website",
      body: "Design with some doodling and animation"
    }
  ])
