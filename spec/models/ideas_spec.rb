require 'rails_helper'

# Test suite for the Todo model
RSpec.describe Idea, type: :model do
  # Association test
  # ensure an item record belongs to a single user record
  it { should belong_to(:user) }
  # ensure Todo model has a 1:m relationship with the Item model
  # it { should have_many(:items).dependent(:destroy) }
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:user_id) }
end