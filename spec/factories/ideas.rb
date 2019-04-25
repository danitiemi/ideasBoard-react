# spec/factories/todos.rb
FactoryBot.define do
  factory :idea do
    title { Faker::Lorem.word }
    body { Faker::StarWars.character }
    # user_id { Faker::Number.number(10) }
  end
end
