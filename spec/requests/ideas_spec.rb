require 'rails_helper'

RSpec.describe 'Ideas API', type: :request do
  # add todos owner
  let(:user) { create(:user) }
  let!(:ideas) { create_list(:idea, 10, user_id: user.id) }
  let(:idea_id) { ideas.first.id }
  # authorize request
  let(:headers) { valid_headers }

  describe 'GET /todos' do
    # update request with headers
    before { get '/todos', params: {}, headers: headers }

    it 'returns ideas' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /todos/:id
  describe 'GET /ideas/:id' do
    before { get "/ideas/#{idea_id}", params: {}, headers: headers }

    context 'when the record exists' do
      it 'returns the idea' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(idea_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:idea_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Idea/)
      end
    end
  end

  # Test suite for POST /todos
  describe 'POST /ideas' do
    # valid payload
    let(:valid_attributes) do
      { title: 'Learn Elm', body: 'Cool thing', user_id: 1}.to_json
    end

    context 'when the request is valid' do
      before { post '/ideas', params: valid_attributes, headers: headers }

      it 'creates a idea' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      let(:invalid_attributes) { { title: nil }.to_json }
      before { post '/ideas', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(json['message'])
          .to match(/Validation failed: Created by can't be blank/)
      end
    end
  end

  # Test suite for PUT /todos/:id
  describe 'PUT /ideas/:id' do
    let(:valid_attributes) { { title: 'Shopping' }.to_json }

    context 'when the record exists' do
      before { put "/ideas/#{idea_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /todos/:id
  describe 'DELETE /ideas/:id' do
    before { delete "/ideas/#{idea_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end