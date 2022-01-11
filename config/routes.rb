Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
    resources :expenses, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
