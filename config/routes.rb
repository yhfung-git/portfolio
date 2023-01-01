Rails.application.routes.draw do
  root to: "pages#home"
  get "download", to: "pages#download"
end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

# Defines the root path route ("/")
# root "articles#index"
