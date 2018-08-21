Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :ideas  
    end
  end

  #add our register route
  post 'auth/register', to: 'users#register'

  post 'auth/login', to: 'users#login'
  get 'test', to: 'users#test'

end
