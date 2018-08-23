class Idea < ApplicationRecord
  #Validations
  validates_presence_of :title, :body

end
