Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  # user
  post '/users', to: 'users#register'

end
